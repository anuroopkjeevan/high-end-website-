import React from 'react';
import { SectionHeader, Icon } from '../components/SharedComponents.jsx';
import { goldenVisaBenefits, goldenVisaApplicationSteps } from '../components/Data.js';
import Logo from '../assets/golden.jpeg'




const GoldenVisaPage = ({ handleNavClick }) => {
    const benefitsWithIcons = goldenVisaBenefits.map(benefit => ({
        ...benefit,
        IconComponent: (props) => <Icon path={benefit.iconPath} {...props} />
    }));

    return (
        <>
<section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-gray-800 to-gray-900 border-b border-yellow-500 relative overflow-hidden">
    <div
        className="absolute inset-0 opacity-5 z-0"
        style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #e8be69 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #e8be69 0%, transparent 50%),
                              radial-gradient(circle at 40% 40%, #e8be69 0%, transparent 50%)`
        }}
    ></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
            <p className="text-yellow-500 text-sm md:text-lg font-medium mb-6 md:mb-4 tracking-normal">
                Home / Golden Visa
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold md:font-extrabold leading-tight text-white mb-6 md:mb-8 tracking-tight">
                Let Our Experts Help You{" "}
                <span className="text-yellow-500 block md:inline mt-2 md:mt-0">
                    Get Your UAE Golden Visa
                </span>
            </h1>
            
            {/* 10-Year Highlight */}
{/* <div className="mb-6 md:mb-8">
    <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-yellow-500/20 border border-yellow-500 rounded-full">
        <Icon 
            path="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
            className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" 
        />
        <span className="text-white font-bold text-lg md:text-xl tracking-wide">
            10-YEAR RESIDENCY VISA
        </span>
    </div>
</div> */}

<div className="mt-6 md:mt-8 max-w-4xl mx-auto space-y-4 md:space-y-6">
    <p className="text-base md:text-lg text-gray-300 leading-relaxed tracking-normal text-center md:text-left">
        The UAE Golden Visa is a <span className="font-bold text-yellow-400">10-year long-term residency</span> opportunity for individuals and families seeking stability and exclusive benefits in the United Arab Emirates.
    </p>
    <p className="text-base md:text-lg text-gray-300 leading-relaxed tracking-normal text-center md:text-left">
        At Posh Consultants, we're here to guide you every step of the way. Our team of experts specializes in company formation and visa services, ensuring you meet all the eligibility requirements for this long-term residency program.
    </p>
</div>
</div>
</div>
</section>

{/* What is Golden Visa */}
<section className="py-16 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Section - Corrected */}
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-500">
                {/* Replace Logo with actual image */}
                <img 
                   src={Logo}// Replace with your actual image path
                    alt="UAE Golden Visa illustration or related image"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-yellow-500/10"></div>
                
                {/* 10-Year Badge on Image */}
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                    10-YEAR VISA
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mb-4 md:mb-6">
                    What is Golden Visa?
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify md:text-justify [text-align-last:left]">
                    The UAE Golden Visa is a <span className="font-bold text-yellow-600">10-year long-term residency permit</span> introduced by the United Arab Emirates (UAE) government for qualified individuals. This program grants recipients the ability to reside and work in the UAE for an extended period, aiming to attract investors, entrepreneurs, skilled professionals, and students to the nation.
                </p>
                
                <button
                    onClick={() => handleNavClick('contactpage')}
                    className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 border-2 border-yellow-500 mt-6 md:mt-8"
                >
                    <Icon path="M9 5l7 7-7 7" className="w-5 h-5 mr-2" />
                    <span className="text-justify md:text-justify [text-align-last:left]">
                        Know More
                    </span>
                </button>
            </div>
        </div>
    </div>
</section>

            {/* Eligibility & Benefits */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-12">
    <p className="text-yellow-500 uppercase tracking-widest text-xs md:text-sm font-semibold tracking-normal">KEY CRITERIA</p>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-gray-900 mt-2 mb-3 md:mb-4 tracking-tight text-center">
        Eligibility & Benefits of <span className="text-yellow-500 tracking-tight">UAE Golden Visa</span>
    </h2>
    <div className="h-1 w-16 md:w-20 bg-yellow-500 mx-auto mt-3 md:mt-4 rounded-full"></div>
</div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Eligibility */}
                        <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center">
                                <Icon
                                    path="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    className="w-5 h-5 md:w-6 md:h-6 mr-3 text-yellow-500"
                                />
                                <span className="text-justify md:text-justify [text-align-last:left] flex-1">
                                    The Requirements
                                </span>
                            </h3>

                            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 text-justify md:text-justify [text-align-last:left]">
                                The requirements for the UAE Golden Visa depend on the category you apply under, but here's a general breakdown:
                            </p>

                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <h4 className="font-bold text-yellow-500 text-lg md:text-xl mb-3 md:mb-4 text-left">Categories:</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {['Employment', 'Investment', 'Entrepreneurship', 'Exceptional Talent', 'Family'].map((cat, index) => (
                                            <div key={index} className="flex items-center p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-yellow-500/10 transition border border-gray-200">
                                                <Icon path="M5 13l4 4L19 7" className="w-4 h-4 md:w-5 md:h-5 mr-3 text-yellow-500" />
                                                <span className="text-gray-700 font-medium text-sm md:text-base text-left flex-1">{cat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-xs md:text-sm text-gray-600 bg-yellow-500/5 p-3 md:p-4 rounded-lg border border-yellow-500/20 text-justify md:text-justify [text-align-last:left]">
                                    <Icon
                                        path="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"
                                        className="w-4 h-4 inline mr-2 text-yellow-500"
                                    />
                                    *If you work in key sectors like healthcare, education, IT or research, you may qualify if your salary meets the criteria.
                                </div>
                            </div>
                        </div>

                       {/* BENEFITS */}
<div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 h-auto">
    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center">
        <Icon
            path="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            className="w-5 h-5 md:w-6 md:h-6 mr-3 text-yellow-500 flex-shrink-0"
        />
        <span className="flex-1">Benefits</span>
    </h3>

    <ul className="space-y-3 md:space-y-4">
        <li className="flex items-start p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-yellow-500/10 transition">
            <Icon 
                path="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m0 0A5.995 5.995 0 0012 11.5a5.995 5.995 0 00-3 5.197" 
                className="w-4 h-4 md:w-5 md:h-5 mr-3 text-yellow-500 flex-shrink-0 mt-1" 
            />
            <span className="text-gray-700 text-sm md:text-base flex-1">
                Allows applicants to include their spouse and unmarried children of any age
            </span>
        </li>

        <li className="flex items-start p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-yellow-500/10 transition">
            <Icon 
                path="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                className="w-4 h-4 md:w-5 md:h-5 mr-3 text-yellow-500 flex-shrink-0 mt-1" 
            />
            <span className="text-gray-700 text-sm md:text-base flex-1">
                No requirement to reside in UAE to maintain Golden Visa
            </span>
        </li>

        <li className="flex items-start p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-yellow-500/10 transition">
            <Icon
                path="M9 8h6m-9 8h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                className="w-4 h-4 md:w-5 md:h-5 mr-3 text-yellow-500 flex-shrink-0 mt-1"
            />
            <span className="text-gray-700 text-sm md:text-base flex-1">
                No personal income tax
            </span>
        </li>

        <li className="flex items-start p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-yellow-500/10 transition">
            <Icon
                path="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                className="w-4 h-4 md:w-5 md:h-5 mr-3 text-yellow-500 flex-shrink-0 mt-1"
            />
            <span className="text-gray-700 text-sm md:text-base flex-1">
                Esaad Privilege Card
            </span>
        </li>
    </ul>
</div>
                    </div>
                </div>
            </section>

{/* How to Apply */}
<section className="py-16 md:py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
            <p className="text-yellow-500 uppercase tracking-widest text-xs md:text-sm font-semibold">OUR PROCESS</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold text-white mt-2 mb-3 md:mb-4">
                How to Apply for the <span className="text-yellow-500">UAE Golden Visa</span>
            </h2>
            <div className="h-1 w-16 md:w-20 bg-yellow-500 mx-auto mt-3 md:mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {goldenVisaApplicationSteps.map((step) => (
                <div
                    key={step.num}
                    className="p-4 md:p-6 text-center rounded-2xl border border-gray-700 shadow-lg hover:border-yellow-500 hover:shadow-xl transition bg-gray-800"
                >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-500 text-white flex items-center justify-center rounded-full mx-auto mb-3 md:mb-4 text-lg md:text-xl font-bold">
                        {step.num}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                        {step.title}
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm">
                        {step.description}
                    </p>
                </div>
            ))}
        </div>
    </div>
</section>
        </>
    );
};

export default GoldenVisaPage;