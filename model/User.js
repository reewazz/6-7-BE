import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: {
    type: String,
    required : true
  }, // String is shorthand for {type: String}

  email: {
    type:String,
    unique :true
  },
  password: String,
  image : String,

 
 
});

const User = mongoose.model('User', userSchema);

export default User