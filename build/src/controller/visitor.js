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
const mongoose_1 = __importDefault(require("mongoose"));
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash"));
const logger_1 = __importDefault(require("../utils/logger"));
const config_1 = __importDefault(require("../config"));
require("../models/intentReply");
const base_1 = __importDefault(require("../base"));
const IntentReply = mongoose_1.default.model('IntentReply');
class Visitor extends base_1.default {
    /**
     * @param {object} ctx
     * @param {req} ctx.request
     * @param {res} ctx.response
     */
    static message(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const self = Visitor;
            try {
                const headers = { authorization: config_1.default.apiKey };
                const { botId, message } = req.body;
                const intents = yield axios_1.default.post(`${config_1.default.intentEndpoint}/intents`, { botId, message }, { headers });
                const maxConfidence = lodash_1.default.maxBy(intents.data.intents, 'confidence');
                const data = { message, reply: 'AI could not give the correct answer.' };
                if (maxConfidence.confidence > config_1.default.confidentThreshold) {
                    const reply = yield IntentReply.findOne({ name: maxConfidence.name });
                    data.reply = (reply === null || reply === void 0 ? void 0 : reply.replyText) || data.reply;
                }
                return self.successHandler(req, res, data, 200);
            }
            catch (err) {
                const errMessage = ((_a = err.response) === null || _a === void 0 ? void 0 : _a.data) || err.message || "Error Occured";
                logger_1.default.info(errMessage);
                return self.errorHandler(req, res, errMessage.text || errMessage, 400);
            }
        });
    }
}
exports.default = Visitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL3Zpc2l0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSx3REFBZ0M7QUFDaEMsa0RBQTBCO0FBQzFCLG9EQUE0QjtBQUM1Qiw2REFBcUM7QUFDckMsdURBQThCO0FBQzlCLGlDQUErQjtBQUMvQixtREFBcUM7QUFFckMsTUFBTSxXQUFXLEdBQUcsa0JBQVEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFbEQsTUFBcUIsT0FBUSxTQUFRLGNBQWM7SUFDakQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBTyxPQUFPLENBQUMsR0FBWSxFQUFFLEdBQWE7OztZQUM5QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUM7WUFDckIsSUFBRztnQkFDRCxNQUFNLE9BQU8sR0FBRyxFQUFFLGFBQWEsRUFBRSxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNqRCxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BDLE1BQU0sT0FBTyxHQUFHLE1BQU0sZUFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLGdCQUFNLENBQUMsY0FBYyxVQUFVLEVBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUV2RyxNQUFNLGFBQWEsR0FBUSxnQkFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFFNUUsTUFBTSxJQUFJLEdBQXFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSx1Q0FBdUMsRUFBRSxDQUFDO2dCQUUzRyxJQUFJLGFBQWEsQ0FBQyxVQUFVLEdBQUcsZ0JBQU0sQ0FBQyxrQkFBa0IsRUFBRTtvQkFDeEQsTUFBTSxLQUFLLEdBQVEsTUFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUMzRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUEsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFNBQVMsS0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUM3QztnQkFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDakQ7WUFBQSxPQUFNLEdBQUcsRUFBRTtnQkFDVixNQUFNLFVBQVUsR0FBRyxDQUFBLE1BQUEsR0FBRyxDQUFDLFFBQVEsMENBQUUsSUFBSSxLQUFJLEdBQUcsQ0FBQyxPQUFPLElBQUksZUFBZSxDQUFDO2dCQUN4RSxnQkFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDeEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLElBQUksSUFBSyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDekU7O0tBQ0Y7Q0FDRjtBQTVCRCwwQkE0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCAnLi4vbW9kZWxzL2ludGVudFJlcGx5JztcbmltcG9ydCBCYXNlQ29udHJvbGxlciBmcm9tICcuLi9iYXNlJztcblxuY29uc3QgSW50ZW50UmVwbHkgPSBtb25nb29zZS5tb2RlbCgnSW50ZW50UmVwbHknKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlzaXRvciBleHRlbmRzIEJhc2VDb250cm9sbGVye1xuICAvKipcbiAgICogQHBhcmFtIHtvYmplY3R9IGN0eFxuICAgKiBAcGFyYW0ge3JlcX0gY3R4LnJlcXVlc3RcbiAgICogQHBhcmFtIHtyZXN9IGN0eC5yZXNwb25zZVxuICAgKi9cbiAgc3RhdGljIGFzeW5jIG1lc3NhZ2UocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBzZWxmID0gVmlzaXRvcjtcbiAgICB0cnl7XG4gICAgICBjb25zdCBoZWFkZXJzID0geyBhdXRob3JpemF0aW9uOiBjb25maWcuYXBpS2V5IH07XG4gICAgICBjb25zdCB7IGJvdElkLCBtZXNzYWdlIH0gPSByZXEuYm9keTtcbiAgICAgIGNvbnN0IGludGVudHMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2NvbmZpZy5pbnRlbnRFbmRwb2ludH0vaW50ZW50c2AsICB7IGJvdElkLCBtZXNzYWdlIH0sIHsgaGVhZGVycyB9KTtcblxuICAgICAgY29uc3QgbWF4Q29uZmlkZW5jZTogYW55ID0gbG9kYXNoLm1heEJ5KGludGVudHMuZGF0YS5pbnRlbnRzLCAnY29uZmlkZW5jZScpO1xuXG4gICAgICBjb25zdCBkYXRhOiB7IG1lc3NhZ2U6IHN0cmluZywgcmVwbHk6c3RyaW5nfSA9IHsgbWVzc2FnZSwgcmVwbHk6ICdBSSBjb3VsZCBub3QgZ2l2ZSB0aGUgY29ycmVjdCBhbnN3ZXIuJyB9O1xuXG4gICAgICBpZiAobWF4Q29uZmlkZW5jZS5jb25maWRlbmNlID4gY29uZmlnLmNvbmZpZGVudFRocmVzaG9sZCkge1xuICAgICAgICBjb25zdCByZXBseTogYW55ID0gYXdhaXQgSW50ZW50UmVwbHkuZmluZE9uZSh7IG5hbWU6IG1heENvbmZpZGVuY2UubmFtZSB9KTtcbiAgICAgICAgZGF0YS5yZXBseSA9IHJlcGx5Py5yZXBseVRleHQgfHwgZGF0YS5yZXBseTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZWxmLnN1Y2Nlc3NIYW5kbGVyKHJlcSwgcmVzLCBkYXRhLCAyMDApO1xuICAgIH1jYXRjaChlcnIpIHtcbiAgICAgIGNvbnN0IGVyck1lc3NhZ2UgPSBlcnIucmVzcG9uc2U/LmRhdGEgfHwgZXJyLm1lc3NhZ2UgfHwgXCJFcnJvciBPY2N1cmVkXCI7XG4gICAgICBsb2dnZXIuaW5mbyhlcnJNZXNzYWdlKTtcbiAgICAgIHJldHVybiBzZWxmLmVycm9ySGFuZGxlcihyZXEsIHJlcywgZXJyTWVzc2FnZS50ZXh0IHx8ICBlcnJNZXNzYWdlLCA0MDApO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=