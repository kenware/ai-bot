"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const validatorjs_1 = __importDefault(require("validatorjs"));
const base_1 = __importDefault(require("../base"));
class Visitor extends base_1.default {
    /**
     * @param {object} ctx
     * @param {req} ctx.request
     * @param {res} ctx.response
     * @param {Function} next
     */
    static validate(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const rules = {
                botId: 'required|string',
                message: 'required|string'
            };
            const validation = new validatorjs_1.default(req.body, rules);
            if (validation.fails()) {
                return Visitor.errorHandler(req, res, validation.errors.errors, 400);
            }
            return next();
        });
    }
}
exports.default = Visitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taWRkbGV3YXJlL3Zpc2l0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBc0U7QUFDdEUsOERBQW9DO0FBR3BDLG1EQUFxQztBQUVyQyxNQUFxQixPQUFRLFNBQVEsY0FBYztJQUNqRDs7Ozs7T0FLRztJQUNILE1BQU0sQ0FBTyxRQUFRLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFTOztZQUUxRCxNQUFNLEtBQUssR0FBRztnQkFDWixLQUFLLEVBQUUsaUJBQWlCO2dCQUN4QixPQUFPLEVBQUUsaUJBQWlCO2FBQzNCLENBQUM7WUFDRixNQUFNLFVBQVUsR0FBRyxJQUFJLHFCQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNsRCxJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDdEIsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDdEU7WUFDRCxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtDQUNGO0FBbkJELDBCQW1CQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXMgKi9cbmltcG9ydCBWYWxpZGF0b3IgZnJvbSAndmFsaWRhdG9yanMnO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcblxuaW1wb3J0IGJhc2VNaWRkbGV3YXJlIGZyb20gJy4uL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaXNpdG9yIGV4dGVuZHMgYmFzZU1pZGRsZXdhcmV7XG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY3R4XG4gICAqIEBwYXJhbSB7cmVxfSBjdHgucmVxdWVzdFxuICAgKiBAcGFyYW0ge3Jlc30gY3R4LnJlc3BvbnNlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRcbiAgICovXG4gIHN0YXRpYyBhc3luYyB2YWxpZGF0ZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IGFueSk6IFByb21pc2U8YW55PiB7XG5cbiAgICBjb25zdCBydWxlcyA9IHtcbiAgICAgIGJvdElkOiAncmVxdWlyZWR8c3RyaW5nJyxcbiAgICAgIG1lc3NhZ2U6ICdyZXF1aXJlZHxzdHJpbmcnXG4gICAgfTtcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gbmV3IFZhbGlkYXRvcihyZXEuYm9keSwgcnVsZXMpO1xuICAgIGlmICh2YWxpZGF0aW9uLmZhaWxzKCkpIHtcbiAgICAgIHJldHVybiBWaXNpdG9yLmVycm9ySGFuZGxlcihyZXEsIHJlcywgdmFsaWRhdGlvbi5lcnJvcnMuZXJyb3JzLCA0MDApO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9XG59XG4iXX0=