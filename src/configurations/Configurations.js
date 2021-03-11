import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectToDatabase = async () => {
    try {
        const DB_URL = process.env.DATABASE_URL
        await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Successfully connected to the database')
    } catch (error) {
        console.log('ERROR WHILE CONNECTING TO THE DATABASE: ', error)
        process.exit()

    }
}

const connectToPort = (app) => {
    const port = process.env.PORT || 3002
    app.listen(port, () => {
        console.log(`Servern är igång på port ${port}`)
    })
}

export default {
    connectToDatabase,
    connectToPort
}
/*   mongoose.connect('mongodb://localhost/tommytestdatabase', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('Successfully connected to the database'))
   .catch((error) => {
       console.log('ERROR WHILE CONNECTING TO THE DATABASE: ', error)
       process.exit()
   })*/