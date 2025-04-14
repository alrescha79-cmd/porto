import { createSignal } from "solid-js"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
    const [showAlert, setShowAlert] = createSignal(false)
    const [alertType, setAlertType] = createSignal("success")
    const [alertMessage, setAlertMessage] = createSignal("")
    const [isSending, setIsSending] = createSignal(false)
    let formRef
    let submitButton

    const showTemporaryAlert = (type, message) => {
        setAlertType(type)
        setAlertMessage(message)
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 3000)
    }

    const sendEmail = async (e) => {
        e.preventDefault()
        setIsSending(true)
        submitButton.disabled = true

        const formData = new FormData(formRef)
        const data = {}
        formData.forEach((value, key) => {
            data[key] = value
        })

        try {
            await emailjs.send(
                "service_6swtmhw",
                "template_z59khur",
                data,
                { publicKey: "kv_9L5Vl7r2e6MPyC" }
            )
            showTemporaryAlert("success", "Your message has been sent successfully! We will get back to you soon.")
            formRef.reset()
        } catch (error) {
            showTemporaryAlert("error", "Something went wrong! Please try again.")
        } finally {
            setIsSending(false)
            submitButton.disabled = false
        }
    }

    return (
        <div class="my-6 mx-auto max-w-xl">
            {showAlert() && (
                <div class={`alert ${alertType() === "success" ? "alert-success" : "alert-error"} mb-4 transition duration-300 ease-in-out`}>
                    <span>{alertMessage()}</span>
                </div>
            )}

            <form ref={el => (formRef = el)} onSubmit={sendEmail} class="space-y-4 mt-8">
                <InputField id="name" type="text" name="from_name" label="Full Name" placeholder="Name" />
                <InputField id="email" type="email" name="from_email" label="Email" placeholder="Email" />
                <TextAreaField id="message" name="message" label="Message" placeholder="Message" />
                
                <button
                    ref={el => (submitButton = el)}
                    type="submit"
                    id="submit-button"
                    class="flex items-center justify-center text-white dark:text-black bg-black/85 hover:bg-black dark:bg-white/85 dark:hover:bg-white font-semibold rounded-md text-sm px-4 py-3 w-full cursor-pointer duration-100 transition disabled:bg-opacity-45 dark:disabled:bg-opacity-45 disabled:cursor-not-allowed"
                >
                    {isSending() ? (
                        <>
                            <span>Sending</span>
                            <span class="loading loading-dots loading-sm ml-2"></span>
                        </>
                    ) : (
                        "Send"
                    )}
                </button>
            </form>
        </div>
    )
}

function InputField({ id, name, label, placeholder, type }) {
    return (
        <div class="relative">
            <input
                type={type || "text"}
                id={id}
                name={name}
                required
                placeholder={placeholder}
                class="block border-2 bg-neutral-100 dark:bg-neutral-800 px-2.5 pb-2.5 pt-4 w-full text-base rounded-md peer shadow-md focus:outline-none focus:ring-0 focus:border-black/70 dark:focus:border-white/80 dark:border-white/20"
            />
            <label
                for={id}
                class="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-100 dark:bg-neutral-800 px-2 peer-focus:px-2 placeholder-opacity-50 peer-placeholder-shown:placeholder-opacity-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 cursor-text rounded-md"
            >
                {label}
            </label>
        </div>
    )
}

function TextAreaField({ id, name, label, placeholder }) {
    return (
        <div class="relative">
            <textarea
                id={id}
                name={name}
                rows="6"
                required
                placeholder={placeholder}
                class="block border-2 bg-neutral-100 dark:bg-neutral-800 px-2.5 pb-2.5 pt-4 w-full text-base rounded-md peer shadow-md focus:outline-none focus:ring-0 focus:border-black/70 dark:focus:border-white/80 dark:border-white/20"
            />
            <label
                for={id}
                class="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-100 dark:bg-neutral-800 px-2 peer-focus:px-2 placeholder-opacity-50 peer-placeholder-shown:placeholder-opacity-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-7 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 cursor-text rounded-md"
            >
                {label}
            </label>
        </div>
    )
}
