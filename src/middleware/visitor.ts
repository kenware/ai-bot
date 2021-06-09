/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Validator from 'validatorjs';
import { Request, Response } from 'express';

import baseMiddleware from '../base';

export default class Visitor extends baseMiddleware{
  /**
   * @param {object} ctx
   * @param {req} ctx.request
   * @param {res} ctx.response
   * @param {Function} next
   */
  static async validate(req: Request, res: Response, next: any): Promise<any> {

    const rules = {
      botId: 'required|string',
      message: 'required|string'
    };
    const validation = new Validator(req.body, rules);
    if (validation.fails()) {
      return Visitor.errorHandler(req, res, validation.errors.errors, 400);
    }
    return next();
  }
}
