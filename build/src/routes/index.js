"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const visitor_1 = __importDefault(require("./visitor"));
const router = express_1.default.Router();
router.get('/health', (req, res) => res.status(200).json('server is running'));
router.use('/visitor', visitor_1.default);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLHdEQUFvQztBQUVwQyxNQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0FBQy9FLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGlCQUFZLENBQUMsQ0FBQTtBQUVwQyxrQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB2aXNpdG9yUm91dGUgZnJvbSAnLi92aXNpdG9yJ1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KCcvaGVhbHRoJywgKHJlcSwgcmVzKSA9PiByZXMuc3RhdHVzKDIwMCkuanNvbignc2VydmVyIGlzIHJ1bm5pbmcnKSk7XG5yb3V0ZXIudXNlKCcvdmlzaXRvcicsIHZpc2l0b3JSb3V0ZSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19