import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
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
  },
  { collection: "quizzes" });
export default quizSchema;