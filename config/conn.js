import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = mongoose.connect(`${process.env.DB_PATH}/jobportal`);
        console.log(`DB Connected Successfully ${process.env.DB_PATH}/jobportal`.bgBlack.green);
    } catch (error) {
        console.log(`Connection Error : ${error}`.bgBlack.red);
    }
}
export default connectDB;