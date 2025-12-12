// Data.js
export const contactDetails = {
    uae: {
        address: 'Office 310, Sarah Building, Al Garhoud, Dubai, UAE',
        addressDetail: 'Posh Businessmen Services LLC, Office 310, Sarah Building, Al Garhoud, Dubai, UAE',
        email: 'admin@poshconsultants.com',
        phone: ' +971 565747444',
        telPrefix: 'Tel'
    },
    india: {
        address: 'Sai Building Opp. EMC Hospital, Palarivattom, Cochin, Kerala, India.',
        addressDetail: 'Sai Building Opp. EMC Hospital, Palarivattom, Cochin 2, Kerala, India.',
        phone1: '+91 95 44 55 99 88',
        phone2: '+91 90 20 60 88 88',
        telPrefix: 'Tel'
    }
};
// Data.js
export const navItems = [
    { name: "Home", page: "home" },
    { name: "Business Buy & Sell", page: "buyingselling" },
    { name: "Commercial Real Estate", page: "commercial" },
    { name: "Residential Real Estate", page: "residential" },
    { name: "Golden Visa", page: "goldenvisa" },
    { name: "Business Setup", page: "businesssetup" },
    { name: "About", page: "aboutpage" },
    { name: "Contact", page: "contactpage" }
  ];
  
export const coreServices = [
    { title: 'Business Setup in UAE', description: 'Get seamless business setup in Dubai with tailored guidance.', iconPath: "M21 13V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h7M12 5v2m0 12v-2m0-5V7" },
    { title: 'Corporate Services', description: 'Get complete support for your UAE business journey, ensuring full compliance.', iconPath: "M17 20v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m4-10a4 4 0 11-8 0 4 4 0 018 0z" },
    { title: 'UAE Golden Visa', description: 'Golden Visa Assistance, eligibility checks & equivalency certificates.', iconPath: "M12 17.25L9.5 15l-2.5 2.25V5.25a2 2 0 012-2h3a2 2 0 012 2v12zM12 17.25l2.5-2.25 2.5 2.25V5.25a2 2 0 00-2-2h-3a2 2 0 00-2 2v12z" },
];

export const expertiseStats = [
    'Expert Opinion & Guidance',
    'Most affordable office facilitations',
    'Company incorporation facilities',
    'Thorough knowledge of UAE Federal laws',
];

export const pricingPackages = [
    {
        title: 'Mainland Business License',
        price: 'AED 10,000',
        description: 'Exclusive Mainland Business License Package with One Investor Visa.',
        isFeatured: true,
        features: [
            'Licensing, MOA & Documentation*',
            'Lease Agreement',
            'Immigration Card',
            'Investor visa',
            'Dedicated Account Manager',
        ]
    },
    {
        title: 'Freezone License',
        price: 'AED 5,500',
        description: 'Other Business Formation Opportunities in UAE Freezone.',
        isFeatured: false,
        features: [
            'Trade License',
            'Up to 5 Activities & 5 Shareholders',
            'Lease Agreement',
            'Memorandum of Association',
            'Dedicated Account Manager',
        ]
    },
    {
        title: 'Freezone License + 1 Visa',
        price: 'AED 12,000',
        description: 'Business Formation Opportunities in UAE Freezone + 1 Visa',
        isFeatured: false,
        features: [
            'Trade License',
            'Lease Agreement',
            'Memorandum of Association',
            '1 Visa & Establishment card',
            'Dedicated Account Manager',
        ]
    },
];
// Data.js - Add this for Residential Real Estate
export const residentialRealEstateFAQ = [
    {
        q: "How do you help clients choose the right off-plan property?",
        a: "We compare projects by layouts, payment plans, locations, ROI, developer reputation, and future value — ensuring you select what's best for your needs, not what's being pushed by the market."
    },
    {
        q: "What makes your buying process different from other agents?",
        a: "We focus on honest guidance, clear comparisons, full transparency, and zero pressure. You get a straightforward explanation of every option so you can choose confidently without confusion or hidden information."
    },
    {
        q: "Can you help me sell my property as well?",
        a: "Yes. We collect all details about your property, prepare the profile, market it correctly, and present it to qualified buyers. We handle negotiations and paperwork until transfer."
    },
    {
        q: "Do you assist with both ready and off-plan properties?",
        a: "Yes. We cover off-plan, ready residential units, villas, townhouses, apartments, penthouses, and more."
    },
    {
        q: "What support do you provide after I choose a property?",
        a: "We guide you through negotiation, paperwork, NOCs, developer processes, bank requirements, and final transfer to ensure a smooth experience."
    }
];

