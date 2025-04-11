import emailjs from "@emailjs/browser"
import Swal from "sweetalert2"

function InputField({ id, name, label, placeholder, handleChange, type }) {
    return (
        <div className="relative">
            <input
                type={type ? type : "text"}
                id={id}
                name={name}
                required
                className="block border-2 bg-neutral-100 dark:bg-neutral-800 px-2.5 pb-2.5 pt-4 w-full text-base rounded-md peer shadow-md focus:outline-none focus:ring-0 focus:border-black/70 dark:border-white/20 dark:focus:border-white/80"
                placeholder={placeholder}
                onChange={handleChange}
            />
            <label
                htmlFor={id}
                className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-100 dark:bg-neutral-800 px-2 peer-focus:px-2 placeholder-opacity-50 peer-placeholder-shown:placeholder-opacity-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 cursor-text rounded-md"
            >
                {label}
            </label>
        </div>
    )
}

function TextAreaField({ id, name, label, placeholder, handleChange }) {
    return (
        <div className="relative">
            <textarea
                type="text"
                id={id}
                name={name}
                rows={6}
                required
                className="block border-2 bg-neutral-100 dark:bg-neutral-800 px-2.5 pb-2.5 pt-4 w-full text-base rounded-md peer shadow-md focus:outline-none focus:ring-0 focus:border-black/70 dark:focus:border-white/80 dark:border-white/20"
                placeholder={placeholder}
                onChange={handleChange}
            />
            <label
                htmlFor={id}
                className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-100 dark:bg-neutral-800 px-2 peer-focus:px-2 placeholder-opacity-50 peer-placeholder-shown:placeholder-opacity-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-7 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 cursor-text rounded-md"
            >
                {label}
            </label>
        </div>
    )
}

function Button() {
    return (
        <button
            id="submit-button"
            type="submit"
            className="text-white dark:text-black bg-black/85 hover:bg-black dark:bg-white/85 dark:hover:bg-white font-semibold rounded-md text-sm px-4 py-3 w-full cursor-pointer duration-100 transition disabled:bg-opacity-45 dark:disabled:bg-opacity-45 disabled:cursor-not-allowed"
        >
            Send
        </button>
    )
}

export default function ContactForm() {
    const sendEmail = (e) => {
        e.preventDefault()

        const submitButton = document.getElementById("submit-button")
        submitButton.textContent = "Sending..."
        submitButton.disabled = true

        const formData = new FormData(e.target)
        const data = {}
        formData.forEach((value, key) => {
            data[key] = value
        })

        emailjs
            .send("service_6swtmhw", "template_z59khur", data, {
                publicKey: "kv_9L5Vl7r2e6MPyC",
            })
            .then(
                () => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your message has been sent successfully!",
                        text: "I will get back to you as soon as possible.",
                        showConfirmButton: false,
                        timer: 2000
                    })
                    e.target.reset()
                    submitButton.textContent = "Send"
                    submitButton.disabled = false
                },
                (error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong! Please try again.",
                        footer: "Error: " + error.text,
                    })
                    submitButton.textContent = "Send"
                    submitButton.disabled = false
                }
            )
    }

    return (
        <div className="my-6 mx-auto max-w-xl">
            <form onSubmit={sendEmail} className="mt-8 space-y-4">
                <InputField id="name" type={"text"} name={"from_name"} label="Full Name" placeholder={"Name"} />
                <InputField id="email" type={"email"} name={"from_email"} label="Email" placeholder={"Email"} />
                <TextAreaField id="message" name={"message"} label="Message" placeholder={"Message"} />
                <Button />
            </form>
        </div>
    )
}
