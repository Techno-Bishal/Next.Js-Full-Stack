import mongoose from "mongoose"

const MONGO_URI = process.env.MONGO_URI
if(!MONGO_URI){
    throw new Error("You must provide mongodb connection string")
}

   const dbConnect = async() => {
      if(mongoose.connection.readyState === 1){
         console.log("Database already connected!")
         return
      }
      try{
                await mongoose.connect(MONGO_URI)
                console.log("Database connected successfully")
      } catch(error){
             console.log("Error in connected database", error)
      }
   }

   export default dbConnect