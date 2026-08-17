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
            { title: "Litigation & Dispute Resolution", link: "/services" },
            { title: "Arbitration & ADR", link: "/services" },
            { title: "Corporate Governance & M&A", link: "/services" },
            { title: "Capital Markets & Private Equity", link: "/services" },
            { title: "Contracts & Agreements", link: "/services" },
            { title: "Banking & Financial Law", link: "/services" },
            { title: "Tax & Compliance Advisory", link: "/services" },
            { title: "Competition & Antitrust", link: "/services" },
            { title: "Real Estate & Property Law", link: "/services" },
            { title: "Construction & Infrastructure", link: "/services" },
            { title: "Restructuring & Insolvency", link: "/services" },
            { title: "Intellectual Property (3IP)", link: "/services" },
            { title: "Maritime & Logistics Law", link: "/services" },
            { title: "Employment & Labor (MOHRE)", link: "/services" },
            { title: "Financial Crime & Investigations", link: "/services" },
            { title: "Criminal Defense & Police Matters", link: "/services" },
            { title: "Interpol Red Notice & Extradition Defense", link: "/services" },
            { title: "Legislative Drafting & Policy Advisory", link: "/services" },
            { title: "TMT & Data Privacy Compliance", link: "/services" },
            { title: "Immigration & Golden Visa Solutions", link: "/services" },
            { title: "Family & Personal Status Law", link: "/services" },
            { title: "Wills, Probate & Legacy Planning", link: "/services" },
        ],
    },
    {
        title: "Blogs & Judgements",
        link: "#",
        classChange: "navbar-dropdown menu-item-children",
        classChange2: "menu-item-has-children",
        subMenu: [
            { title: "Blogs", link: "/our-blog" },
            { title: "Judgements", link: "/judgements" },
        ],
    },
    { title: "Contact", link: "/contact" },
];
export const footerdata = [
    {
        title: "Quick Links",
        links: [
            { title2: "About Us", url: "/about" },
            { title2: "Practice Areas", url: "/services" },
            { title2: "Blogs", url: "/our-blog" },
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
    { key: 2, title: 'Do you represent clients in both Dubai and Sharjah courts?', },
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
