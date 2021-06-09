"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const normalize_mongoose_1 = __importDefault(require("normalize-mongoose"));
const { Schema } = mongoose_1.default;
const IntentReplySchema = new Schema({
    name: String,
    description: String,
    replyText: String,
    createdAt: { type: Date, default: Date.now },
});
IntentReplySchema.plugin(normalize_mongoose_1.default);
mongoose_1.default.model('IntentReply', IntentReplySchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZW50UmVwbHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWxzL2ludGVudFJlcGx5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQWdDO0FBQ2hDLDRFQUEyQztBQUUzQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsa0JBQVEsQ0FBQztBQUU1QixNQUFNLGlCQUFpQixHQUFHLElBQUksTUFBTSxDQUFDO0lBQ25DLElBQUksRUFBRSxNQUFNO0lBQ1osV0FBVyxFQUFFLE1BQU07SUFDbkIsU0FBUyxFQUFFLE1BQU07SUFDakIsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtDQUM3QyxDQUFDLENBQUM7QUFFSCxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsNEJBQVMsQ0FBQyxDQUFDO0FBRXBDLGtCQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBub3JtYWxpemUgZnJvbSAnbm9ybWFsaXplLW1vbmdvb3NlJztcblxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xuXG5jb25zdCBJbnRlbnRSZXBseVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBuYW1lOiBTdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBTdHJpbmcsXG4gIHJlcGx5VGV4dDogU3RyaW5nLFxuICBjcmVhdGVkQXQ6IHsgdHlwZTogRGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3cgfSxcbn0pO1xuXG5JbnRlbnRSZXBseVNjaGVtYS5wbHVnaW4obm9ybWFsaXplKTtcblxubW9uZ29vc2UubW9kZWwoJ0ludGVudFJlcGx5JywgSW50ZW50UmVwbHlTY2hlbWEpO1xuIl19