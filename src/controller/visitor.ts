import { Request, Response } from 'express';
import mongoose from 'mongoose';
import axios from 'axios';
import lodash from 'lodash';
import logger from '../utils/logger';
import config from '../config'
import '../models/intentReply';
import BaseController from '../base';

const IntentReply = mongoose.model('IntentReply');

export default class Visitor extends BaseController{
  /**
   * @param {object} ctx
   * @param {req} ctx.request
   * @param {res} ctx.response
   */
  static async message(req: Request, res: Response): Promise<any> {
    const self = Visitor;
    try{
      const headers = { authorization: config.apiKey };
      const { botId, message } = req.body;
      const intents = await axios.post(`${config.intentEndpoint}/intents`,  { botId, message }, { headers });

      const maxConfidence: any = lodash.maxBy(intents.data.intents, 'confidence');

      const data: { message: string, reply:string} = { message, reply: 'AI could not give the correct answer.' };

      if (maxConfidence.confidence > config.confidentThreshold) {
        const reply: any = await IntentReply.findOne({ name: maxConfidence.name });
        data.reply = reply?.replyText || data.reply;
      }
      return self.successHandler(req, res, data, 200);
    }catch(err) {
      const errMessage = err.response?.data || err.message || "Error Occured";
      logger.info(errMessage);
      return self.errorHandler(req, res, errMessage.text ||  errMessage, 400);
    }
  }
}

