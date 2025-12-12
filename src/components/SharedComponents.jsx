import React, { useRef, useEffect, useState } from 'react';

// --- Icon Mocks ---
export const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path}></path>
    </svg>
);

// Specific Icons (exported for easy use in pages/components)
export const Briefcase = (props) => <Icon path="M21 13V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h7M12 5v2m0 12v-2m0-5V7" {...props} />;
export const Users = (props) => <Icon path="M17 20v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m4-10a4 4 0 11-8 0 4 4 0 018 0z" {...props} />;
export const BarChart = (props) => <Icon path="M11 15H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2zm0 0v-6m6 0h-6m-6 0v6" {...props} />;
export const Award = (props) => <Icon path="M12 17.25L9.5 15l-2.5 2.25V5.25a2 2 0 012-2h3a2 2 0 012 2v12zM12 17.25l2.5-2.25 2.5 2.25V5.25a2 2 0 00-2-2h-3a2 2 0 00-2 2v12z" {...props} />;
export const Mail = (props) => <Icon path="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4l-4-4m-4-4H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2z" {...props} />;
export const Phone = (props) => <Icon path="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-4.5a14.5 14.5 0 01-14.5-14.5V5z" {...props} />;
export const MapPin = (props) => <Icon path="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0zM12 13a3 3 0 100-6 3 3 0 000 6z" {...props} />;
export const Check = (props) => <Icon path="M5 13l4 4L19 7" {...props} />;
export const Plus = (props) => <Icon path="M12 4v16m8-8H4" {...props} />;
export const Minus = (props) => <Icon path="M20 12H4" {...props} />;
export const Target = (props) => <Icon path="M14.5 9.5l-5 5m0-5l5 5m0-5l-5 5" {...props} />;
export const Compass = (props) => <Icon path="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14a4 4 0 110-8 4 4 0 010 8z" {...props} />;
export const TrendingUp = (props) => <Icon path="M13 7l5 5m0 0l-5 5m5-5H6" {...props} />;
export const DollarSign = (props) => <Icon path="M12 12c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm0 0v12m0-12V0" {...props} />;
export const Clock = (props) => <Icon path="M12 8v4l3 3M12 22a10 10 0 100-20 10 10 0 000 20z" {...props} />;
export const Zap = (props) => <Icon path="M13 10V3L4 14h7v7l9-11h-7z" {...props} />;

// NEW ICONS ADDED FOR BUSINESS BUY & SELL PAGE
export const Handshake = (props) => <Icon path="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" {...props} />;

export const Shield = (props) => <Icon path="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" {...props} />;

export const CheckCircle = (props) => <Icon path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" {...props} />;

export const Lock = (props) => <Icon path="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" {...props} />;

export const UserCheck = (props) => <Icon path="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" {...props} />;

export const EyeOff = (props) => <Icon path="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" {...props} />;

export const Star = (props) => <Icon path="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" {...props} />;

// --- Shared UI Components ---

export const SectionHeader = ({ subTitle, title }) => (
    <div className="text-center mb-12">
        <p className="text-indigo-600 uppercase tracking-widest text-sm font-semibold">{subTitle}</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">{title}</h2>
        <div className="h-1 w-20 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
    </div>
);

// ADD EXPORT HERE - This was missing
export const AccordionItem = ({ question, answer, isOpen, onClick }) => (
    <div className="bg-gray-50 rounded-xl shadow-md transition duration-300">
        <button
            className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-gray-900 transition duration-300"
            onClick={onClick}
            aria-expanded={isOpen}
        >
            <span className="text-lg md:text-xl pr-4">{question}</span>
            {isOpen
                ? <Minus className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                : <Plus className="w-6 h-6 text-indigo-600 flex-shrink-0" />
            }
        </button>
        <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 px-6 pb-6' : 'max-h-0 opacity-0'}`}
            aria-hidden={!isOpen}
        >
            <p className="text-gray-600 text-base leading-relaxed border-t border-gray-200 pt-4 mt-[-4px]">{answer}</p>
        </div>
    </div>
);

// --- Expertise Section (For Homepage) ---
const ProgressBar = ({ title, animate }) => (
    <div className="mb-8 last:mb-0">
        <div className="flex justify-between items-center mb-2">
            <h4 className="text-xl font-semibold text-white">{title}</h4>
            <span className="text-lg font-bold text-indigo-400">100%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
            <div
                className={`h-3 bg-indigo-600 rounded-full transition-all duration-1000 ease-out ${animate ? 'w-full' : 'w-0'}`}
            ></div>
        </div>
    </div>
);

export const ExpertiseSection = ({ expertiseStats }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="expertise-stats" ref={sectionRef} className="py-24 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="lg:pr-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug text-white mb-6">
                            Business Setup Consultants in <span className="text-indigo-400">Dubai</span>
                        </h2>
                        <p className="text-lg text-gray-400 mb-6">
                            Posh Consultants is committed to empowering aspiring entrepreneurs with effortless business setup in Dubai, offering personalized guidance to meet their unique requirements.
                        </p>
                        <p className="text-lg text-gray-400">
                            We adopt innovative strategies to simplify and transform the UAE company formation process, leveraging advanced tools and technologies to elevate the client experience.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {expertiseStats.map((title, index) => (
                            <ProgressBar key={index} title={title} animate={isIntersecting} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};