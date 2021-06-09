"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("./utils/logger"));
const routes_1 = __importDefault(require("./routes"));
require("./models");
dotenv_1.default.config();
const app = express_1.default();
app.use(cors_1.default());
app.options('*', cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(morgan_1.default(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use('/api/v1', routes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => logger_1.default.info(`App is running at port ${PORT}`));
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixnREFBd0I7QUFDeEIsb0RBQTRCO0FBQzVCLG9EQUE0QjtBQUU1Qiw0REFBb0M7QUFDcEMsc0RBQTZCO0FBQzdCLG9CQUFrQjtBQUVsQixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCLE1BQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUN0QixHQUFHLENBQUMsR0FBRyxDQUFDLGNBQUksRUFBRSxDQUFDLENBQUM7QUFDaEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsY0FBSSxFQUFFLENBQUMsQ0FBQztBQUN6QixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsVUFBVSxDQUFDO0lBQ3pCLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQyxDQUFDLENBQUM7QUFFSixHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFNLENBQUMsMkhBQTJILENBQUMsQ0FBQyxDQUFDO0FBRTdJLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGdCQUFLLENBQUMsQ0FBQTtBQUN6QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFFdEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUV0RSxrQkFBZSxHQUFHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vdXRpbHMvbG9nZ2VyJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL3JvdXRlcyc7XG5pbXBvcnQgJy4vbW9kZWxzJztcblxuZG90ZW52LmNvbmZpZygpO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5hcHAudXNlKGNvcnMoKSk7XG5hcHAub3B0aW9ucygnKicsIGNvcnMoKSk7XG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHtcbiAgZXh0ZW5kZWQ6IHRydWUsXG59KSk7XG5cbmFwcC51c2UobW9yZ2FuKCc6cmVtb3RlLWFkZHIgLSA6cmVtb3RlLXVzZXIgWzpkYXRlW2NsZl1dIFwiOm1ldGhvZCA6dXJsIEhUVFAvOmh0dHAtdmVyc2lvblwiIDpzdGF0dXMgOnJlc1tjb250ZW50LWxlbmd0aF0gOnJlc3BvbnNlLXRpbWUgbXMnKSk7XG5cbmFwcC51c2UoJy9hcGkvdjEnLCBSb3V0ZSlcbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5cbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4gbG9nZ2VyLmluZm8oYEFwcCBpcyBydW5uaW5nIGF0IHBvcnQgJHtQT1JUfWApKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIl19