import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const dataKeysSchema = new Schema({
  name: { type: String, required: true, unique: true, index: true },
});

// languagesSchema.set('autoIndex', false);
// languagesSchema.index({ code: 1 });

export default mongoose.model('datakeys', dataKeysSchema);