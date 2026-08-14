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
    { title: "Insights", link: "/our-blog" },
    { title: "Contact", link: "/contact" },
];
export const footerdata = [
    {
        title: "Quick Links",
        links: [
            { title2: "About Us", url: "/about" },
            { title2: "Practice Areas", url: "/services" },
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

export const accordiondata = [
    { key: 0, title: 'What types of legal matters does AHA Law Firm handle?', },
    { key: 1, title: 'How do I schedule a consultation with your legal team?', },
    { key: 2, title: 'Do you represent clients in both Dubai and Ajman courts?', },
    { key: 3, title: 'What are your fee structures and payment options?', },
    { key: 4, title: 'Can you assist with international legal matters and arbitration?', },
]

export const tags = [
    { title: "Corporate", },
    { title: "Litigation", },
    { title: "Real Estate", },
    { title: "Arbitration", },
    { title: "Criminal", },
    { title: "Family Law", },
]
export const siderbarservice = [
    { title: "Litigation & Disputes", },
    { title: "Corporate & Commercial", },
    { title: "Real Estate Law", },
    { title: "Banking & Finance", },
    { title: "Criminal Defense", },
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
