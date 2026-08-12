import { IMAGES, SVGICONS } from "./theme";

export const menudata = [
    { title: "Home", link: "/", },
    { title: "About", link: "/about", },
    {
        title: "Practice Areas",
        link: "/services",
        classChange: "navbar-dropdown menu-item-children",
        classChange2: "menu-item-has-children",
        subMenu: [
            { title: "Litigation & Dispute Resolution", link: "/services-details" },
            { title: "Arbitration & ADR", link: "/services-details" },
            { title: "Corporate & Commercial Law", link: "/services-details" },
            { title: "Contracts", link: "/services-details" },
            { title: "Banking & Financial Law", link: "/services-details" },
            { title: "Bankruptcy & Insolvency", link: "/services-details" },
            { title: "Tax & Compliance", link: "/services-details" },
            { title: "Real Estate & Property Law", link: "/services-details" },
            { title: "Maritime & Transport Law", link: "/services-details" },
            { title: "Intellectual Property", link: "/services-details" },
            { title: "Criminal Law", link: "/services-details" },
            { title: "Interpol Red Notice & Extradition Defense", link: "/services-details" },
            { title: "Immigration & Residency Solutions", link: "/services-details" },
            { title: "Family & Personal Status Law", link: "/services-details" },
            { title: "Wills, Probate & Legacy Planning", link: "/services-details" },
        ],
    },
    { title: "Our Team", link: "/team", },
    {
        title: "Insights",
        link: "/our-blog",
        classChange: "navbar-dropdown menu-item-children",
        classChange2: "menu-item-has-children",
        subMenu: [
            { title: "Legal Blog", link: "/our-blog" },
            { title: "Case Studies", link: "/our-blog" },
        ],
    },
    { title: "Contact", link: "/contact", },
];
export const footerdata = [
    {
        title: "Quick Links",
        links: [
            { title2: "About Us", url: "/about" },
            { title2: "Practice Areas", url: "/services" },
            { title2: "Our Team", url: "/about" },
            { title2: "Insights", url: "/our-blog" },
            { title2: "Contact Us", url: "/contact" },
        ],
    },
    {
        title: "Practice Areas",
        links: [
            { title2: "Corporate & Commercial Law", url: "/services-details" },
            { title2: "Litigation & Dispute Resolution", url: "/services-details" },
            { title2: "Real Estate & Property Law", url: "/services-details" },
            { title2: "Banking & Financial Law", url: "/services-details" },
            { title2: "Family & Personal Status Law", url: "/services-details" },
        ],
    },
];
export const servicesliderdata = [
    { icon: SVGICONS.medical, title: "Litigation & Disputes", },
    { icon: SVGICONS.preventiv, title: "Corporate Law", columnstand: "two", },
    { icon: SVGICONS.surgical, title: "Arbitration & ADR", columnstand: "three", },
    { icon: SVGICONS.mental, title: "Real Estate Law", columnstand: "for", },
    { icon: SVGICONS.preventiv, title: "Banking & Finance", columnstand: "two", },
]
export const servicedata2 = [
    { icon: SVGICONS.consume, title: "Strategic Counsel", number: '01', },
    { icon: SVGICONS.weight, title: "Risk Mitigation", number: '02', },
    { icon: SVGICONS.health, title: "Regulatory Compliance", number: '03', },
    { icon: SVGICONS.stress, title: "Dispute Resolution", number: '04', },
]
export const portfoliodata = [
    { image: IMAGES.portfolio1, title: "Corporate Advisory", span: "Commercial Law", },
    { image: IMAGES.portfolio2, title: "Litigation Support", span: "Dispute Resolution", },
    { image: IMAGES.portfolio3, title: "Legal Consultancy", span: "Regulatory Affairs", },
]
export const teamdata = [
    { image: IMAGES.teamimg1, name: "Senior Partner", title: "Managing Partner", },
    { image: IMAGES.teamimg2, name: "Legal Counsel", title: "Corporate & Commercial", },
    { image: IMAGES.teamimg3, name: "Associate", title: "Litigation & Disputes", },
    { image: IMAGES.teamimg4, name: "Associate", title: "Family & Property Law", },
]
export const blog2 = [
    { img: IMAGES.blogtwo1, title: "Understanding UAE corporate governance requirements.", },
    { img: IMAGES.blogtwo2, title: "Key considerations for property transactions in Dubai.", },
    { img: IMAGES.blogtwo3, title: "Navigate family law matters with confidence and clarity.", },
]
export const dentaldata = [
    { icon: SVGICONS.genral, title: 'Corporate Advisory', },
    { icon: SVGICONS.comestic, title: 'Litigation Strategy', },
    { icon: SVGICONS.restorative, title: 'Contract Drafting', },
    { icon: SVGICONS.pediatric, title: 'Legal Compliance', },
]
export const dentalswiper = [
    { image: IMAGES.dentalproject1 },
    { image: IMAGES.dentalproject2 },
    { image: IMAGES.dentalproject3 },
    { image: IMAGES.dentalproject1 },
]
export const workingdata = [
    { number: '01', title: 'Initial Consultation', },
    { number: '02', title: 'Strategic Planning', },
    { number: '03', title: 'Case Execution', },
]
export const reviewslider = [
    { image: IMAGES.review, title: 'Corporate Client', },
    { image: IMAGES.reviewimg2, title: 'Individual Client', },
    { image: IMAGES.review, title: 'Corporate Client', },
    { image: IMAGES.reviewimg2, title: 'Individual Client', },
]
export const dentalblog = [
    { image: IMAGES.blogone4, title: 'Key changes in UAE commercial law you should know.', },
    { image: IMAGES.blogone5, title: 'Protecting your intellectual property rights in the UAE.', },
    { image: IMAGES.blogone6, title: 'Essential guide to real estate transactions in Dubai.', },
]
export const ourprojectdata = [
    { image: IMAGES.project1, title: 'Corporate Advisory', },
    { image: IMAGES.project2, title: 'Dispute Resolution', },
    { image: IMAGES.project3, title: 'Real Estate Law', },
    { image: IMAGES.project4, title: 'Banking & Finance', },
    { image: IMAGES.project5, title: 'Criminal Defense', },
    { image: IMAGES.project6, title: 'Family Law', },
    { image: IMAGES.project7, title: 'Immigration Law', },
    { image: IMAGES.project8, title: 'IP Protection', },
    { image: IMAGES.project9, title: 'Tax Compliance', },
    { image: IMAGES.project10, title: 'Arbitration', },
    { image: IMAGES.project11, title: 'Maritime Law', },
    { image: IMAGES.project12, title: 'Contract Drafting', },
]
export const servicedata = [
    { icon: SVGICONS.service1, title: 'Litigation & Disputes', },
    { icon: SVGICONS.service2, title: 'Arbitration & ADR', },
    { icon: SVGICONS.service3, title: 'Corporate & Commercial', },
    { icon: SVGICONS.service4, title: 'Contracts', },
    { icon: SVGICONS.service5, title: 'Banking & Finance', },
    { icon: SVGICONS.service6, title: 'Real Estate Law', },
    { icon: SVGICONS.service7, title: 'Criminal Law', },
    { icon: SVGICONS.service8, title: 'Family Law', },
    { icon: SVGICONS.service9, title: 'Immigration Law', },
]
export const brandlgodata = [
    { img: IMAGES.brandlogo1 },
    { img: IMAGES.brandlogo3 },
    { img: IMAGES.brandlogo2 },
    { img: IMAGES.brandlogo4 },
    { img: IMAGES.brandlogo6 },
    { img: IMAGES.brandlogo5 },
    { img: IMAGES.brandlogo3 },
];
export const medicaldata = [
    { img: IMAGES.project1, title: "Corporate Advisory", },
    { img: IMAGES.project2, title: "Dispute Resolution", },
    { img: IMAGES.project3, title: "Real Estate Law", },
    { img: IMAGES.project4, title: "Banking & Finance", },
    { img: IMAGES.project1, title: "Criminal Defense", },
]
export const accordiondata = [
    { key: 0, title: 'What types of legal matters does AHA Law Firm handle?', },
    { key: 1, title: 'How do I schedule a consultation with your legal team?', },
    { key: 2, title: 'Do you represent clients in both Dubai and Ajman courts?', },
    { key: 3, title: 'What are your fee structures and payment options?', },
    { key: 4, title: 'Can you assist with international legal matters and arbitration?', },
]
export const lightgallerydata2 = [
    { image: IMAGES.instagram1, },
    { image: IMAGES.instagram2, },
    { image: IMAGES.instagram3, },
]
export const lightgallerydata = [
    { image: IMAGES.instagram1, },
    { image: IMAGES.instagram2, },
    { image: IMAGES.instagram3, },
    { image: IMAGES.instagram4, },
    { image: IMAGES.instagram5, },
    { image: IMAGES.instagram6, },
]
export const tags = [
    { title: "Corporate", },
    { title: "Litigation", },
    { title: "Real Estate", },
    { title: "Arbitration", },
    { title: "Criminal", },
    { title: "Family Law", },
]
export const blogdata = [
    { image: IMAGES.blogone1, date: "12", title: 'Understanding corporate governance in the UAE.', },
    { image: IMAGES.blogone2, date: "14", title: 'Key considerations for commercial lease agreements.', },
    { image: IMAGES.blogone3, date: "16", title: 'Navigating dispute resolution mechanisms in Dubai.', },
    { image: IMAGES.blogone1, date: "12", title: 'Essential guide to UAE employment law compliance.', },
    { image: IMAGES.blogone2, date: "14", title: 'Protecting intellectual property rights in the Gulf region.', },
    { image: IMAGES.blogone3, date: "16", title: 'Real estate investment regulations for foreign nationals.', },
    { image: IMAGES.blogone1, date: "12", title: 'Updates on UAE banking and financial regulations.', },
    { image: IMAGES.blogone2, date: "14", title: 'Family law matters: custody and guardianship in the UAE.', },
    { image: IMAGES.blogone3, date: "16", title: 'Criminal defense strategies under UAE federal law.', },
]
export const marqueedata = [
    { image: IMAGES.health3, title: "Legal Excellence", },
    { image: IMAGES.health2, title: "Strategic Insight", },
    { image: IMAGES.health1, title: "Client Focused", },
    { image: IMAGES.health2, title: "UAE Expertise", },
]
export const pricingdata = [
    {
        image: IMAGES.pricingshap, title: "Consultation", price: 500, id: 0,
        submenu: [
            { title: "Initial case assessment and review.", },
            { title: "Preliminary legal advice session", },
            { title: "Overview of applicable UAE laws", },
            { title: "Recommended course of action", },
            { title: "Follow-up communication included", },
        ]
    },
    {
        image: IMAGES.pricingshap1, title: "Retainer", price: 2500, id: 1,
        submenu: [
            { title: "Ongoing legal advisory services.", },
            { title: "Priority case handling and review", },
            { title: "Monthly legal consultations included", },
            { title: "Document review and drafting", },
            { title: "Dedicated legal counsel assigned", },
        ]
    },
    {
        image: IMAGES.pricingshap, title: "Enterprise", price: 5000, id: 2,
        submenu: [
            { title: "Comprehensive corporate legal support.", },
            { title: "Unlimited consultations per month", },
            { title: "Full litigation and arbitration coverage", },
            { title: "Regulatory compliance management", },
            { title: "Dedicated partner-level counsel", },
        ]
    },
]
export const siderbarservice = [
    { title: "Litigation & Disputes", },
    { title: "Corporate & Commercial", },
    { title: "Real Estate Law", },
    { title: "Banking & Finance", },
    { title: "Criminal Defense", },
]
export const thumbdata = [
    { image: IMAGES.review1, },
    { image: IMAGES.review2, },
    { image: IMAGES.review3, },
]
export const thumbdata2 = [
    { title: "Corporate Client", },
    { title: "Individual Client", },
    { title: "Government Entity", },
]
export const chooseusdata = [
    { svg: SVGICONS.expert, title: "Expert Legal Team", },
    { svg: SVGICONS.beyond, title: "Beyond Expectations", },
]
