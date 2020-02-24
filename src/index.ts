import express from 'express'
import bodyParser from 'body-parser'
import { connectDB} from './repositories'
import { userController } from './controllers/userController'
import { postController } from './controllers/postController'

const port = 1337

const app = express()
app.use( bodyParser.json() )

app.use( '/user', userController)
app.use( '/post', postController)

//default route
app.get('/', (req, res) => {
    res.send('API is running OK')
})

connectDB().then( async () => {
    app.listen(port, () => {
        console.log("API running on port: " + port)
    })
})
