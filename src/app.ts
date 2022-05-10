import express, {Request, Response} from 'express'

const app = express()
const PORT = 3000

app.use(express.json())
// app.use(express.urlencoded({extended: true}))

app.route('/')
  .get((req: Request, res: Response) => {
    return res.send("You made a GET request")
  })
  .post((req: Request, res: Response) => {
    return res.send("You made a POST request")
  })

app.listen(PORT, () => {
  console.log('Server started at http://localhost:', PORT)
})