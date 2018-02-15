/**
 * Sample app integrating facebook messenger with Google DialogFlow Chatbot
 * 
 * https://medium.com/crowdbotics/how-to-create-your-very-own-facebook-messenger-bot-with-dialogflow-and-node-js-in-just-one-day-f5f2f5792be5
 * 
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const messageWebhook = require('./controllers/messageWebhook');
const verification = require('./controllers/verification');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.post('/', messageWebhook);
app.get('/', verification);

app.listen(3000, () => console.log('Webhook server is listening, port 3000'));