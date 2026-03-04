import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cmsApi } from "../services/api";

const initialLeadForm = {
  name: "",
  email: "",
  phone: "",
  business: "",
  message: "",
};

const LeadFormModal = ({ isOpen, onClose, recipientEmail = "info@adverrahub.com" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [leadForm, setLeadForm] = useState(initialLeadForm);

  const resetLeadForm = () => {
    setLeadForm(initialLeadForm);
    setSubmitSuccess("");
    setSubmitError("");
    setIsSubmitting(false);
  };

  const handleClose = () => {
    onClose?.();
    resetLeadForm();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLeadForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedName = leadForm.name.trim();
    const trimmedEmail = leadForm.email.trim();
    const trimmedMessage = leadForm.message.trim();

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
      await cmsApi.submitPublicLead({
        name: trimmedName,
        email: trimmedEmail,
        phone: leadForm.phone.trim(),
        business: leadForm.business.trim(),
        message: trimmedMessage,
        page_path: typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : "",
      });
      setSubmitSuccess("Lead submitted successfully.");
      setLeadForm(initialLeadForm);
    } catch (error) {
      const detail = error?.response?.data?.detail;
      setSubmitError(detail || "Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            className="w-full max-w-xl bg-[#1e1e24] border border-white/10 rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black uppercase tracking-tight">Get In Touch</h3>
              <button
                type="button"
                onClick={handleClose}
                className="text-gray-400 hover:text-white text-sm font-bold uppercase tracking-wider"
              >
                Close
              </button>
            </div>
            <p className="text-xs text-gray-400 mb-4">
              This lead email will be sent to {recipientEmail}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={leadForm.name}
                onChange={handleInputChange}
                placeholder="Your Name *"
                className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7c7adb]"
              />
              <input
                name="email"
                type="email"
                value={leadForm.email}
                onChange={handleInputChange}
                placeholder="Your Email *"
                className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7c7adb]"
              />
              <input
                name="phone"
                value={leadForm.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7c7adb]"
              />
              <input
                name="business"
                value={leadForm.business}
                onChange={handleInputChange}
                placeholder="Business / Brand Name"
                className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7c7adb]"
              />
              <textarea
                name="message"
                value={leadForm.message}
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
                className="w-full bg-gradient-to-r from-[#7c7adb] to-[#a3a1f7] text-white font-bold py-3 rounded-xl hover:opacity-95 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Lead"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default LeadFormModal;
