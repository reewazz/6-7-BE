import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
    required : true
  }, // String is shorthand for {type: String}
  author: String,
  description: String,
  status: Boolean,
  category: String,
  likes : Number,
 
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog