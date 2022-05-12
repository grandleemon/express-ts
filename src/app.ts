import express, {NextFunction, Request, Response} from 'express'
import routes from "./routes";

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

routes(app)

app.listen(PORT, () => {
  console.log('Server started at http://localhost:', PORT)
})