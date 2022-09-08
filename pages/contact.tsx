import { useState } from "react";
import Header from "../components/header";
import FormError from "../interfaces/formError";
import MailInfo from "../interfaces/mailInfo";
import axios from "../node_modules/axios";

export default function Contact () {
    const [dark, setDark] = useState<boolean>()
    const [info, setInfo] = useState<MailInfo>({
        name: "",
        message: "",
        subject: "",
        mail: "",
    })

    const [errors, setErrors] = useState<FormError>({
        nameError: "",
        subjectError: "",
        mailError: "",
        messageError: "",
    })

    async function sendgridMail(mail: MailInfo) {
        try {
        console.log("trying to send mail")
          return await axios.post('/.netlify/functions/sendmail/sendmail',{
            message: mail.message,
            subject: mail.subject,
            senderEmail: mail.mail,
            senderName: mail.name
          })
        } catch (error) {
          console.log(error)
          console.log("it didn't work")
        }
    }
    
    const checkInfo = async () => {
        let errorsName = true
        let errorsSubject = true
        let errorsMail = true
        let errorsMessage = true

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(info.mail)) {
            setErrors((currentErrors: FormError) => {
              currentErrors.mailError = 'Dit is geen geldige email'
              return { ...currentErrors }
            })
          } else {
            errorsMail = false
            setErrors((currentErrors: FormError) => {
              currentErrors.mailError = ''
              return { ...currentErrors }
            })
          }

          if (info.name.length < 2) {
            setErrors((currentErrors: FormError) => {
              currentErrors.nameError = 'Name must be at least 2 char'
              return { ...currentErrors }
            })
          } else {
            errorsName = false
            setErrors((currentErrors: FormError) => {
              currentErrors.nameError = ''
              return { ...currentErrors }
            })
          }
          
          if (info.subject.length < 5) {
            setErrors((currentErrors: FormError) => {
              currentErrors.subjectError = 'Subject must be at least 5 char'
              return { ...currentErrors }
            })
          } else {
            errorsSubject = false
            setErrors((currentErrors: FormError) => {
              currentErrors.subjectError = ''
              return { ...currentErrors }
            })
          }

          if (info.message.length < 10) {
            setErrors((currentErrors: FormError) => {
              currentErrors.messageError = 'Message must be at least 10 char'
              return { ...currentErrors }
            })
          } else {
            errorsMessage = false
            setErrors((currentErrors: FormError) => {
              currentErrors.messageError = ''
              return { ...currentErrors }
            })
          }

          if (!errorsName && !errorsMail && !errorsSubject && !errorsMessage) {
            sendgridMail(info)
          }
    }

    return(
        <div className={`h-screen ${dark? 'bg-black': 'bg-white'}`}>
            <Header setDark={setDark} dark={dark}/>
            <main className="font-montserrat flex items-center justify-center space-x-20 mt-4 md:mt-16 h-[70vh] mx-8 flex-col lg:flex-row">
                <section className="mb-8 mt-32 md:mt-0 lg:-mb-0">
                    <h1 className={`${dark? 'text-lightblue' : 'text-green'} text-3xl md:text-5xl mb-4`}>Don't hessitate, go ahead<br />and contact me</h1>
                    <p className={`text-base ${dark? 'text-white' : 'text-black'}`}>Send me directly <span className="font-bold text-green cursor-pointer"><a href="mailto:toby.botport@gmail.com">here</a></span> or use the form on the right</p>
                </section>
                <section className="flex flex-col space-y-4 !-ml-0 lg:!ml-4 md:w-1/2">
                    <div className="flex space-x-4">
                        <input type="text" placeholder="Full name" onInput={(e: React.FormEvent<HTMLInputElement>) =>
                            setInfo((u: MailInfo) => {
                                //@ts-ignore
                                u.name = e.target.value
                                return { ...u }
                            })
                        } className={`p-2 md:p-4 w-5/6 md:w-full rounded ${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} `} />
                        <input type="text" placeholder="Subject" onInput={(e: React.FormEvent<HTMLInputElement>) =>
                            setInfo((u: MailInfo) => {
                                //@ts-ignore
                                u.subject = e.target.value
                                return { ...u }
                            })
                        } className={`p-2 md:p-4 w-5/6 md:w-full rounded ${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} `} />
                    </div>
                    <input type="text" placeholder="Email address" onInput={(e: React.FormEvent<HTMLInputElement>) =>
                            setInfo((u: MailInfo) => {
                                //@ts-ignore
                                u.mail = e.target.value
                                return { ...u }
                            })
                        } className={`p-2 md:p-4 rounded ${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} `} />
                    <textarea name="message" id="message" cols={10} rows={7} placeholder="Message" onChange={(e: any) =>
                            setInfo((u: MailInfo) => {
                                //@ts-ignore
                                u.message = e.target.value
                                return { ...u }
                            })
                        } className={`p-4 resize-none rounded ${dark? 'text-white bg-darkgray' : 'text-black bg-lightgray'} `} />
                    <button className={`px-4 py-2 md:py-6 md:px-16 text-white bg-green rounded`} onClick={async() => await checkInfo()}>Send message</button>
                </section>
            </main>
        </div>
    )
}