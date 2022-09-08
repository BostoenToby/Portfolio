const client = require('@sendgrid/mail');

const {
    SENDGRID_API_KEY,
    SENDGRID_TO_EMAIL,
    SENDGRID_FROM_EMAIL,
} = process.env

exports.handler = async function (event, context, callback) {
    const { message, subject, senderEmail, senderName } = JSON.parse(event.body);
    client.setApiKey(SENDGRID_API_KEY);

    const data = {
        to: SENDGRID_TO_EMAIL,
        from: SENDGRID_FROM_EMAIL,
        subject: `Contactform portfolio ${senderName} (${senderEmail})`,
        templateId: 'd-7519de743bd444f499d2ec997c8e3a9d',
        dynamicTemplateData: {
            mail: senderEmail,
            name: senderName,
            subject: subject,
            message: message
        }
    };

    try {
        await client.send(data);
        return{
            statusCode: 200,
            body: 'Message sent',
        };
    } catch (err) {
        return{
            statusCode: err.code,
            body: JSON.stringify({ msg: err.message })
        };
    }
};