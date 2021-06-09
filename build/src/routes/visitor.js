"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const visitor_1 = __importDefault(require("../controller/visitor"));
const visitor_2 = __importDefault(require("../middleware/visitor"));
const router = express_1.default.Router();
router.post('/message', visitor_2.default.validate, visitor_1.default.message);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdmlzaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixvRUFBc0Q7QUFDdEQsb0VBQXNEO0FBRXRELE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQ3RCLGlCQUFpQixDQUFDLFFBQVEsRUFDMUIsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUE7QUFFMUIsa0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgVmlzaXRvckNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci92aXNpdG9yJztcbmltcG9ydCBWaXNpdG9yTWlkZGxld2FyZSBmcm9tICcuLi9taWRkbGV3YXJlL3Zpc2l0b3InO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIucG9zdCgnL21lc3NhZ2UnLFxuVmlzaXRvck1pZGRsZXdhcmUudmFsaWRhdGUsXG5WaXNpdG9yQ29udHJvbGxlci5tZXNzYWdlKVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=