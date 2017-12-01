import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true, unique: true, index: true },
  languages: [{ type: Schema.Types.ObjectId, ref: 'languages' }],
  // data: {
  //   dataKey: [{ type: Schema.Types.ObjectId, ref: 'dataKeys' }],
  //   dataValue: [{ type: Schema.Types.ObjectId, ref: 'dataValues' }]
  // }
});
projectSchema.set('autoIndex', false);
projectSchema.index({ title: 1 });

export default mongoose.model('projects', projectSchema);