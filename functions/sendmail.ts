const sgMail = require('@sendgrid/mail')

exports.handler = async (event: any, context: any, callback: any) => {
    console.log("second test of trying to send mail")
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const mail_to_send = {
        from: 'toby.botport@gmail.com',
        to: 'toby.botport@gmail.com',
        subject: 'Rapport over de beweegvriendelijkheid van jouw stad of gemeente',
        templateId: 'd-7519de743bd444f499d2ec997c8e3a9d',
        dynamicTemplateData: {
            message: 'Message testing',
            subject: 'Subject testing',
            name: 'Name testing',
            mail: 'Mail testing'
        }
    }

    try{
        await sgMail.send(mail_to_send).then(() => console.log("Email sent!!!"))

        return{
            statusCode: 200,
            body: JSON.stringify("Message sent successfully")
        }
    } catch(e: any){
        return{
            statusCode: e.code,
            body: JSON.stringify(e.message)
        }
    }
}

export{}