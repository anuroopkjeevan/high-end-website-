import React from 'react';
import { MapPin, Phone, Mail } from '../components/SharedComponents.jsx';
import { contactDetails, contactServiceOptions } from '../components/Data.js';

const ContactPage = () => (
    <>
    {/* Contact Hero */}
<section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-gray-800 to-gray-900 border-b border-yellow-500 relative overflow-hidden">
    {/* Gold Pattern Overlay */}
    <div className="absolute inset-0 opacity-5 z-0" 
         style={{
             backgroundImage: `radial-gradient(circle at 20% 80%, #e8be69 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #e8be69 0%, transparent 50%),
                              radial-gradient(circle at 40% 40%, #e8be69 0%, transparent 50%)`
         }}>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
            <p className="text-yellow-500 text-sm md:text-lg font-medium mb-6 md:mb-4 tracking-normal">
                Home / Contact Us
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold md:font-extrabold leading-tight text-white mb-6 md:mb-8 tracking-tight">
                NEED ANY <span className="text-yellow-500">HELP</span>?
            </h1>
            <div className="mt-6 md:mt-8 max-w-4xl mx-auto space-y-4">
                <p className="text-base md:text-lg text-gray-300 leading-relaxed tracking-normal">
                    Get in touch with us.
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed tracking-normal">
                If you’re looking for reliable experts in business buying, selling, business setup, and real estate services in Dubai, contact Posh Consultants today.
                </p>
            </div>
        </div>
    </div>
</section>
        {/* Contact Form & Details Section */}
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-gray-50 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold md:font-extrabold text-gray-900 mb-2 tracking-tight">SEND US EMAIL</h2>
                        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 tracking-normal">Feel free to write.</p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    className="w-full p-3 md:p-4 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300 tracking-normal" 
                                    required 
                                />
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    className="w-full p-3 md:p-4 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300 tracking-normal" 
                                    required 
                                />
                            </div>
                            <select 
                                className="w-full p-3 md:p-4 rounded-lg bg-white border border-gray-300 text-gray-600 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300 tracking-normal"
                                defaultValue=""
                            >
                                {contactServiceOptions.map((option, index) => (
                                    <option key={index} value={option} disabled={index === 0}>{option}</option>
                                ))}
                            </select>
                            <textarea 
                                placeholder="Your Message" 
                                rows="5" 
                                className="w-full p-3 md:p-4 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300 resize-none tracking-normal" 
                                required
                            ></textarea>
                            <button 
                                type="submit" 
                                className="w-full py-3 md:py-4 bg-yellow-500 text-white font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-[1.01] active:scale-[0.99] border-2 border-yellow-500 tracking-normal"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6 md:space-y-8">
                        {/* UAE Office */}
                        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-xl border border-gray-200 hover:border-yellow-500 transition duration-300 hover:shadow-yellow-500/20">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center tracking-tight">
                                <MapPin className="w-6 h-6 md:w-7 md:h-7 mr-3 text-yellow-500 flex-shrink-0" /> 
                                <span>UAE Headquarters</span>
                            </h3>
                            <div className="space-y-2 md:space-y-3 text-gray-700">
                                <div className="flex items-start">
                                    <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 mt-1 text-yellow-500 flex-shrink-0" />
                                    <span className="text-sm md:text-base leading-relaxed tracking-normal">{contactDetails.uae.addressDetail}</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-yellow-500 flex-shrink-0" />
                                    <span className="text-sm md:text-base tracking-normal">
                                        {contactDetails.uae.telPrefix}: 
                                        <a href={`tel:${contactDetails.uae.phone}`} className="ml-1 hover:text-gray-900 transition font-medium">
                                            {contactDetails.uae.phone}
                                        </a>
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-yellow-500 flex-shrink-0" />
                                    <span className="text-sm md:text-base tracking-normal">
                                        Email: 
                                        <a href={`mailto:${contactDetails.uae.email}`} className="ml-1 hover:text-gray-900 transition font-medium">
                                            {contactDetails.uae.email}
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* India Office */}
                        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-xl border border-gray-200 hover:border-yellow-500 transition duration-300 hover:shadow-yellow-500/20">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center tracking-tight">
                                <MapPin className="w-6 h-6 md:w-7 md:h-7 mr-3 text-yellow-500 flex-shrink-0" /> 
                                <span>India Branch</span>
                            </h3>
                            <div className="space-y-2 md:space-y-3 text-gray-700">
                                <div className="flex items-start">
                                    <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 mt-1 text-yellow-500 flex-shrink-0" />
                                    <span className="text-sm md:text-base leading-relaxed tracking-normal">{contactDetails.india.addressDetail}</span>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 mt-1 text-yellow-500 flex-shrink-0" />
                                    <div className="text-sm md:text-base">
                                        <span className="font-medium tracking-normal">{contactDetails.india.telPrefix}:</span>
                                        <div className="ml-1 mt-1">
                                            <a href={`tel:${contactDetails.india.phone1}`} className="block hover:text-gray-900 transition tracking-normal">
                                                {contactDetails.india.phone1}
                                            </a>
                                            <a href={`tel:${contactDetails.india.phone2}`} className="block hover:text-gray-900 transition mt-1 tracking-normal">
                                                {contactDetails.india.phone2}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-yellow-500 flex-shrink-0" />
                                    <span className="text-sm md:text-base tracking-normal">
                                        Email: 
                                        <a href={`mailto:${contactDetails.uae.email}`} className="ml-1 hover:text-gray-900 transition font-medium">
                                            {contactDetails.uae.email}
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default ContactPage;