// Data.js - Add this for Commercial Real Estate
export const commercialRealEstateFAQ = [
    {
        q: "What types of commercial properties do you assist with?",
        a: "We help clients buy and sell warehouses, commercial lands, plots, offices, retail units, and industrial spaces across the UAE."
    },
    {
        q: "How do you help businesses choose the right commercial property?",
        a: "We analyse your operational needs, location requirements, size, budget, and long-term goals — then match you with suitable commercial options."
    },
    {
        q: "Do you manage the full transaction process?",
        a: "Yes. We handle pricing, negotiations, documentation, title transfer, approvals, and ensure both parties understand every step."
    },
    {
        q: "Can you help me find buyers for my commercial property?",
        a: "Absolutely. We create a detailed property profile, market it effectively, and connect you with serious buyers or investors."
    },
    {
        q: "Do you assist with commercial property valuation or market guidance?",
        a: "Yes. We provide clear insights on market prices, demand trends, and property value so you can make informed decisions before buying or selling."
    }
];
// Data.js - Add this for Business Buy & Sell
export const businessBuySellFAQ = [
    {
        q: "How do you find the right business for a buyer?",
        a: "We study your goals, budget, preferred industry, experience, and long-term plans — then match you with businesses that fit your criteria."
    },
    {
        q: "How do you ensure confidentiality during the sale?",
        a: "Business information is shared only with verified and serious buyers, and all details are handled discreetly from the first discussion until final handover."
    },
    {
        q: "What details do you collect from sellers?",
        a: "Everything needed to understand the business properly: financials, operations, assets, liabilities, contracts, revenue, staff, and performance history."
    },
    {
        q: "Do you assist with legal work and documentation?",
        a: "Yes — we support contracts, share transfers, agreements, due diligence coordination, and all paperwork required until final closing."
    },
    {
        q: "How long does it take to buy or sell a business?",
        a: "It depends on the type of business. Some deals close in a few weeks, while others take a few months. We manage the entire process for you and keep things moving efficiently."
    }
];
export const faqData = [
    {
        q: "How does Posh Consultants assist with business setup?",
        a: "With over a decade of expertise, Posh Consultants works closely with government authorities and free zones to simplify your business setup process. We understand your requirements, recommend the right business activity and jurisdiction, and provide end-to-end solutions to save you time, money, and effort. Our services also extend beyond the setup phase to help you manage all initial business needs, ensuring a smooth start."
    },
    {
        q: "What types of companies can I start in the UAE?",
        a: "In the UAE, you can establish a business in the mainland, free zones, or offshore. Mainland companies require a local sponsor and a license from the Department of Economic Development (DED). Free zone companies operate under the rules of specific zones, while offshore companies focus on trading outside the UAE and offer asset protection. The UAE offers over 1,000 business activities approved by the Economic Department."
    },
    {
        q: "How long does it take to set up a free zone company?",
        a: "Posh Consultants offers a quick and reliable process for setting up free zone companies in the UAE, typically taking 3 to 10 days. The exact timeframe depends on the chosen free zone. We ensure timely attestation of legal documents, so you can avoid delays and get started on time."
    },
    {
        q: "What are the advantages of setting up a free zone company in the UAE?",
        a: "Starting a free zone company in the UAE comes with many perks, including 100% foreign ownership, full profit and capital repatriation, and exemption from import/export duties. Free zones also provide streamlined processes and a business-friendly environment with minimal bureaucracy. At Posh Consultants, we specialize in hassle-free free zone setups, helping you maximize these benefits and achieve long-term success in the UAE market."
    },
    {
        q: "Do I need to rent an office for my business?",
        a: "A physical office is required for both mainland and free zone companies, while offshore companies are not allowed to lease office space. Posh Consultants helps you find cost-effective office solutions, including co-working spaces and fully furnished offices on the mainland. Some free zones also offer flexible desk options to help minimize your startup costs."
    }
];
// Data.js - Add this for Homepage FAQ
export const homePageFAQ = [
    {
        q: "What services does POSH Consultants provide?",
        a: "We assist with business buying and selling, residential & commercial real estate, and business setup services in the UAE. Whether you're looking to invest, sell, relocate, or start a new venture, we guide you through the entire process with transparency and expert support."
    },
    {
        q: "How does POSH Consultants help with buying or selling a business?",
        a: "We understand your requirements, shortlist suitable businesses, present complete financial and operational details, handle negotiations, manage documentation, and ensure a smooth transfer. For sellers, we profile the business professionally and maintain full confidentiality while connecting you with verified buyers."
    },
    {
        q: "Do you help clients choose the right property in the UAE?",
        a: "Yes. We assist with off-plan and ready residential properties, along with commercial spaces like warehouses and land. We compare options, explain pros and cons, arrange viewings, and guide you through pricing, negotiation, and paperwork so you make a confident decision."
    },
    {
        q: "What is included in your business setup service?",
        a: "We help you choose the right structure, jurisdiction, and license based on your goals, and guide you through all approvals, documentation, visas, and bank account support. Our process is simple, clear, and tailored to what you need."
    },
    {
        q: "Why should I choose POSH Consultants?",
        a: "We are built on honesty, transparency, confidentiality, and client-first guidance. We explain everything clearly, support you end-to-end, and always recommend what is genuinely right for your goals — whether you're buying, selling, investing, or setting up a company."
    }
];
export const companyTypes = [
    'E-Commerce', 'IT Services', 'General Trading', 'Accounting & Auditing', 'HR Consultancy',
    'Event Management', 'Technical Services', 'Management Consultancy'
];

