import mongoose from 'mongoose';
import '../models/intentReply';
import logger from '../utils/logger';
import { replyText } from './initial';

(async () => {
    try{
        const IntentReply = mongoose.model('IntentReply');
        const count = await IntentReply.countDocuments({})
        logger.info(`Seed Total document count is ${count}`)

        if (count === 0) {
          await IntentReply.insertMany(replyText);
        }
    }catch(err) {
    logger.info('Error seeding document')
    logger.info(err)
   }
  })();

