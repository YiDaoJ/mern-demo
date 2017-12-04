import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const dataValuesSchema = new Schema({
  value: String,
  key: { type: Schema.Types.ObjectId, ref: 'datakeys' },
  language: { type: Schema.Types.ObjectId, ref: 'languages' },
  project: { type: Schema.Types.ObjectId, ref: 'projects' }
});

// languagesSchema.set('autoIndex', false);
// languagesSchema.index({ code: 1 });

export default mongoose.model('datavalues', dataValuesSchema);