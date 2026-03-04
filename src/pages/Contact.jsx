import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Linkedin, Facebook } from "lucide-react";
import emailjs from "@emailjs/browser";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  business: "",
  message: "",
};

const Contact = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedName = formState.name.trim();
    const trimmedEmail = formState.email.trim();
    const trimmedPhone = formState.phone.trim();
    const normalizedPhone = trimmedPhone || "-";
    const trimmedMessage = formState.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setSubmitError("Please fill in name, email, and message.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setSubmitError("Please enter a valid email address.");
      return;
    }

    setSubmitError("");
    setSubmitSuccess("");
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_boffxzd";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_5s4kulr";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "gMnwuBkg-JdrEmXB7";

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: trimmedName,
          email: trimmedEmail,
          phone: normalizedPhone,
          phone_number: normalizedPhone,
          contact_number: normalizedPhone,
          mobile: normalizedPhone,
          lead_phone: normalizedPhone,
          business: formState.business.trim() || "-",
          message: trimmedMessage,
          message_with_phone: `Phone: ${normalizedPhone}\n\n${trimmedMessage}`,
          page_path: typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : "-",
          to_email: "info@adverrahub.com",
        },
        { publicKey }
      );

      setSubmitSuccess("Lead submitted successfully.");
      setFormState(initialFormState);
    } catch (error) {
      const detailedError = error?.text || error?.message || "Submission failed. Please try again.";
      setSubmitError(`EmailJS error: ${detailedError}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#121214] text-white font-sans selection:bg-[#7c7adb] selection:text-white overflow-x-hidden">
      <section className="relative pt-32 pb-14 lg:pt-44 lg:pb-16 container mx-auto px-6 text-center">
        <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-[-0.02em] uppercase">
          Contact
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7]">
            Adverra Hub
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
          Share your requirements and we will get back to you with a focused growth plan.
        </p>
      </section>

      <section className="pb-24 container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1e1e24] border border-white/10 rounded-3xl p-6 md:p-8"
          >
            <h2 className="text-2xl font-black uppercase tracking-tight mb-2">Send Us A Message</h2>
            <p className="text-gray-400 text-sm mb-6">Emails are sent to info@adverrahub.com</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                placeholder="Your Name *"
                className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7c7adb]"
              />
              <input
                name="email"
                type="email"
                value={formState.email}
                onChange={handleInputChange}
                placeholder="Your Email *"
                className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7c7adb]"
              />
              <input
                name="phone"
                value={formState.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7c7adb]"
              />
              <input
                name="business"
                value={formState.business}
                onChange={handleInputChange}
                placeholder="Business / Brand Name"
                className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7c7adb]"
              />
              <textarea
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                placeholder="Tell us what you need *"
                rows={5}
                className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7c7adb] resize-none"
              />
              {submitSuccess ? <p className="text-green-400 text-sm">{submitSuccess}</p> : null}
              {submitError ? <p className="text-red-400 text-sm">{submitError}</p> : null}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7] text-white font-bold py-3 rounded-xl hover:opacity-95 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Submitting..." : "Submit Lead"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="bg-[#1e1e24] border border-white/10 rounded-3xl p-6 md:p-8"
          >
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Contact Details</h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-[#7c7adb]">Email</p>
                <p className="font-bold text-lg">info@adverrahub.com</p>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-[#7c7adb]">Phone</p>
                <p className="font-bold text-lg">+91 7560807374</p>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-[#7c7adb]">Office</p>
                <p className="font-bold text-lg text-gray-400">Wayanad & Calicut, India</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs font-black uppercase tracking-widest text-[#7c7adb] mb-3">Follow</p>
              <div className="flex gap-5">
                <a href="https://www.instagram.com/adverra_hub/" target="_blank" rel="noopener noreferrer" className="hover:text-[#7c7adb]">
                  <Instagram size={18} />
                </a>
                <a href="https://www.linkedin.com/company/adverrahub" target="_blank" rel="noopener noreferrer" className="hover:text-[#7c7adb]">
                  <Linkedin size={18} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61578278429066" target="_blank" rel="noopener noreferrer" className="hover:text-[#7c7adb]">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
