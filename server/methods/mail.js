var api_key = '2b883b0b35ef11176cb0cc7fa8a54524-b3780ee5-fb002e81';
var domain = 'sandbox8a7271888eb14ff7ae877ff78e76fbf8.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

var data = {
    from: 'Abby <abbyzhang21@gmail.com>',
    to: 'abbyzhang21@gmail.com',
    subject: 'trekmate',
    text: 'nice, it is working!!!!!'
};

mailgun.messages().send(data, function (error, body) {
    if (error) {
        console.log(error);
    }
    console.log(body);
});