import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  ID: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  companyName: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("UserData", UserSchema);

export default UserModel;
