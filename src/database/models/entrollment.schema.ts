import mongoose from "mongoose";

const Schema = mongoose.Schema

interface IEntrollment extends Document{
    student: mongoose.Types.ObjectId,
    course : mongoose.Types.ObjectId,
    entrollAt : Date
}

const entrollmentSchema = new Schema<IEntrollment>({
    student:{
        type:Schema.Types.ObjectId,
        ref: "User"
    },
    course:{
        type : Schema.Types.ObjectId,
        ref: "Course"
    },
    entrollAt:{
        type : Date,
        default: Date.now()
    }
})

const Entrollment =  mongoose.model("Entrollment", entrollmentSchema)
export default Entrollment