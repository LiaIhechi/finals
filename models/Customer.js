import mongoose from "mongoose";
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  memberNumber: {
    type: Number,
    required: true
  },
  interests: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Customer', CustomerSchema);