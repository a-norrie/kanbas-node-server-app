import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  id: String,
  type: String,
  title: String,
  description: String,
  points: Number,
  choices: [String],
  answers: [String]
});

const quizSchema = new mongoose.Schema({
    name:String,
    course:String,
    instructions:String,
    type:String,
    points:Number,
    group:String,
    shuffle: Boolean,
    timeLimit:Number,
    multipleAttempts:Boolean,
    showCorrect:Boolean,
    accessCode:String,
    oneAtATime:Boolean,
    webcam:Boolean,
    lock:Boolean,
    dueDate:String,
    availableDate:String,
    untilDate:String,
    published:Boolean,
    questions:[questionSchema]
  },
  { collection: "quizzes" });
export default quizSchema;