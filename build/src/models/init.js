"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
const logger_1 = __importDefault(require("../utils/logger"));
try {
    mongoose_1.default.connect(config_1.default.mongoConnectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    logger_1.default.info('Database connected');
}
catch (error) {
    logger_1.default.info(error);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvaW5pdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUFnQztBQUNoQyx1REFBOEI7QUFDOUIsNkRBQW9DO0FBRXBDLElBQUk7SUFDQSxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBTSxDQUFDLHFCQUFxQixFQUFFO1FBQzNDLGtCQUFrQixFQUFFLElBQUk7UUFDeEIsZUFBZSxFQUFFLElBQUk7S0FDeEIsQ0FBQyxDQUFBO0lBQ0YsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtDQUNwQztBQUFBLE9BQU0sS0FBSyxFQUFFO0lBQ2IsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7Q0FDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4uL3V0aWxzL2xvZ2dlcidcblxudHJ5IHtcbiAgICBtb25nb29zZS5jb25uZWN0KGNvbmZpZy5tb25nb0Nvbm5lY3Rpb25TdHJpbmcsIHsgXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlXG4gICAgfSlcbiAgICBsb2dnZXIuaW5mbygnRGF0YWJhc2UgY29ubmVjdGVkJylcbn1jYXRjaChlcnJvcikge1xuIGxvZ2dlci5pbmZvKGVycm9yKVxufVxuIl19