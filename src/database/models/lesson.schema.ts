import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface ILesson extends Document {
  course: mongoose.Types.ObjectId;
  title: string;
  description: string;
  createAt: Date;
  videoUrl: string;
}

const lessonSchema = new Schema<ILesson>({
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  videoUrl: {
    type: String,
    required: true,
  },
});

const Lesson =  mongoose.model("Lesson", lessonSchema)
export default Lesson