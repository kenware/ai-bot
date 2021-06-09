import mongoose from 'mongoose';
import normalize from 'normalize-mongoose';

const { Schema } = mongoose;

const IntentReplySchema = new Schema({
  name: String,
  description: String,
  replyText: String,
  createdAt: { type: Date, default: Date.now },
});

IntentReplySchema.plugin(normalize);

mongoose.model('IntentReply', IntentReplySchema);
