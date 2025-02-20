import mongoose from "mongoose";

const Schema = mongoose.Schema

interface ICourse extends Document{
    title:string,
    description: string,
    price :number,
    duration : string
    category : mongoose.Types.ObjectId,
    lessons : mongoose.Types.ObjectId[]
    createAt : Date
    
}

const courseSchema = new Schema<ICourse>({
    title: {
        type : String,
        required: true

    },
    description: {
        type : String,
        required : true

    },
    price: {
        type : Number,
        required : true

    },
    duration: {
        type : String,

    }, 
    category:{
        type : Schema.Types.ObjectId,
        ref: "Category"
    },
    lessons:[
        {
            type: Schema.Types.ObjectId,
            ref : "Lesson"
        }
    ],

    createAt:{
        type : Date,
        default : Date.now()
    }
    
})

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema)

export default Course