import express, {NextFunction, Request, Response} from 'express'

const app = express()
const PORT = 3000

const middleware =
  ({name}: {name: string}) =>
  (req: Request, res: Response, next: NextFunction) => {
    res.locals.name = name

    next()
}

app.use(express.json())
// app.use(express.urlencoded({extended: true}))
app.use(middleware({name: "Max2"}))


const getBookOne =
  (req: Request<{bookId: string}, {}, {name: string}>, res: Response, next: NextFunction) => {
  console.log(res.locals.name)

  res.send(res.locals.name)
}

async function throwErrors(){
  throw new Error("Boom")
}

app.get('/api/books/:bookId', getBookOne)
app.get('/error', async (req: Request, res: Response) => {
  try{
    await throwErrors()
    res.sendStatus(200)
  } catch (e) {
    res.status(400).send('error')
  }
})

app.listen(PORT, () => {
  console.log('Server started at http://localhost:', PORT)
})