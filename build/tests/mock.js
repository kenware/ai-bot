"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unrecognisedIntentName = exports.intentDataWithLowThreshold = exports.intentData = exports.validData = void 0;
exports.validData = {
    botId: '12yf34hfk5636',
    message: 'Thanks, bye!'
};
exports.intentData = {
    intents: [
        {
            confidence: 0.8,
            name: "Goodbye"
        },
        {
            confidence: 0.02327081561088562,
            name: "Arranging collection for order"
        },
        {
            confidence: 0.01928514614701271,
            name: "I want to speak with a human"
        }
    ]
};
exports.intentDataWithLowThreshold = {
    intents: [
        {
            confidence: 0.0001,
            name: "Goodbye"
        },
        {
            confidence: 0.0001,
            name: "Arranging collection for order"
        },
        {
            confidence: 0.00004,
            name: "I want to speak with a human"
        }
    ]
};
exports.unrecognisedIntentName = {
    intents: [
        {
            confidence: 0.9,
            name: "unrecognised" // unrecignised intent name with high confidence level
        },
        {
            confidence: 0.0001,
            name: "Arranging collection for order"
        },
        {
            confidence: 0.00004,
            name: "I want to speak with a human"
        }
    ]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL21vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxTQUFTLEdBQUc7SUFDckIsS0FBSyxFQUFFLGVBQWU7SUFDdEIsT0FBTyxFQUFFLGNBQWM7Q0FDMUIsQ0FBQTtBQUVZLFFBQUEsVUFBVSxHQUFHO0lBQ3RCLE9BQU8sRUFBRTtRQUNMO1lBQ0ksVUFBVSxFQUFFLEdBQUc7WUFDZixJQUFJLEVBQUUsU0FBUztTQUNsQjtRQUNEO1lBQ0ksVUFBVSxFQUFFLG1CQUFtQjtZQUMvQixJQUFJLEVBQUUsZ0NBQWdDO1NBQ3pDO1FBQ0Q7WUFDSSxVQUFVLEVBQUUsbUJBQW1CO1lBQy9CLElBQUksRUFBRSw4QkFBOEI7U0FDdkM7S0FDSjtDQUNKLENBQUE7QUFFWSxRQUFBLDBCQUEwQixHQUFHO0lBQ3RDLE9BQU8sRUFBRTtRQUNMO1lBQ0ksVUFBVSxFQUFFLE1BQU07WUFDbEIsSUFBSSxFQUFFLFNBQVM7U0FDbEI7UUFDRDtZQUNJLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLElBQUksRUFBRSxnQ0FBZ0M7U0FDekM7UUFDRDtZQUNJLFVBQVUsRUFBRSxPQUFPO1lBQ25CLElBQUksRUFBRSw4QkFBOEI7U0FDdkM7S0FDSjtDQUNKLENBQUE7QUFFWSxRQUFBLHNCQUFzQixHQUFHO0lBQ2xDLE9BQU8sRUFBRTtRQUNMO1lBQ0ksVUFBVSxFQUFFLEdBQUc7WUFDZixJQUFJLEVBQUUsY0FBYyxDQUFDLHNEQUFzRDtTQUM5RTtRQUNEO1lBQ0ksVUFBVSxFQUFFLE1BQU07WUFDbEIsSUFBSSxFQUFFLGdDQUFnQztTQUN6QztRQUNEO1lBQ0ksVUFBVSxFQUFFLE9BQU87WUFDbkIsSUFBSSxFQUFFLDhCQUE4QjtTQUN2QztLQUNKO0NBQ0osQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB2YWxpZERhdGEgPSB7XG4gICAgYm90SWQ6ICcxMnlmMzRoZms1NjM2JyxcbiAgICBtZXNzYWdlOiAnVGhhbmtzLCBieWUhJ1xufVxuXG5leHBvcnQgY29uc3QgaW50ZW50RGF0YSA9IHtcbiAgICBpbnRlbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbmZpZGVuY2U6IDAuOCxcbiAgICAgICAgICAgIG5hbWU6IFwiR29vZGJ5ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbmZpZGVuY2U6IDAuMDIzMjcwODE1NjEwODg1NjIsXG4gICAgICAgICAgICBuYW1lOiBcIkFycmFuZ2luZyBjb2xsZWN0aW9uIGZvciBvcmRlclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbmZpZGVuY2U6IDAuMDE5Mjg1MTQ2MTQ3MDEyNzEsXG4gICAgICAgICAgICBuYW1lOiBcIkkgd2FudCB0byBzcGVhayB3aXRoIGEgaHVtYW5cIlxuICAgICAgICB9XG4gICAgXVxufVxuXG5leHBvcnQgY29uc3QgaW50ZW50RGF0YVdpdGhMb3dUaHJlc2hvbGQgPSB7XG4gICAgaW50ZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25maWRlbmNlOiAwLjAwMDEsXG4gICAgICAgICAgICBuYW1lOiBcIkdvb2RieWVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjb25maWRlbmNlOiAwLjAwMDEsXG4gICAgICAgICAgICBuYW1lOiBcIkFycmFuZ2luZyBjb2xsZWN0aW9uIGZvciBvcmRlclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbmZpZGVuY2U6IDAuMDAwMDQsXG4gICAgICAgICAgICBuYW1lOiBcIkkgd2FudCB0byBzcGVhayB3aXRoIGEgaHVtYW5cIlxuICAgICAgICB9XG4gICAgXVxufVxuXG5leHBvcnQgY29uc3QgdW5yZWNvZ25pc2VkSW50ZW50TmFtZSA9IHtcbiAgICBpbnRlbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbmZpZGVuY2U6IDAuOSxcbiAgICAgICAgICAgIG5hbWU6IFwidW5yZWNvZ25pc2VkXCIgLy8gdW5yZWNpZ25pc2VkIGludGVudCBuYW1lIHdpdGggaGlnaCBjb25maWRlbmNlIGxldmVsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbmZpZGVuY2U6IDAuMDAwMSxcbiAgICAgICAgICAgIG5hbWU6IFwiQXJyYW5naW5nIGNvbGxlY3Rpb24gZm9yIG9yZGVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY29uZmlkZW5jZTogMC4wMDAwNCxcbiAgICAgICAgICAgIG5hbWU6IFwiSSB3YW50IHRvIHNwZWFrIHdpdGggYSBodW1hblwiXG4gICAgICAgIH1cbiAgICBdXG59Il19