import mongoose from "mongoose";
const coursesSchema = new mongoose.Schema({
    id: String,
    name: String,
    number: String,
    startDate: String,
    endDate: String,
    department: String,
    credits: Number,
    description: String,
    image: String,
  },
  { collection: "courses" });
export default coursesSchema;