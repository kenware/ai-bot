"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { env } = process;
exports.default = {
    mongoConnectionString: env.NODE_ENV === 'test' ? env.MONGO_URL_TEST : env.MONGO_URL,
    apiKey: env.API_KEY,
    intentEndpoint: env.INTENT_ENDPOINT,
    confidentThreshold: env.CONFIDENCE_THRESHOLD || 0.1,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uZmlnL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEIsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQTtBQUV2QixrQkFBZTtJQUNYLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUztJQUNsRixNQUFNLEVBQUUsR0FBRyxDQUFDLE9BQU87SUFDbkIsY0FBYyxFQUFFLEdBQUcsQ0FBQyxlQUFlO0lBQ25DLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxvQkFBb0IsSUFBSSxHQUFHO0NBQ3RELENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5cbmRvdGVudi5jb25maWcoKTtcbmNvbnN0IHsgZW52IH0gPSBwcm9jZXNzXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBtb25nb0Nvbm5lY3Rpb25TdHJpbmc6IGVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnID8gZW52Lk1PTkdPX1VSTF9URVNUOiBlbnYuTU9OR09fVVJMLFxuICAgIGFwaUtleTogZW52LkFQSV9LRVksXG4gICAgaW50ZW50RW5kcG9pbnQ6IGVudi5JTlRFTlRfRU5EUE9JTlQsXG4gICAgY29uZmlkZW50VGhyZXNob2xkOiBlbnYuQ09ORklERU5DRV9USFJFU0hPTEQgfHwgMC4xLFxufVxuIl19