import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
    required : true
  }, // String is shorthand for {type: String}
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "User"
  },
  description: String,
  status: Boolean,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "Category"
  }, 
  likes : Number,
  image : String
 
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog