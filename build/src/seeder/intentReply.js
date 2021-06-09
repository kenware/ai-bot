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
require("../models/intentReply");
const logger_1 = __importDefault(require("../utils/logger"));
const initial_1 = require("./initial");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const IntentReply = mongoose_1.default.model('IntentReply');
        const count = yield IntentReply.countDocuments({});
        logger_1.default.info(`Seed Total document count is ${count}`);
        if (count === 0) {
            yield IntentReply.insertMany(initial_1.replyText);
        }
    }
    catch (err) {
        logger_1.default.info('Error seeding document');
        logger_1.default.info(err);
    }
}))();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZW50UmVwbHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VlZGVyL2ludGVudFJlcGx5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQWdDO0FBQ2hDLGlDQUErQjtBQUMvQiw2REFBcUM7QUFDckMsdUNBQXNDO0FBRXRDLENBQUMsR0FBUyxFQUFFO0lBQ1IsSUFBRztRQUNDLE1BQU0sV0FBVyxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sS0FBSyxHQUFHLE1BQU0sV0FBVyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNsRCxnQkFBTSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsS0FBSyxFQUFFLENBQUMsQ0FBQTtRQUVwRCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDZixNQUFNLFdBQVcsQ0FBQyxVQUFVLENBQUMsbUJBQVMsQ0FBQyxDQUFDO1NBQ3pDO0tBQ0o7SUFBQSxPQUFNLEdBQUcsRUFBRTtRQUNaLGdCQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUE7UUFDckMsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDaEI7QUFDRixDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0ICcuLi9tb2RlbHMvaW50ZW50UmVwbHknO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuaW1wb3J0IHsgcmVwbHlUZXh0IH0gZnJvbSAnLi9pbml0aWFsJztcblxuKGFzeW5jICgpID0+IHtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IEludGVudFJlcGx5ID0gbW9uZ29vc2UubW9kZWwoJ0ludGVudFJlcGx5Jyk7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgSW50ZW50UmVwbHkuY291bnREb2N1bWVudHMoe30pXG4gICAgICAgIGxvZ2dlci5pbmZvKGBTZWVkIFRvdGFsIGRvY3VtZW50IGNvdW50IGlzICR7Y291bnR9YClcblxuICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICBhd2FpdCBJbnRlbnRSZXBseS5pbnNlcnRNYW55KHJlcGx5VGV4dCk7XG4gICAgICAgIH1cbiAgICB9Y2F0Y2goZXJyKSB7XG4gICAgbG9nZ2VyLmluZm8oJ0Vycm9yIHNlZWRpbmcgZG9jdW1lbnQnKVxuICAgIGxvZ2dlci5pbmZvKGVycilcbiAgIH1cbiAgfSkoKTtcblxuIl19