export const validData = {
    botId: '12yf34hfk5636',
    message: 'Thanks, bye!'
}

export const intentData = {
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
}

export const intentDataWithLowThreshold = {
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
}

export const unrecognisedIntentName = {
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
}