export const goldenVisaBenefits = [
    { text: 'Allows applicants to include their spouse and unmarried children of any age', iconPath: "M17 20v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m4-10a4 4 0 11-8 0 4 4 0 018 0z" },
    { text: 'No requirement to reside in UAE to maintain Golden Visa.', iconPath: "M12 8v4l3 3M12 22a10 10 0 100-20 10 10 0 000 20z" },
    { text: 'No personal income tax', iconPath: "M12 12c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm0 0v12m0-12V0" },
    { text: 'Esaad Privilege Card', iconPath: "M12 17.25L9.5 15l-2.5 2.25V5.25a2 2 0 012-2h3a2 2 0 012 2v12zM12 17.25l2.5-2.25 2.5 2.25V5.25a2 2 0 00-2-2h-3a2 2 0 00-2 2v12z" },
];

export const goldenVisaApplicationSteps = [
    { num: '01', title: 'Check Your Eligibility', description: "Check your Golden Visa eligibility by answering few questions, and we'll determine if you qualify under employee, investor, or entrepreneur etc." },
    { num: '02', title: 'Prepare Your Documents', description: "We will assist you to gather all the necessary paperwork based on your chosen category. After that, we will proceed with your application" },
    { num: '03', title: 'Biometric Enrollment', description: "Attend Biometric Enrollment Complete the biometric process, which includes providing your fingerprints and other details." },
    { num: '04', title: 'Wait for the Decision', description: "Processing times can vary, so you'll need to wait for a decision. If approved, you'll get your Golden Visa. If rejected, you'll be informed of the reasons for denial." },
];

export const freeZoneOptions = [
    { title: 'Dubai Freezones', description: "Learn more about Dubai's free zones and the process of setting up a company within them." },
    { title: 'Sharjah Freezones', description: "Learn more about Sharjah's free zones and the process of setting up a company within them." },
    { title: 'RAK Freezones', description: "Learn more about RAK's free zones and the process of setting up a company within them." },
];

export const whyChoosePosh = [
    { title: 'Expert Guidance', description: 'Our team of experienced consultants provides personalized support throughout the entire freezone setup journey.', iconPath: "M12 17.25L9.5 15l-2.5 2.25V5.25a2 2 0 012-2h3a2 2 0 012 2v12zM12 17.25l2.5-2.25 2.5 2.25V5.25a2 2 0 00-2-2h-3a2 2 0 00-2 2v12z" },
    { title: 'Streamlined Processes', description: 'We simplify complex procedures, saving you time and resources.', iconPath: "M13 10V3L4 14h7v7l9-11h-7z" },
    { title: 'Tailored Solutions', description: 'We develop customized strategies that align with your business objectives and budget.', iconPath: "M14.5 9.5l-5 5m0-5l5 5m0-5l-5 5" },
    { title: 'Access to a Wide Network', description: 'We leverage our extensive network to connect you with key stakeholders and facilitate business growth.', iconPath: "M17 20v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m4-10a4 4 0 11-8 0 4 4 0 018 0z" },
];

export const contactServiceOptions = [
    'Choose Our Service',
    'Business Buying and Selling',
    'Commercial Real Estate',
    'Residential Real Estate',
    'Golden Visa',
    'Other Visa Services',
    'Company Formation',
   
    // 'Accounting/ VAT/Corporate Tax Services',
];

export const footerServices = [
    'Business Buying and Selling',
    'Commercial Real Estate',
    'Residential Real Estate',
    'Golden Visa',
    'Other Visa Services',
    'Company Formation',
 
];