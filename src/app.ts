import express, {Request, Response} from 'express'

const app = express()
const PORT = 3000

app.use(express.json())
// app.use(express.urlencoded({extended: true}))

app.get('/api/books/:bookId', (req: Request, res: Response) => {
  console.log(req.params)

  return res.send(req.params)
})


app.listen(PORT, () => {
  console.log('Server started at http://localhost:', PORT)
})