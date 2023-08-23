const { default: mongoose } = require("mongoose")

export const mongodbConnect = async () =>{
    try {
        await mongoose.connect(process.env.DATABASE_URL)
    } catch (error) {
        console.log(error);
    }
}
