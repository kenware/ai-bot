# ai-bot
## Technologies
* Nodejs/Typescript
* Express
* Mongodb
* Mocha/chai
* Nock for mocking external endpoints
## Installation
### Docker installation
* Ensure you have docker desktop installed
* pull this project and `cd ai-bot` folder
* run
    ```
    docker-compose up
    ```
* This may take a while and it will build and startup both express dev server and mongodb server

* **RUN TEST**
* To get into express container.
  ```
  docker exec -it ai-bot_ai-bot_1 bash
  ```
* Within the express container instance run test with
  ```
  npm test
  ```

### Manual installation
* Ensure you are using node version 14
* On the root folder, install packages with
    ```
    npm install
    ```
* create `.env` file and add the following env variables. Replace with actual value. See `sample.env` for example

    ```
    MONGO_URL=<mongo url>
    MONGO_URL_TEST=<test mongo url>
    API_KEY=<external ai api key>
    INTENT_ENDPOINT=https://chat.ultimate.ai/api
    CONFIDENCE_THRESHOLD=<confidence threshold value>
    ```
* start server with `npm run watch`
* Run test with `npm test`

### API documentaion
* To interact with the bot, the api expect a botId and a message

**Request**

    
    POST  http://127.0.0.1:3000/api/v1/visitor/message

    {
        "botId": "5f74865056d7bb000fcd39ff",
        "message": "Good morning!"
    }
    

**Response**
  ```
  {
    "message": "Good morning!",
    "reply": "Hello :) How can I help you?"
  }
  ```

# Additional comments
The next feature to consider is to add an authentication(Allow visitors to enter their details before the chat). This will allow the history of the conversation to be sent to the visitors email after the chat.