import express, {Request, Response} from 'express'

const app = express()
const PORT = 3000

app.use(express.json())
// app.use(express.urlencoded({extended: true}))

app.get("/", (req: Request, res: Response) => {
  return res.redirect("http://example.com")
})

app.post('/api/data', (req: Request, res: Response) => {
  console.log(req.body)

  return res.sendStatus(200)
})

app.all('/api/all', (req: Request, res: Response) => {
  return res.sendStatus(200)
})

app.listen(PORT, () => {
  console.log('Server started at http://localhost:', PORT)
})