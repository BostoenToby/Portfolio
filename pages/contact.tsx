import { useEffect, useState } from "react";
import Header from "../components/header";
import FormError from "../interfaces/formError";
import MailInfo from "../interfaces/mailInfo";
//@ts-ignore
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
    const [sent, setSent] = useState<boolean>(false)
    const [delivered, setDelivered] = useState<boolean>(false)

    const [height, setHeight] = useState<boolean>(false)

    useEffect(() => {
        const updateSize = () => {
            const contentHeight = document.getElementsByTagName("body")[0].clientHeight
            const contentRelativeHeight = contentHeight / window.innerHeight
            if(contentRelativeHeight <= 1){
                setHeight(true)
            } else {
                setHeight(false)
            }
        }
        updateSize()
        window.addEventListener("resize", updateSize)
    }, [])

    async function sendgridMail(mail: MailInfo, array: string[]) {
        try {
          await axios.post('/.netlify/functions/sendmail/sendmail',{
            message: mail.message,
            subject: mail.subject,
            senderEmail: mail.mail,
            senderName: mail.name
          })
          //@ts-ignore
          array.forEach(input => document.getElementById(input).value="")
          setDelivered(true)
        } catch (error) {
          console.log(error)
          setDelivered(false)
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
            sendgridMail(info, ["Name", "Subject", "Mail", "Message"])
          }
    }

    return(
        <div className={`${height? 'h-screen' : 'h-full'} ${dark? 'dark' : null}`}>
          <div className="portrait:h-screen landscape:h-full landscape:pb-60 dark:bg-black bg-white">
              <Header setDark={setDark} dark={dark} active="Contact"/>
              <main className="font-montserrat mx-8 h-[calc(100vh-80px)] grid grid-cols-none grid-rows-none items-center justify-center">
                  <div className="grid lg:grid-cols-2 grid-rows-5 lg:grid-rows-none items-center justify-center gap-4 pb-12">

                    <section className="row-start-1 row-end-3 col-start-1 lg:col-start-1 lg:row-start-1 lg:row-end-1">
                        <h1 className="dark:text-lightblue text-green text-3xl md:text-5xl mb-4 landscape:text-3xl landscape:lg:text-5xl lg:px-0">Don't hessitate, go ahead<br />and contact me</h1>
                        <p className="text-base dark:text-white text-black lg:px-0">Send me directly <span className="font-bold text-green cursor-pointer"><a href="mailto:toby.botport@gmail.com">here</a></span> or use the form on the right</p>
                    </section>

                    <section className="row-start-3 row-end-6 col-start-1 lg:col-start-2 lg:row-start-1 lg:row-end-1 flex flex-col space-y-4 portrait:w-[calc(100vw-64px)] ">
                        <div className="flex justify-between">
                            <div className="flex flex-col space-y-2 w-2/5">
                              <input type="text" id="Name" placeholder="Full name" onInput={(e: React.FormEvent<HTMLInputElement>) =>
                                  setInfo((u: MailInfo) => {
                                      //@ts-ignore
                                      u.name = e.target.value
                                      return { ...u }
                                  })
                              } className="p-2 lg:p-4 lg:w-full rounded dark:text-white dark:bg-darkgray text-black bg-lightgray outline-none border border-transparent focus:border-lightgrayx hover:border-lightgrayx dark:focus:border-darkgrayx dark:hover:border-darkgrayx"/>
                              {errors.nameError ? (
                                <p className="dark:text-darkred text-lightred">{errors.nameError}</p>
                              ) : null}
                            </div>
                            <div className="flex flex-col space-y-2 w-1/2">
                              <input type="text" id="Subject" placeholder="Subject" onInput={(e: React.FormEvent<HTMLInputElement>) =>
                                  setInfo((u: MailInfo) => {
                                      //@ts-ignore
                                      u.subject = e.target.value
                                      return { ...u }
                                  })
                              } className="p-2 md:p-4 md:w-full rounded dark:text-white dark:bg-darkgray text-black bg-lightgray outline-none border border-transparent focus:border-lightgrayx hover:border-lightgrayx dark:focus:border-darkgrayx dark:hover:border-darkgrayx"/>
                              {errors.subjectError ? (
                                <p className="dark:text-darkred text-lightred">{errors.subjectError}</p>
                              ) : null}
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <input type="text" id="Mail" placeholder="Email address" onInput={(e: React.FormEvent<HTMLInputElement>) =>
                                  setInfo((u: MailInfo) => {
                                      //@ts-ignore
                                      u.mail = e.target.value
                                      return { ...u }
                                  })
                              } className="p-2 md:p-4 rounded dark:text-white dark:bg-darkgray text-black bg-lightgray outline-none border border-transparent focus:border-lightgrayx hover:border-lightgrayx dark:focus:border-darkgrayx dark:hover:border-darkgrayx"/>
                          {errors.mailError? (
                            <p className="dark:text-darkred text-lightred">{errors.mailError}</p>
                          ): null}
                        </div>
                        <div className="flex flex-col space-y-2">
                          <textarea name="message" id="Message" cols={10} rows={7} placeholder="Message" onChange={(e: any) =>
                                  setInfo((u: MailInfo) => {
                                      //@ts-ignore
                                      u.message = e.target.value
                                      return { ...u }
                                  })
                              } className="p-4 resize-none rounded dark:text-white dark:bg-darkgray text-black bg-lightgray outline-none border border-transparent focus:border-lightgrayx hover:border-lightgrayx dark:focus:border-darkgrayx dark:hover:border-darkgrayx"/>
                          {errors.messageError? (
                            <p className="dark:text-darkred text-lightred">{errors.messageError}</p>
                          ) : null}
                        </div>
                        <button className="px-4 py-2 md:py-6 md:px-16 text-white bg-green rounded border-2 border-transparent hover:border-lightblue focus:border-lightblue" onClick={async() => {setSent(true); await checkInfo()}}>Send message</button>
                        {sent == true && delivered == true && (
                          <p className="dark:text-lightblue text-green mx-auto !mt-2">Message delivered!</p>
                        )}
                        {sent == true && delivered == false && (
                          <p className="dark:text-darkred text-lightred mx-auto !mt-2">Message failed</p>
                        )}
                    </section>
                  </div>
              </main>
          </div>
        </div>
    )
}