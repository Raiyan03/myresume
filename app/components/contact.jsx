"use client"
import { useState } from "react"
import {validateForm} from "../(lib)/validation"
import axios from "axios";
const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
    }

    const onSubmit = async (e) => {
        setError("");
        setEmail("");
        setName("");
        setMessage("");
        e.preventDefault();
        console.log(name, email, message);
        const validation = validateForm(name, email, message);
        if (validation.error) {
            setError(validation.error);
            return;
        }
        try{
            const response = await axios.post("/api/send", {name, email, message});
            setSuccess("Email sent successfully");
        }
        catch(error){
            setError("An error occurred. Please try again later.");
        }
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-5 bg-gray-100">
          <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-lg">
            <h1 className="text-2xl font-bold mb-5 text-center">Contact</h1>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChangeName}
                  className="p-2 border rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChangeEmail}
                  className="p-2 border rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="mb-2 font-semibold">Message</label>
                <textarea
                  name="message"
                  id="message"
                  onChange={handleChangeMessage}
                  className="p-2 border rounded-md"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-emerald-500">{success}</p>}
            </form>
          </div>
        </div>
      );
    };

export default Contact;