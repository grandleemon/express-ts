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

app.get('/api/books/:bookId', getBookOne)

app.listen(PORT, () => {
  console.log('Server started at http://localhost:', PORT)
})