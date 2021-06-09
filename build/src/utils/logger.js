"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const { format } = winston_1.default;
const logFormat = format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`);
const logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), format.json(), format.splat()),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston_1.default.transports.Console({
            format: format.combine(format.colorize(), logFormat),
        })
    ],
});
exports.default = logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUU5QixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsaUJBQU8sQ0FBQztBQUUzQixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUU5RixNQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLFlBQVksQ0FBQztJQUNsQyxLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzVCLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxFQUNuRCxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQ2IsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUNmO0lBQ0QsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRTtJQUN4QyxVQUFVLEVBQUU7UUFDVixJQUFJLGlCQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUM3QixNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FDcEIsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUNqQixTQUFTLENBQ1Y7U0FDRixDQUFDO0tBQ0g7Q0FDRixDQUFDLENBQUM7QUFFSCxrQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2luc3RvbiBmcm9tICd3aW5zdG9uJztcblxuY29uc3QgeyBmb3JtYXQgfSA9IHdpbnN0b247XG5cbmNvbnN0IGxvZ0Zvcm1hdCA9IGZvcm1hdC5wcmludGYoKGluZm8pID0+IGAke2luZm8udGltZXN0YW1wfSAke2luZm8ubGV2ZWx9OiAke2luZm8ubWVzc2FnZX1gKTtcblxuY29uc3QgbG9nZ2VyID0gd2luc3Rvbi5jcmVhdGVMb2dnZXIoe1xuICBsZXZlbDogJ2luZm8nLFxuICBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0LmNvbWJpbmUoXG4gICAgZm9ybWF0LnRpbWVzdGFtcCh7IGZvcm1hdDogJ1lZWVktTU0tREQgSEg6bW06c3MnIH0pLFxuICAgIGZvcm1hdC5qc29uKCksXG4gICAgZm9ybWF0LnNwbGF0KCksXG4gICksXG4gIGRlZmF1bHRNZXRhOiB7IHNlcnZpY2U6ICd1c2VyLXNlcnZpY2UnIH0sXG4gIHRyYW5zcG9ydHM6IFtcbiAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUoe1xuICAgICAgZm9ybWF0OiBmb3JtYXQuY29tYmluZShcbiAgICAgICAgZm9ybWF0LmNvbG9yaXplKCksXG4gICAgICAgIGxvZ0Zvcm1hdCxcbiAgICAgICksXG4gICAgfSlcbiAgXSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7XG4iXX0=