"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseController {
    /**
     * @param {object} ctx
     * @param {req} ctx.request
     * @param {res} ctx.response
     * @param {mesage} string error
     * @param {status} HttpCode status
     */
    static errorHandler(req, res, message, status) {
        return res.status(status || 400).json({
            message,
            status,
        });
    }
    /**
     * @param {object} ctx
     * @param {req} ctx.request
     * @param {res} ctx.response
     * @param {data} ctx.data response data
     * @param {status} HttpCode status
     */
    static successHandler(req, res, data, status) {
        return res.status(status || 200).json(data);
    }
}
exports.default = BaseController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYmFzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQThCLGNBQWM7SUFDMUM7Ozs7OztPQU1HO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLE9BQWUsRUFBRSxNQUFjO1FBQzlFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3BDLE9BQU87WUFDUCxNQUFNO1NBQ1AsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFTLEVBQUUsTUFBYztRQUMxRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0Y7QUF6QkQsaUNBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlcyAqL1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VDb250cm9sbGVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjdHhcbiAgICogQHBhcmFtIHtyZXF9IGN0eC5yZXF1ZXN0XG4gICAqIEBwYXJhbSB7cmVzfSBjdHgucmVzcG9uc2VcbiAgICogQHBhcmFtIHttZXNhZ2V9IHN0cmluZyBlcnJvclxuICAgKiBAcGFyYW0ge3N0YXR1c30gSHR0cENvZGUgc3RhdHVzXG4gICAqL1xuICBzdGF0aWMgZXJyb3JIYW5kbGVyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbWVzc2FnZTogc3RyaW5nLCBzdGF0dXM6IG51bWJlcik6IGFueSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoc3RhdHVzIHx8IDQwMCkuanNvbih7XG4gICAgICBtZXNzYWdlLFxuICAgICAgc3RhdHVzLFxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtvYmplY3R9IGN0eFxuICAgKiBAcGFyYW0ge3JlcX0gY3R4LnJlcXVlc3RcbiAgICogQHBhcmFtIHtyZXN9IGN0eC5yZXNwb25zZVxuICAgKiBAcGFyYW0ge2RhdGF9IGN0eC5kYXRhIHJlc3BvbnNlIGRhdGFcbiAgICogQHBhcmFtIHtzdGF0dXN9IEh0dHBDb2RlIHN0YXR1c1xuICAgKi9cbiAgc3RhdGljIHN1Y2Nlc3NIYW5kbGVyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgZGF0YTogYW55LCBzdGF0dXM6IG51bWJlcik6IGFueSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoc3RhdHVzIHx8IDIwMCkuanNvbihkYXRhKTtcbiAgfVxufVxuIl19