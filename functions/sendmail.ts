const sgMail = require('@sendgrid/mail')

exports.handler = async (event: any, context: any, callback: any) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const mail_to_send = {
        from: "toby.botport@gmail.com",
        to: "toby.botport@gmail.com",
        subject: "Dit is een test",
        templateId: 'd-7519de743bd444f499d2ec997c8e3a9d',
        dynamicTemplateData: {
            subject: "Subject test",
            message: "Message test",
            mail: "Mail test",
            name: "Name test"
        }
    }

    try{
        await sgMail.send(mail_to_send).then(() => console.log("Mail has been send"))

        return {
            statusCode: 200,
            body: JSON.stringify("Message sent successfully")
        }
    } catch (e: any) {
        return{
            statusCode: e.code,
            body: JSON.stringify(e.message)
        }
    }
}

export{}