import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://penebola:angeleduardo13@bullbox.gukf6.mongodb.net/')
        console.log('la base de datos esta conectada')
    } catch (error) {
        console.log('no se conecto')
    }
}