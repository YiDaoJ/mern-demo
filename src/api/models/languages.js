import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const languagesSchema = new Schema({
  code: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true }
});

languagesSchema.set('autoIndex', false);
languagesSchema.index({ code: 1 });

export default mongoose.model('languages', languagesSchema);