import { IMAGES, SVGICONS } from "./theme";

export const menudata = [
    { title: "Home", link: "/", },
    {
        title: "About Us",
        link: "#",
        classChange: "navbar-dropdown menu-item-children",
        classChange2: "menu-item-has-children",
        subMenu: [
            { title: "About Us", link: "/about" },
            { title: "Our Team", link: "/team" },
        ],
    },
    {
        title: "Practice Areas",
        link: "/services",
        classChange: "navbar-dropdown menu-item-children",
        classChange2: "menu-item-has-children",
        subMenu: [
            { title: "Litigation & Court Advocacy", link: "/practice-areas/litigation" },
            { title: "Arbitration & ADR", link: "/practice-areas/arbitration" },
            { title: "Corporate / M&A", link: "/practice-areas/corporate-mergers-acquisitions" },
            { title: "Capital Markets", link: "/practice-areas/capital-markets" },
            { title: "Commercial Law & Contracts", link: "/practice-areas/commercial-law" },
            { title: "Banking & Financial Law", link: "/practice-areas/banking-finance" },
            { title: "Corporate Tax & VAT", link: "/practice-areas/tax" },
            { title: "Competition & Antitrust", link: "/practice-areas/competition-antitrust" },
            { title: "Real Estate & Property Law", link: "/practice-areas/real-estate" },
            { title: "Construction & Infrastructure", link: "/practice-areas/construction-infrastructure" },
            { title: "Turnaround & Insolvency", link: "/practice-areas/restructuring-insolvency" },
            { title: "Intellectual Property", link: "/practice-areas/intellectual-property" },
            { title: "Shipping & Logistics Law", link: "/practice-areas/shipping-logistics" },
            { title: "Employment & Labor (MOHRE)", link: "/practice-areas/employment-labor" },
            { title: "Compliance & Investigations", link: "/practice-areas/compliance-investigations" },
            { title: "Criminal Defense & Police Matters", link: "/practice-areas/criminal-defense" },
            { title: "Interpol Red Notice Defense", link: "/practice-areas/interpol-extradition" },
            { title: "Legislative Drafting & Policy", link: "/practice-areas/legislative-drafting" },
            { title: "Digital & Data Privacy", link: "/practice-areas/digital-data-privacy" },
            { title: "Immigration & Golden Visa", link: "/practice-areas/immigration-golden-visa" },
            { title: "Family & Personal Status Law", link: "/practice-areas/family-personal-status" },
            { title: "Wills, Probate & Legacy Planning", link: "/practice-areas/wills-probate" },
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
            { title2: "Our Team", url: "/team" },
            { title2: "Practice Areas", url: "/services" },
            { title2: "Blogs", url: "/our-blog" },
            { title2: "Contact Us", url: "/contact" },
        ],
    },
    {
        title: "Practice Areas",
        links: [
            { title2: "Corporate & M&A", url: "/practice-areas/corporate-mergers-acquisitions" },
            { title2: "Litigation & Court Advocacy", url: "/practice-areas/litigation" },
            { title2: "Real Estate & Property Law", url: "/practice-areas/real-estate" },
            { title2: "Banking & Financial Law", url: "/practice-areas/banking-finance" },
            { title2: "Family & Personal Status Law", url: "/practice-areas/family-personal-status" },
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
