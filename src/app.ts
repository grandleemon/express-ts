import express, {Request, Response} from 'express'

const app = express()
const PORT = 3000

app.use(express.json())
// app.use(express.urlencoded({extended: true}))

app.get('/health', (req: Request, res: Response) => res.sendStatus(200))
app.get('/ab*cd', (req: Request, res: Response) => res.send("ab(your data)cd"))
app.get(/abc/, (req: Request, res: Response) => res.send("abc"))

app.listen(PORT, () => {
  console.log('Server started at http://localhost:', PORT)
})