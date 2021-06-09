"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replyText = void 0;
exports.replyText = [
    {
        "name": "Greeting",
        "description": "The visitor says hello.",
        "replyText": "Hello :) How can I help you?"
    },
    {
        "name": "Goodbye",
        "description": "The visitor says goodbye.",
        "replyText": "Goodbye, have a nice day!"
    },
    {
        "name": "Affirmative",
        "description": "The visitor confirms that something is true / correct.",
        "replyText": "Great!"
    },
    {
        "name": "Negative",
        "description": "The visitor confirms that they don't need help / something is not true or similar.",
        "replyText": "Alright, please let me know if I can help you with anything else!"
    },
    {
        "name": "Thank you",
        "description": "The visitor says thank you.",
        "replyText": "It was a pleasure to be of help :)"
    },
    {
        "name": "Are you a bot?",
        "description": "The visitor wants to know if they are talking to a bot or a human.",
        "replyText": "I'm an AI bot, and I'm here to help you with your questions."
    },
    {
        "name": "I want to speak with a human",
        "description": "The visitor wants to speak to a human agent.",
        "replyText": "Let me transfer you to the first available agent."
    },
    {
        "name": "Login Problems",
        "description": "The visitor has trouble logging in.",
        "replyText": "Oh no! Please give me your email and I will fix it."
    },
    {
        "name": "Open or close account",
        "description": "The visitor wants to create a new account or close an existing one.",
        "replyText": "Please follow these instructions \"LINK\" to open a new account."
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWVkZXIvaW5pdGlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLFNBQVMsR0FBRztJQUNyQjtRQUNFLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLGFBQWEsRUFBRSx5QkFBeUI7UUFDeEMsV0FBVyxFQUFFLDhCQUE4QjtLQUM1QztJQUNEO1FBQ0UsTUFBTSxFQUFFLFNBQVM7UUFDakIsYUFBYSxFQUFFLDJCQUEyQjtRQUMxQyxXQUFXLEVBQUUsMkJBQTJCO0tBQ3pDO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsYUFBYTtRQUNyQixhQUFhLEVBQUUsd0RBQXdEO1FBQ3ZFLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsVUFBVTtRQUNsQixhQUFhLEVBQUUsb0ZBQW9GO1FBQ25HLFdBQVcsRUFBRSxtRUFBbUU7S0FDakY7SUFDRDtRQUNFLE1BQU0sRUFBRSxXQUFXO1FBQ25CLGFBQWEsRUFBRSw2QkFBNkI7UUFDNUMsV0FBVyxFQUFFLG9DQUFvQztLQUNsRDtJQUNEO1FBQ0UsTUFBTSxFQUFFLGdCQUFnQjtRQUN4QixhQUFhLEVBQUUsb0VBQW9FO1FBQ25GLFdBQVcsRUFBRSw4REFBOEQ7S0FDNUU7SUFDRDtRQUNFLE1BQU0sRUFBRSw4QkFBOEI7UUFDdEMsYUFBYSxFQUFFLDhDQUE4QztRQUM3RCxXQUFXLEVBQUUsbURBQW1EO0tBQ2pFO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLGFBQWEsRUFBRSxxQ0FBcUM7UUFDcEQsV0FBVyxFQUFFLHFEQUFxRDtLQUNuRTtJQUNEO1FBQ0UsTUFBTSxFQUFFLHVCQUF1QjtRQUMvQixhQUFhLEVBQUUscUVBQXFFO1FBQ3BGLFdBQVcsRUFBRSxrRUFBa0U7S0FDaEY7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJlcGx5VGV4dCA9IFtcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJHcmVldGluZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSB2aXNpdG9yIHNheXMgaGVsbG8uXCIsXG4gICAgICBcInJlcGx5VGV4dFwiOiBcIkhlbGxvIDopIEhvdyBjYW4gSSBoZWxwIHlvdT9cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiR29vZGJ5ZVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSB2aXNpdG9yIHNheXMgZ29vZGJ5ZS5cIixcbiAgICAgIFwicmVwbHlUZXh0XCI6IFwiR29vZGJ5ZSwgaGF2ZSBhIG5pY2UgZGF5IVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJBZmZpcm1hdGl2ZVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSB2aXNpdG9yIGNvbmZpcm1zIHRoYXQgc29tZXRoaW5nIGlzIHRydWUgLyBjb3JyZWN0LlwiLFxuICAgICAgXCJyZXBseVRleHRcIjogXCJHcmVhdCFcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiTmVnYXRpdmVcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgdmlzaXRvciBjb25maXJtcyB0aGF0IHRoZXkgZG9uJ3QgbmVlZCBoZWxwIC8gc29tZXRoaW5nIGlzIG5vdCB0cnVlIG9yIHNpbWlsYXIuXCIsXG4gICAgICBcInJlcGx5VGV4dFwiOiBcIkFscmlnaHQsIHBsZWFzZSBsZXQgbWUga25vdyBpZiBJIGNhbiBoZWxwIHlvdSB3aXRoIGFueXRoaW5nIGVsc2UhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlRoYW5rIHlvdVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSB2aXNpdG9yIHNheXMgdGhhbmsgeW91LlwiLFxuICAgICAgXCJyZXBseVRleHRcIjogXCJJdCB3YXMgYSBwbGVhc3VyZSB0byBiZSBvZiBoZWxwIDopXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIkFyZSB5b3UgYSBib3Q/XCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIHZpc2l0b3Igd2FudHMgdG8ga25vdyBpZiB0aGV5IGFyZSB0YWxraW5nIHRvIGEgYm90IG9yIGEgaHVtYW4uXCIsXG4gICAgICBcInJlcGx5VGV4dFwiOiBcIkknbSBhbiBBSSBib3QsIGFuZCBJJ20gaGVyZSB0byBoZWxwIHlvdSB3aXRoIHlvdXIgcXVlc3Rpb25zLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJJIHdhbnQgdG8gc3BlYWsgd2l0aCBhIGh1bWFuXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIHZpc2l0b3Igd2FudHMgdG8gc3BlYWsgdG8gYSBodW1hbiBhZ2VudC5cIixcbiAgICAgIFwicmVwbHlUZXh0XCI6IFwiTGV0IG1lIHRyYW5zZmVyIHlvdSB0byB0aGUgZmlyc3QgYXZhaWxhYmxlIGFnZW50LlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJMb2dpbiBQcm9ibGVtc1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSB2aXNpdG9yIGhhcyB0cm91YmxlIGxvZ2dpbmcgaW4uXCIsXG4gICAgICBcInJlcGx5VGV4dFwiOiBcIk9oIG5vISBQbGVhc2UgZ2l2ZSBtZSB5b3VyIGVtYWlsIGFuZCBJIHdpbGwgZml4IGl0LlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJPcGVuIG9yIGNsb3NlIGFjY291bnRcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgdmlzaXRvciB3YW50cyB0byBjcmVhdGUgYSBuZXcgYWNjb3VudCBvciBjbG9zZSBhbiBleGlzdGluZyBvbmUuXCIsXG4gICAgICBcInJlcGx5VGV4dFwiOiBcIlBsZWFzZSBmb2xsb3cgdGhlc2UgaW5zdHJ1Y3Rpb25zIFxcXCJMSU5LXFxcIiB0byBvcGVuIGEgbmV3IGFjY291bnQuXCJcbiAgICB9XG4gIF1cbiJdfQ==