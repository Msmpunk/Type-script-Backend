
import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

export const User = new Schema({
  username: {
    type: String,
    required: 'Enter your username'
  },
  firstName: {
    type: String,
    required: 'Enter a first name'
  },
  lastName: {
    type: String,
    required: 'Enter a last name'
  },
  email: {
    type: String,
    required: 'Enter a email'
  },
  password: {
    type: String,
    required: 'Enter a password'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})
