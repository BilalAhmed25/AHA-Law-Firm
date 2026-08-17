// Comprehensive Master Data for All AHA Law Firm Practice Areas in the UAE

export const practiceCategories = [
    {
        id: "corporate-transactional",
        title: "Corporate & Transactional",
        icon: "fa-solid fa-building",
        description: "Advising multinational corporations, family conglomerates, financial institutions, and emerging ventures across the UAE and GCC.",
        slug: "corporate-transactional"
    },
    {
        id: "disputes-resolution",
        title: "Disputes & Resolution",
        icon: "fa-solid fa-scale-balanced",
        description: "Unparalleled advocacy before UAE Federal and Local Courts, DIFC Courts, ADGM Courts, and international arbitral tribunals.",
        slug: "disputes-resolution"
    },
    {
        id: "industry-specialist",
        title: "Industry & Specialist",
        icon: "fa-solid fa-briefcase",
        description: "Sector-specific legal acumen in Real Estate, Construction, Maritime, Technology, IP, Projects, and Energy.",
        slug: "industry-specialist"
    },
    {
        id: "regulatory-advisory",
        title: "Regulatory & Advisory",
        icon: "fa-solid fa-shield-halved",
        description: "High-stakes regulatory defense, compliance audits, white-collar crime defense, private client wealth, and extradition.",
        slug: "regulatory-advisory"
    }
];

export const practicesData = [
    // ══════════════════════════════════════════════════════════════
    // GROUP 1: CORPORATE & TRANSACTIONAL
    // ══════════════════════════════════════════════════════════════
    {
        slug: "corporate-mergers-acquisitions",
        title: "Corporate / Mergers & Acquisitions",
        category: "Corporate & Transactional",
        categoryId: "corporate-transactional",
        icon: "fa-solid fa-building",
        statute: "UAE Federal Decree-Law No. 32 of 2021 on Commercial Companies",
        heroSummary: "End-to-end legal counsel on high-value domestic and cross-border M&A transactions, joint ventures, corporate restructurings, and strategic alliances in the UAE and GCC.",
        detailedOverview: "AHA Law Firm's Corporate & M&A practice delivers top-tier legal advisory for public and private acquisitions, divestitures, joint ventures, spin-offs, and cross-border investments across the United Arab Emirates and broader MENA region. Our seasoned corporate attorneys navigate complex regulatory landscapes involving the Ministry of Economy, Securities and Commodities Authority (SCA), local Economic Departments (DED/ADDED), and UAE free zones (including DIFC, ADGM, and DMCC). We ensure seamless transaction execution, robust risk mitigation, and optimal post-merger integration.",
        keyServices: [
            {
                title: "Mergers, Acquisitions & Takeovers",
                desc: "Structuring share purchases, asset purchases, mandatory/voluntary takeovers, and legal due diligence audits."
            },
            {
                title: "Joint Ventures & Strategic Alliances",
                desc: "Drafting shareholders' agreements, bespoke voting trusts, governance mechanisms, and exit arrangements."
            },
            {
                title: "Corporate Governance & Compliance",
                desc: "Advising boards of directors, ESG compliance policies, fiduciary duties, and ultimate beneficial ownership (UBO) filings."
            },
            {
                title: "Cross-Border Transaction Structuring",
                desc: "Multi-jurisdictional tax-efficient holding structures, regulatory clearances, and foreign direct investment (FDI) approvals."
            },
            {
                title: "Legal Due Diligence & Risk Audits",
                desc: "Comprehensive bilingual legal audits assessing material contracts, regulatory liabilities, IP ownership, and litigation risks."
            },
            {
                title: "Post-Merger Integration & Restructuring",
                desc: "Harmonizing operational contracts, employment structures, entity consolidations, and brand transitions post-closing."
            }
        ],
        regulatoryFramework: "Governed principally by UAE Federal Decree-Law No. 32 of 2021 (Commercial Companies Law), the UAE Foreign Direct Investment framework, and SCA Public M&A Regulations.",
        strategicAdvantages: [
            "Extensive experience in high-value cross-border M&A exceeding AED 1B+",
            "Bilingual transaction documentation in English and legally binding Arabic",
            "Direct liaison with UAE Ministry of Economy and free zone regulatory authorities"
        ],
        faqList: [
            {
                q: "Can foreign investors own 100% of an onshore UAE company in an M&A deal?",
                a: "Yes, following the enactment of UAE Federal Decree-Law No. 32 of 2021, 100% foreign ownership is permitted for most commercial and industrial activities without requiring a local Emirati partner."
            },
            {
                q: "What regulatory approvals are needed for an M&A deal in the UAE?",
                a: "Depending on the sector and size, approvals may be required from the Ministry of Economy, Competition Department, Securities and Commodities Authority (SCA), Central Bank (CBUAE), or relevant Free Zone authorities."
            }
        ],
        relatedSlugs: ["capital-markets", "private-equity", "corporate-structuring", "banking-finance"]
    },
    {
        slug: "capital-markets",
        title: "Capital Markets",
        category: "Corporate & Transactional",
        categoryId: "corporate-transactional",
        icon: "fa-solid fa-chart-pie",
        statute: "SCA Regulations & UAE Federal Law No. 4 of 2000",
        heroSummary: "Comprehensive advisory on initial public offerings (IPOs), secondary listings, debt securities, Sukuk issuances, and regulatory compliance on DFM, ADX, and Nasdaq Dubai.",
        detailedOverview: "We represent issuers, underwriters, and institutional investors in equity capital markets (ECM) and debt capital markets (DCM) across UAE stock exchanges (Dubai Financial Market, Abu Dhabi Securities Exchange, and Nasdaq Dubai). Our attorneys assist with prospectus drafting, SCA regulatory approvals, listing governance, market abuse regulations, and bond/Sukuk structured finance.",
        keyServices: [
            {
                title: "Initial Public Offerings (IPOs) & Listings",
                desc: "Preparation of IPO prospectuses, underwriting agreements, exchange pre-clearance, and cornerstone investor arrangements."
            },
            {
                title: "Sukuk & Debt Securities Issuance",
                desc: "Structuring Sharia-compliant Sukuk, conventional corporate bonds, commercial paper, and medium-term note programs."
            },
            {
                title: "Continuing Listing & Disclosure Compliance",
                desc: "Guidance on insider trading policies, material disclosures, financial reporting timelines, and SCA compliance."
            },
            {
                title: "Delisting & Public-to-Private Transactions",
                desc: "Strategic execution of voluntary and mandatory delistings, minority shareholder squeeze-outs, and share buybacks."
            },
            {
                title: "Securities Custody & Depository Advisory",
                desc: "Advising on central depository rules, clearing settlement arrangements, and institutional investor custody mandates."
            },
            {
                title: "Market Conduct & SCA Enforcement Defense",
                desc: "Defending listed entities and brokers against market manipulation, insider trading investigations, and SCA administrative penalties."
            }
        ],
        regulatoryFramework: "Supervised by the Securities and Commodities Authority (SCA), Dubai Financial Services Authority (DFSA), and Financial Services Regulatory Authority (FSRA).",
        strategicAdvantages: [
            "Deep understanding of DFM, ADX, and DIFC capital market listing frameworks",
            "Sharia-compliant financial instrument structuring expertise",
            "Close coordination with leading investment banks and underwriters"
        ],
        faqList: [
            {
                q: "What is the minimum public float requirement for an onshore UAE IPO?",
                a: "Under current SCA regulations, the standard minimum public float requirement is generally 20% to 30%, subject to specific exemptions and approval by the SCA."
            }
        ],
        relatedSlugs: ["corporate-mergers-acquisitions", "private-equity", "banking-finance", "tax"]
    },
    {
        slug: "private-equity",
        title: "Private Equity",
        category: "Corporate & Transactional",
        categoryId: "corporate-transactional",
        icon: "fa-solid fa-chart-line",
        statute: "DFSA, FSRA & SCA Collective Investment Funds Regulations",
        heroSummary: "Strategic legal counsel for private equity sponsors, sovereign wealth funds, and institutional investors on fund formation, leveraged buyouts, growth equity, and portfolio divestments.",
        detailedOverview: "Our Private Equity practice guides fund managers, sovereign funds, family offices, and institutional investors through every phase of the investment lifecycle. We structure onshore and offshore funds in the DIFC, ADGM, Cayman Islands, and UAE onshore, negotiate complex LP/GP partnership agreements, and execute leveraged buyouts (LBOs), management buy-ins (MBIs), and secondary sales.",
        keyServices: [
            {
                title: "Fund Formation & Structuring",
                desc: "Establishing private equity funds, qualifying investor funds (QIFs), and co-investment vehicles in DIFC, ADGM, and onshore UAE."
            },
            {
                title: "Leveraged Buyouts & Growth Investments",
                desc: "Drafting investment agreements, warrants, senior/subordinated debt packaging, and minority shareholder protections."
            },
            {
                title: "Portfolio Management & Bolt-On Acquisitions",
                desc: "Ongoing corporate counsel, add-on acquisitions, refinancing, and management incentive plans."
            },
            {
                title: "Exit Strategies & Divestitures",
                desc: "Executing trade sales, dual-track IPO exits, secondary buyouts, and recapitalizations."
            },
            {
                title: "LP / GP Governance & Side Letters",
                desc: "Negotiating institutional LP side letters, carried interest waterfalls, advisory board charters, and key-person triggers."
            },
            {
                title: "Private Credit & Mezzanine Financing",
                desc: "Structuring subordinated debt, unitranche loan facilities, warrant attachments, and equity kickers for growth companies."
            }
        ],
        regulatoryFramework: "Governed by DFSA (DIFC), FSRA (ADGM), SCA fund rules, and international cross-border investment treaties.",
        strategicAdvantages: [
            "Seamless multi-jurisdictional fund structuring (DIFC / ADGM / Offshore)",
            "Proven track record in structuring growth capital deals across MENA",
            "Bespoke GP carry and waterfall distribution documentation"
        ],
        faqList: [
            {
                q: "Which jurisdiction in the UAE is best suited for establishing a private equity fund?",
                a: "DIFC and ADGM are the preferred jurisdictions due to their English Common Law frameworks, specialized financial regulators (DFSA and FSRA), and tax-efficient fund vehicles."
            }
        ],
        relatedSlugs: ["venture-capital", "corporate-mergers-acquisitions", "capital-markets", "corporate-structuring"]
    },
    {
        slug: "venture-capital",
        title: "Venture Capital & Emerging Companies",
        category: "Corporate & Transactional",
        categoryId: "corporate-transactional",
        icon: "fa-solid fa-rocket",
        statute: "UAE Federal Decree-Law No. 32 of 2021 & ADGM/DIFC Foundations/SPV Regulations",
        heroSummary: "Legal advisory for high-growth startups, angel investors, and VC funds—from seed funding and SAFE notes to Series A-C rounds and unicorn exits.",
        detailedOverview: "AHA Law Firm is at the forefront of the Middle East's booming tech ecosystem. We support tech founders, early-stage startups, accelerator programs, and prominent venture capital funds. We specialize in cross-border holding company setups (e.g., ADGM/DIFC HoldCos with onshore operating subsidiaries), SAFE agreements, convertible loan notes, founder vesting, ESOP schemes, and institutional funding rounds.",
        keyServices: [
            {
                title: "Seed & Early Stage Financing",
                desc: "Drafting SAFE instruments, KISS agreements, convertible notes, and bridge loan facilities."
            },
            {
                title: "Priced Equity Rounds (Series Seed, A, B, C)",
                desc: "Negotiating term sheets, subscription agreements, investor rights agreements, and liquidation preferences."
            },
            {
                title: "Employee Stock Option Plans (ESOP)",
                desc: "Structuring tax-efficient phantom shares, restricted stock units (RSUs), and employee option pools under ADGM/DIFC regulations."
            },
            {
                title: "Founder Governance & Vesting",
                desc: "Founder share restriction agreements, reverse vesting, key-man protections, and intellectual property assignments."
            },
            {
                title: "Dual-Class Share Structures",
                desc: "Creating super-voting shares, non-voting growth shares, and preferred liquidation rights under common law regimes."
            },
            {
                title: "Cross-Border Flip Transactions",
                desc: "Executing Delaware/Cayman/ADGM corporate flips to consolidate intellectual property and prepare for global VC syndicates."
            }
        ],
        regulatoryFramework: "ADGM Companies Regulations, DIFC Companies Law, and UAE Onshore Tech licensing regulations.",
        strategicAdvantages: [
            "Deep ecosystem connections with regional accelerators and VCs",
            "Cost-effective startup packages with rapid turnaround times",
            "Expertise in bridging US/UK standard VC terms with UAE law"
        ],
        faqList: [
            {
                q: "How should a UAE startup structure its holding entity for VC funding?",
                a: "Most venture-backed startups in the UAE establish an ADGM or DIFC holding company with an onshore operating LLC or Free Zone entity to facilitate international investment and common law share classes."
            }
        ],
        relatedSlugs: ["private-equity", "intellectual-property", "digital-data-privacy", "corporate-structuring"]
    },
    {
        slug: "corporate-services",
        title: "Corporate Services",
        category: "Corporate & Transactional",
        categoryId: "corporate-transactional",
        icon: "fa-solid fa-briefcase",
        statute: "UAE Cabinet Decision No. 109 of 2020 on Ultimate Beneficial Ownership",
        heroSummary: "Full-suite corporate secretarial support, mainland & free zone entity incorporation, annual compliance filings, and registered agent services.",
        detailedOverview: "Our Corporate Services group provides seamless corporate housekeeping, directorship support, UBO registers maintenance, Nominee arrangements, Economic Substance (ESR) notifications, and annual license renewals. We act as registered agents and corporate secretaries for domestic companies, multinational branches, and special purpose vehicles (SPVs).",
        keyServices: [
            {
                title: "Entity Formation & Licensing",
                desc: "Incorporating Mainland LLCs, Free Zone entities (DMCC, DAFZA, JAFZA), and offshore branches."
            },
            {
                title: "Corporate Secretarial & Board Support",
                desc: "Drafting board resolutions, AGM/EGM minutes, maintaining statutory registers, and filing annual returns."
            },
            {
                title: "UBO & AML Compliance Filings",
                desc: "Maintaining ultimate beneficial ownership registers and ensuring compliance with UAE AML/CFT regulations."
            },
            {
                title: "Economic Substance Regulation (ESR)",
                desc: "Conducting ESR assessments, filing annual notifications, and preparing substance compliance reports."
            },
            {
                title: "Nominee & Registered Office Facilities",
                desc: "Providing professional registered office addresses, authorized signatory facilities, and statutory document custody."
            },
            {
                title: "Commercial License Restructuring & Amendments",
                desc: "Handling trade license renewals, capital increases, share transfers, and activity additions across all Emirates."
            }
        ],
        regulatoryFramework: "UAE Commercial Companies Law, Cabinet Decision No. 57 of 2020 (ESR), and Cabinet Decision No. 109 of 2020 (UBO).",
        strategicAdvantages: [
            "Dedicated corporate secretarial desk ensuring zero late-filing penalties",
            "Full integration with UAE digital economic department systems",
            "Turnkey solutions for regional branch office expansions"
        ],
        faqList: [
            {
                q: "What are the penalties for failing to maintain a UBO register in the UAE?",
                a: "Non-compliance with UBO regulations can result in administrative fines up to AED 100,000, suspension of commercial license, and restrictions on board powers."
            }
        ],
        relatedSlugs: ["corporate-structuring", "regulatory-compliance", "tax", "commercial-law"]
    },
    {
        slug: "corporate-structuring",
        title: "Corporate Structuring",
        category: "Corporate & Transactional",
        categoryId: "corporate-transactional",
        icon: "fa-solid fa-sitemap",
        statute: "ADGM & DIFC SPV Regulations / UAE Federal Decree-Law No. 32 of 2021",
        heroSummary: "Designing resilient corporate architectures, holding companies, Special Purpose Vehicles (SPVs), and cross-border group reorganizations.",
        detailedOverview: "We craft sophisticated corporate architectures for family businesses, multinational groups, and real estate investors. Our team structures tax-efficient holding vehicles in ADGM, DIFC, and Ras Al Khaimah (RAK ICC), establishes bankruptcy-remote SPVs for asset holding, and executes complex intra-group asset transfers and capital reorganizations.",
        keyServices: [
            {
                title: "Special Purpose Vehicles (SPVs) & HoldCos",
                desc: "Establishing ADGM/DIFC SPVs for asset ring-fencing, property holding, and investor consolidation."
            },
            {
                title: "Cross-Border Group Reorganizations",
                desc: "Intra-group mergers, asset carve-outs, debt-to-equity conversions, and share-for-share exchanges."
            },
            {
                title: "Re-domiciliation & Migration of Companies",
                desc: "Transferring foreign offshore companies (BVI, Cayman, Seychelles) into ADGM, DIFC, or RAK ICC without dissolving legal personality."
            },
            {
                title: "Ring-Fencing & Asset Protection",
                desc: "Insulating high-value commercial assets and operating risks through bespoke tiered holding frameworks."
            },
            {
                title: "Holding Company Tax Alignment",
                desc: "Harmonizing corporate ownership chains with UAE 9% Corporate Tax participation exemption criteria."
            },
            {
                title: "Joint Venture Holding Vehicles",
                desc: "Setting up neutral offshore or financial center holding companies for multi-national joint venture partners."
            }
        ],
        regulatoryFramework: "ADGM SPV Regulations, DIFC Prescribed Companies Regulations, and UAE Federal Corporate Tax Law.",
        strategicAdvantages: [
            "Deep experience in migrating offshore entities into the UAE",
            "Optimal coordination between Corporate Tax planning and legal structures",
            "Bespoke protection against operational and litigation liability"
        ],
        faqList: [
            {
                q: "Can a foreign company re-domicile into the UAE without losing its existing contracts?",
                a: "Yes. Re-domiciliation to ADGM, DIFC, or RAK ICC preserves the company's existing legal identity, assets, and contractual rights without requiring liquidation."
            }
        ],
        relatedSlugs: ["corporate-services", "private-equity", "family-business-wealth", "tax"]
    },
    {
        slug: "banking-finance",
        title: "Banking & Finance",
        category: "Corporate & Transactional",
        categoryId: "corporate-transactional",
        icon: "fa-solid fa-landmark",
        statute: "UAE Central Bank (CBUAE) Directives & Federal Law No. 14 of 2018",
        heroSummary: "Advising lenders and borrowers on syndicated facilities, Islamic finance, project finance, trade finance, and fintech regulatory compliance.",
        detailedOverview: "Our Banking & Finance group represents domestic and international commercial banks, non-banking financial institutions, private credit funds, and corporate borrowers. We structure syndicated loan facilities, asset-backed lending, project finance, Sharia-compliant instruments (Murabaha, Ijara, Istisna), and provide counsel on Central Bank of the UAE regulatory frameworks and Fintech sandboxes.",
        keyServices: [
            {
                title: "Syndicated & Bilateral Lending",
                desc: "Drafting LMA-standard credit agreements, intercreditor deeds, security packages, and perfection of UAE commercial mortgages."
            },
            {
                title: "Islamic Banking & Sharia Financing",
                desc: "Structuring Murabaha, Mudaraba, Musharaka, and Ijara transactions approved by Sharia supervisory boards."
            },
            {
                title: "Project & Infrastructure Finance",
                desc: "Structuring non-recourse project finance, sponsor guarantees, direct agreements, and concession lending."
            },
            {
                title: "Fintech, Digital Assets & Payments",
                desc: "Advising on CBUAE Stored Value Facility (SVF) regulations, payment services providers (PSP), and VARA crypto licensing."
            },
            {
                title: "Security Perfection & Movables Registry",
                desc: "Registering commercial pledges and receivables collateral with the Emirates Integrated Registries Company (EIRC)."
            },
            {
                title: "Trade Finance & Letters of Credit",
                desc: "Advising on UCP 600 standby letters of credit, bank guarantees, factoring, and discounting disputes."
            }
        ],
        regulatoryFramework: "CBUAE Banking Directives, Federal Law No. 14 of 2018 (Central Bank & Organization of Financial Institutions), and DFSA/FSRA rules.",
        strategicAdvantages: [
            "Extensive experience with Loan Market Association (LMA) documentation",
            "Pioneering expertise in UAE Central Bank FinTech and payment regulations",
            "Full enforcement capabilities before UAE execution courts"
        ],
        faqList: [
            {
                q: "How is a commercial mortgage or pledge perfected under UAE law?",
                a: "Commercial pledges and security interests must be registered with the Emirates Integrated Registries Company (EIRC) under the UAE Movables Security Law or local land departments for real estate."
            }
        ],
        relatedSlugs: ["capital-markets", "restructuring-insolvency", "corporate-mergers-acquisitions", "tax"]
    },
    {
        slug: "insurance",
        title: "Insurance Law",
        category: "Corporate & Transactional",
        categoryId: "corporate-transactional",
        icon: "fa-solid fa-shield-heart",
        statute: "CBUAE Insurance Directives & UAE Federal Decree-Law No. 48 of 2023",
        heroSummary: "Advisory on insurance regulations, policy drafting, coverage disputes, reinsurance claims, and high-stakes subrogation proceedings.",
        detailedOverview: "AHA Law Firm represents leading insurance companies, reinsurers, brokers, and insured corporate entities. We handle high-value coverage disputes, professional indemnity claims, maritime and aviation casualties, construction all-risks (CAR) claims, D&O liability, and regulatory compliance before the Central Bank of the UAE Insurance Supervision department.",
        keyServices: [
            {
                title: "Coverage Disputes & Claim Advocacy",
                desc: "Litigating and arbitrating complex coverage denials, business interruption, and casualty claims."
            },
            {
                title: "Regulatory Compliance & Licensing",
                desc: "Advising insurers and brokers on CBUAE statutory solvency requirements, licensing, and corporate governance."
            },
            {
                title: "Reinsurance & Subrogation Claims",
                desc: "Enforcing subrogation recoveries and cross-border reinsurance treaty dispute resolution."
            },
            {
                title: "D&O and Professional Indemnity",
                desc: "Defending directors, auditors, architects, and medical practitioners in liability claims."
            },
            {
                title: "Insurance Dispute Settlement Committee (IDSC)",
                desc: "Representing policyholders and insurers in mandatory preliminary conciliation before the IDSC."
            },
            {
                title: "Policy Wording & Product Structuring",
                desc: "Drafting bilingual insurance policies, exclusions, cyber risk endorsements, and parametric insurance contracts."
            }
        ],
        regulatoryFramework: "UAE Federal Decree-Law No. 48 of 2023 Regulating Insurance Activities and CBUAE Insurance Regulations.",
        strategicAdvantages: [
            "Deep trial experience before the UAE Insurance Dispute Settlement Committees (IDSC)",
            "Specialized technical understanding of international reinsurance treaties",
            "Rapid crisis management for industrial and maritime casualty claims"
        ],
        faqList: [
            {
                q: "Is it mandatory to submit insurance disputes to the Insurance Dispute Committee before court?",
                a: "Yes. Claims against insurance companies in the UAE must first be submitted to the Insurance Dispute Settlement Committee (IDSC) prior to filing a court case."
            }
        ],
        relatedSlugs: ["litigation", "shipping-logistics", "construction-infrastructure", "banking-finance"]
    },
    {
        slug: "tax",
        title: "Corporate Tax & VAT",
        category: "Corporate & Transactional",
        categoryId: "corporate-transactional",
        icon: "fa-solid fa-receipt",
        statute: "UAE Federal Decree-Law No. 47 of 2022 on Taxation of Corporations and Businesses",
        heroSummary: "Strategic legal advice on the 9% UAE Corporate Tax, Qualifying Free Zone Person (QFZP) status, VAT compliance, Transfer Pricing, and FTA disputes.",
        detailedOverview: "Our Corporate Tax & VAT group guides businesses through the transformative UAE tax landscape. We provide legal opinions on Corporate Tax scope, Qualifying Free Zone Person (0% rate) eligibility, Transfer Pricing documentation, Value Added Tax (VAT) assessments, Tax Residency Certificates (TRC), and represent clients before the Federal Tax Authority (FTA) and Tax Dispute Resolution Committees (TDRC).",
        keyServices: [
            {
                title: "Corporate Tax Planning & QFZP Advisory",
                desc: "Structuring business operations to qualify for the 0% Free Zone Corporate Tax regime and meet adequate substance tests."
            },
            {
                title: "Transfer Pricing Compliance & Documentation",
                desc: "Drafting intercompany service agreements, master/local files, and ensuring arm's length principle compliance."
            },
            {
                title: "VAT Advisory & FTA Audit Defense",
                desc: "Assisting with complex VAT exemptions, voluntary disclosures, and defending against FTA penalty assessments."
            },
            {
                title: "Tax Dispute Resolution Committee (TDRC) Litigation",
                desc: "Appealing adverse FTA administrative decisions before TDRCs and the UAE Federal Courts."
            },
            {
                title: "Tax Residency Certificates (TRC)",
                desc: "Securing corporate and individual TRCs to leverage bilateral Double Tax Avoidance Agreements (DTAA)."
            },
            {
                title: "Excise Tax & Customs Duty Optimization",
                desc: "Advising on designated zone excise classifications, customs tariff valuation, and bonded warehouse compliance."
            }
        ],
        regulatoryFramework: "Federal Decree-Law No. 47 of 2022 (Corporate Tax), Federal Decree-Law No. 8 of 2017 (VAT), and Tax Procedures Law.",
        strategicAdvantages: [
            "Integrated legal and tax advisory eliminating compliance blindspots",
            "Direct litigation experience before the Tax Dispute Resolution Committee",
            "Clear roadmap for Free Zone companies seeking 0% corporate tax exemptions"
        ],
        faqList: [
            {
                q: "What conditions must a Free Zone company meet to enjoy 0% Corporate Tax in the UAE?",
                a: "The company must be a Qualifying Free Zone Person (QFZP) deriving Qualifying Income, maintaining adequate substance in the UAE, complying with Transfer Pricing rules, and not electing to be subject to the standard 9% tax."
            }
        ],
        relatedSlugs: ["corporate-mergers-acquisitions", "corporate-structuring", "commercial-law", "regulatory-compliance"]
    },

    // ══════════════════════════════════════════════════════════════
    // GROUP 2: DISPUTES & RESOLUTION
    // ══════════════════════════════════════════════════════════════
    {
        slug: "arbitration",
        title: "Arbitration & ADR",
        category: "Disputes & Resolution",
        categoryId: "disputes-resolution",
        icon: "fa-solid fa-scale-balanced",
        statute: "UAE Federal Law No. 6 of 2018 on Arbitration & New York Convention 1958",
        heroSummary: "Premier representation in domestic and international arbitration proceedings under DIAC, ICC, LCIA, SIAC, DIFC-LCIA, and UNCITRAL rules.",
        detailedOverview: "AHA Law Firm is renowned as one of the UAE's premier arbitration practices. Our multilingual arbitration specialists act as counsel and arbitrators in high-stakes construction, commercial, energy, and shareholder disputes. We handle emergency arbitrator applications, interim measure injunctions, arbitral hearings, and the enforcement or annulment of arbitral awards across UAE Federal Courts, DIFC Courts, and global jurisdictions under the New York Convention.",
        keyServices: [
            {
                title: "Arbitral Tribunal Representation",
                desc: "Comprehensive representation in proceedings under DIAC, ICC, LCIA, SIAC, and ad-hoc UNCITRAL frameworks."
            },
            {
                title: "Emergency Arbitrator & Interim Measures",
                desc: "Securing urgent preservative attachment orders, asset freezes, and interim injunctions."
            },
            {
                title: "Enforcement of Arbitral Awards",
                desc: "Executing domestic and foreign arbitral awards under the New York Convention and UAE Civil Procedure Code."
            },
            {
                title: "Annulment & Challenge Proceedings",
                desc: "Defending or initiating award nullification claims on statutory due process and public policy grounds."
            },
            {
                title: "Arbitration Clause Drafting & Seat Selection",
                desc: "Formulating pathological-proof multi-tier dispute clauses, seat choices (DIFC, ADGM, Onshore), and rules."
            },
            {
                title: "Third-Party Litigation Funding Advisory",
                desc: "Structuring non-recourse third-party funding packages and after-the-event (ATE) cost insurance for complex claims."
            }
        ],
        regulatoryFramework: "UAE Federal Law No. 6 of 2018 (Arbitration Law), Dubai International Arbitration Centre (DIAC) Rules 2022, and 1958 New York Convention.",
        strategicAdvantages: [
            "Seamless dual capability before UAE civil law courts and common law arbitral tribunals",
            "100% track record in successful arbitral award enforcement across the UAE",
            "Specialized sector expertise in major infrastructure, energy, and corporate joint venture disputes"
        ],
        faqList: [
            {
                q: "How long does it take to ratify and enforce an arbitral award in the UAE?",
                a: "Under Federal Law No. 6 of 2018, the UAE Court of Appeal is required to decide on the ratification and enforcement of an arbitral award within 60 days of the application date."
            },
            {
                q: "Can a foreign arbitral award be enforced against UAE assets?",
                a: "Yes. As a signatory to the 1958 New York Convention, the UAE enforces foreign awards without re-examining the merits of the dispute, subject to standard treaty reciprocity and public order checks."
            }
        ],
        relatedSlugs: ["litigation", "dispute-resolution", "international-litigation", "mediation"]
    },
    {
        slug: "litigation",
        title: "Litigation & Court Advocacy",
        category: "Disputes & Resolution",
        categoryId: "disputes-resolution",
        icon: "fa-solid fa-gavel",
        statute: "UAE Federal Decree-Law No. 42 of 2022 on Civil Procedure Law",
        heroSummary: "Full rights of audience before all UAE Courts: Courts of First Instance, Courts of Appeal, Courts of Cassation, and the UAE Federal Supreme Court.",
        detailedOverview: "With seasoned licensed Emirati litigators, AHA Law Firm commands full rights of audience before Dubai Courts, Abu Dhabi Judicial Department, Sharjah Courts, the Federal Supreme Court, and the English-language DIFC and ADGM Courts. We represent major corporations, banks, and high-profile individuals in commercial breach of contract, property claims, shareholder actions, tortious liability, and complex debt recovery.",
        keyServices: [
            {
                title: "Commercial & Civil Court Litigation",
                desc: "Handling high-stakes litigation across all court tiers from First Instance through the Court of Cassation."
            },
            {
                title: "Precautionary Asset Attachment & Freezes",
                desc: "Obtaining ex-parte urgent court orders freezing bank accounts, seizing corporate shares, and impounding real estate assets."
            },
            {
                title: "Judgment Execution & Asset Recovery",
                desc: "Aggressive execution proceedings, commercial auctions, travel bans against debtors, and tracing hidden assets."
            },
            {
                title: "DIFC & ADGM Common Law Courts Litigation",
                desc: "Representation in international commercial disputes before DIFC and ADGM Court registries and Courts of Appeal."
            },
            {
                title: "Supreme Court Appeals & Cassation Petitions",
                desc: "Drafting technical legal appeals to the Federal Supreme Court and Dubai/Abu Dhabi Courts of Cassation."
            },
            {
                title: "Summary Judgments & Payment Orders",
                desc: "Accelerating uncontested commercial debt recoveries through rapid statutory Payment Order decrees."
            }
        ],
        regulatoryFramework: "UAE Civil Procedure Law (Federal Decree-Law No. 42 of 2022), Federal Law No. 5 of 1985 (Civil Code), and DIFC Court Rules.",
        strategicAdvantages: [
            "Senior Emirati advocates with over two decades of courtroom success",
            "Rapid execution of precautionary attachment orders within 24–48 hours",
            "Comprehensive bilingual Arabic/English litigation support"
        ],
        faqList: [
            {
                q: "Can foreign lawyers appear before UAE onshore courts?",
                a: "No, only licensed UAE national lawyers have rights of audience before UAE onshore courts. AHA Law Firm's internal team includes senior licensed Emirati advocates who represent our clients directly."
            }
        ],
        relatedSlugs: ["arbitration", "dispute-resolution", "international-litigation", "restructuring-insolvency"]
    },
    {
        slug: "dispute-resolution",
        title: "Dispute Resolution",
        category: "Disputes & Resolution",
        categoryId: "disputes-resolution",
        icon: "fa-solid fa-shield-halved",
        statute: "UAE Federal Civil & Commercial Dispute Resolution Procedures",
        heroSummary: "Strategic conflict prevention, early case assessment, settlement negotiations, and dispute board advocacy to protect business reputation and capital.",
        detailedOverview: "Not every dispute belongs in a protracted courtroom battle. Our Dispute Resolution team provides pragmatic, commercially aligned strategies to resolve complex business conflicts at the earliest possible stage. We specialize in early risk appraisals, pre-action mediation protocols, multi-tiered dispute escalation clauses, and confidential executive settlements.",
        keyServices: [
            {
                title: "Early Case Assessment & Strategy",
                desc: "Evaluating evidence, predicting judicial outcomes, and calculating exposure to formulate optimal litigation tactics."
            },
            {
                title: "Pre-Litigation Settlement Negotiations",
                desc: "Conducting without-prejudice negotiations and drafting legally enforceable settlement agreements."
            },
            {
                title: "Dispute Adjudication Boards (DAB)",
                desc: "Representing principals and contractors in construction dispute review boards and expert determinations."
            },
            {
                title: "Reputation & Crisis Management",
                desc: "Protecting corporate standing during contentious investigations, regulatory enforcement, and stakeholder disagreements."
            },
            {
                title: "Expert Determination & Technical Appraisals",
                desc: "Selecting and representing clients before independent technical, quantum, and forensic financial experts."
            },
            {
                title: "Multi-Tiered Dispute Escalation Management",
                desc: "Enforcing contractual cool-off periods, executive negotiations, and escalation timetables before formal actions."
            }
        ],
        regulatoryFramework: "UAE Civil Transactions Law, Commercial Transactions Law, and specialized conciliation frameworks.",
        strategicAdvantages: [
            "Commercial focus aimed at minimizing legal expenses and business disruption",
            "Enforceable settlement agreements authenticated by UAE courts and notaries",
            "Confidentiality safeguards preserving commercial goodwill"
        ],
        faqList: [
            {
                q: "Can a settlement agreement reached in dispute resolution be directly enforced like a court judgment?",
                a: "Yes, once authenticated before the Center for Amicable Settlement of Disputes or notarized before a UAE Notary Public, a settlement agreement acquires the status of an execution writ."
            }
        ],
        relatedSlugs: ["litigation", "arbitration", "mediation", "commercial-law"]
    },
    {
        slug: "international-litigation",
        title: "International Litigation",
        category: "Disputes & Resolution",
        categoryId: "disputes-resolution",
        icon: "fa-solid fa-globe",
        statute: "Riyadh Arab Convention & GCC Convention for the Execution of Judgments",
        heroSummary: "Handling cross-border jurisdictional battles, foreign judgment enforcement, international letters rogatory, and cross-border asset tracing.",
        detailedOverview: "We represent international corporates and high-net-worth individuals in complex cross-border litigation spanning multiple legal regimes. We coordinate multi-jurisdictional defense strategies, obtain injunctions against parallel foreign proceedings, enforce foreign judgments under UAE bilateral treaties and the Riyadh Convention, and execute international letters of request for taking evidence.",
        keyServices: [
            {
                title: "Enforcement of Foreign Judgments in the UAE",
                desc: "Filing direct enforcement petitions under Article 85 of the UAE Civil Procedure Law and bilateral judicial treaties."
            },
            {
                title: "Cross-Border Asset Tracing & Freezes",
                desc: "Deploying worldwide freezing orders, Norwich Pharmacal discovery, and coordinated asset recovery across offshore centers."
            },
            {
                title: "Conflict of Laws & Jurisdictional Challenges",
                desc: "Challenging improper venue, forum non conveniens, and enforcing exclusive jurisdiction clauses."
            },
            {
                title: "Service of Process & Letters Rogatory",
                desc: "Handling judicial notifications under Hague Service Convention and diplomatic consular channels."
            },
            {
                title: "Anti-Suit Injunctions & Parallel Proceedings",
                desc: "Securing anti-suit orders from DIFC/ADGM courts to restrain parties from pursuing wrongful parallel overseas claims."
            },
            {
                title: "Cross-Border Insolvency & Asset Repatriation",
                desc: "Recognizing foreign bankruptcy orders and repatriating debtor assets located in the UAE to overseas estates."
            }
        ],
        regulatoryFramework: "UAE Civil Procedure Law, Hague Conventions, Riyadh Arab Agreement for Judicial Cooperation, and bilateral judicial treaties with UK, France, India, China.",
        strategicAdvantages: [
            "Extensive global network of correspondent counsel across Europe, Asia, and the Americas",
            "Successful track record in enforcing UK High Court and French commercial judgments in the UAE",
            "Deep understanding of DIFC 'conduit jurisdiction' jurisprudence"
        ],
        faqList: [
            {
                q: "Can a foreign court judgment (e.g. from the UK or US) be enforced directly in the UAE?",
                a: "Yes, under the updated UAE Civil Procedure Law and following the UAE Ministry of Justice's directive on reciprocity with the UK and other jurisdictions, foreign judgments can be directly enforced provided standard conditions of jurisdiction and due process are met."
            }
        ],
        relatedSlugs: ["litigation", "arbitration", "interpol-extradition", "dispute-resolution"]
    },
    {
        slug: "mediation",
        title: "Commercial Mediation",
        category: "Disputes & Resolution",
        categoryId: "disputes-resolution",
        icon: "fa-solid fa-handshake-angle",
        statute: "UAE Federal Law No. 6 of 2021 on Mediation for Civil & Commercial Disputes",
        heroSummary: "Cost-effective, confidential, and binding mediation services before the Centre for Amicable Settlement of Disputes and private accredited mediators.",
        detailedOverview: "Commercial mediation offers a rapid, confidential alternative to costly litigation. Under UAE Federal Law No. 6 of 2021, mediation agreements signed through authorized mediation centers possess the same legal force as final court judgments. Our accredited mediators and counsel assist disputing parties in structuring win-win commercial solutions that preserve long-term business partnerships.",
        keyServices: [
            {
                title: "Centre for Amicable Settlement of Disputes",
                desc: "Representing parties in mandatory and voluntary conciliation sessions before Dubai and Abu Dhabi court settlement centers."
            },
            {
                title: "Private Commercial Mediation",
                desc: "Conducting independent mediator-led sessions for shareholder, joint venture, and supplier conflicts."
            },
            {
                title: "Mediation-Arbitration (Med-Arb) Structuring",
                desc: "Drafting multi-tier conflict resolution clauses combining structured mediation with backstop arbitration."
            },
            {
                title: "Enforceable Settlement Drafting",
                desc: "Drafting settlement deeds that receive judicial execution stamps (Sanad Tanfeethi)."
            },
            {
                title: "Singapore Convention Cross-Border Enforcement",
                desc: "Enforcing mediated international settlement agreements under the Singapore Convention framework across signatories."
            },
            {
                title: "Shareholder & Boardroom Deadlock Mediation",
                desc: "Facilitating confidential founder/partner mediation to resolve equity deadlocks without corporate liquidation."
            }
        ],
        regulatoryFramework: "UAE Federal Law No. 6 of 2021 on Mediation for the Settlement of Civil and Commercial Disputes and Singapore Convention on Mediation.",
        strategicAdvantages: [
            "Substantially lower legal costs compared to court litigation or arbitration",
            "Resolution timelines typically accomplished within 15–30 days",
            "Complete confidentiality safeguarding trade secrets and business relationships"
        ],
        faqList: [
            {
                q: "Is mediation mandatory for certain lawsuits in Dubai Courts?",
                a: "Yes. In Dubai, disputes involving specified claim values, division of common property, and certain debt claims must first be referred to the Centre for Amicable Settlement of Disputes before court litigation can proceed."
            }
        ],
        relatedSlugs: ["dispute-resolution", "arbitration", "litigation", "commercial-law"]
    },
    {
        slug: "restructuring-insolvency",
        title: "Turnaround, Restructuring & Insolvency",
        category: "Disputes & Resolution",
        categoryId: "disputes-resolution",
        icon: "fa-solid fa-vault",
        statute: "UAE Federal Decree-Law No. 51 of 2023 on Bankruptcy",
        heroSummary: "Guiding distressed companies, boards of directors, and financial creditors through debt workouts, preventive settlements, and bankruptcy restructuring.",
        detailedOverview: "The enactment of UAE Federal Decree-Law No. 51 of 2023 introduced a modern, debtor-friendly bankruptcy regime in the UAE. Our Restructuring & Insolvency group provides strategic counsel on preventive composition, debt restructuring agreements, court-supervised reorganizations, debtor-in-possession (DIP) financing, and defending directors against wrongful trading liability.",
        keyServices: [
            {
                title: "Preventive Settlement & Restructuring",
                desc: "Filing for preventive settlements and securing court moratoriums to halt creditor execution during turnaround plans."
            },
            {
                title: "Creditor Debt Workouts & Standstill Deeds",
                desc: "Negotiating consensual out-of-court debt restructuring, debt-for-equity swaps, and collateral restructuring."
            },
            {
                title: "Court-Supervised Bankruptcy Proceedings",
                desc: "Representing debtors and petitioning creditors in formal bankruptcy, asset liquidation, and priority distribution."
            },
            {
                title: "Director Liability & Cheque Relief Defense",
                desc: "Defending company directors and managers against personal civil and criminal liability arising from corporate distress."
            },
            {
                title: "Debtor-in-Possession (DIP) Financing",
                desc: "Structuring priority super-senior rescue financing facilities to sustain distressed business operations during court proceedings."
            },
            {
                title: "Distressed Asset Acquisitions & Buyouts",
                desc: "Advising special situations funds and strategic buyers on purchasing discounted assets and non-performing loan portfolios."
            }
        ],
        regulatoryFramework: "UAE Federal Decree-Law No. 51 of 2023 (New Bankruptcy Law), Financial Reorganization Committee (FRC) guidelines, and DIFC/ADGM Insolvency Regulations.",
        strategicAdvantages: [
            "Immediate court moratorium protection safeguarding company assets from seizure",
            "Decisive strategies to shield board members and executives from personal exposure",
            "Strong relationships with financial restructuring advisors and court-appointed trustees"
        ],
        faqList: [
            {
                q: "What protections does the new UAE Bankruptcy Law provide to company directors?",
                a: "The 2023 Bankruptcy Law establishes clear safe-harbor provisions for directors who take prompt action to initiate restructuring or preventive settlements, significantly reducing risks of personal liability."
            }
        ],
        relatedSlugs: ["banking-finance", "corporate-mergers-acquisitions", "litigation", "commercial-law"]
    },

    // ══════════════════════════════════════════════════════════════
    // GROUP 3: INDUSTRY & SPECIALIST
    // ══════════════════════════════════════════════════════════════
    {
        slug: "commercial-law",
        title: "Commercial Law & Contracts",
        category: "Industry & Specialist",
        categoryId: "industry-specialist",
        icon: "fa-solid fa-file-contract",
        statute: "UAE Commercial Transactions Law (Federal Decree-Law No. 50 of 2022)",
        heroSummary: "Drafting, negotiating, and vetting high-value commercial contracts, agency & distribution agreements, procurement contracts, and supply chain deals.",
        detailedOverview: "Commercial contracts form the backbone of every enterprise. Our team advises domestic and multinational enterprises on all aspects of UAE Commercial Law. We draft bespoke, bilingual Arabic-English contracts, register commercial agencies with the Ministry of Economy, structure franchising networks, and enforce limitation of liability, indemnity, and dispute clauses under the UAE Commercial Transactions Law.",
        keyServices: [
            {
                title: "Bilingual Commercial Contract Drafting",
                desc: "Drafting and vetting master service agreements (MSAs), SLAs, NDAs, EPC agreements, and procurement contracts."
            },
            {
                title: "Commercial Agency & Distribution",
                desc: "Structuring exclusive/non-exclusive distribution agreements and navigating Ministry of Economy agency registrations."
            },
            {
                title: "Franchising & Licensing Networks",
                desc: "Drafting franchise disclosure agreements, master franchise frameworks, and brand licensing terms."
            },
            {
                title: "Supply Chain & E-Commerce Terms",
                desc: "Drafting B2B/B2C terms of service, consumer protection compliance, and logistics vendor agreements."
            },
            {
                title: "Commercial Breach & Liquidated Damages Claims",
                desc: "Enforcing penalty clauses, performance defaults, force majeure defenses, and commercial warranty claims."
            },
            {
                title: "Manufacturing & Offtake Agreements",
                desc: "Structuring long-term toll manufacturing agreements, OEM contracts, and industrial commodity supply chains."
            }
        ],
        regulatoryFramework: "UAE Commercial Transactions Law (Federal Decree-Law No. 50 of 2022) and UAE Commercial Agencies Law (Federal Law No. 3 of 2022).",
        strategicAdvantages: [
            "Legally bulletproof bilingual contracts designed to stand in UAE courts",
            "Deep understanding of commercial agency deregistration and compensation rights",
            "Pragmatic commercial drafting accelerating deal closure"
        ],
        faqList: [
            {
                q: "Can a principal terminate a registered commercial agency agreement under UAE Law?",
                a: "Under the new Commercial Agencies Law (Federal Law No. 3 of 2022), principals have greater flexibility to terminate or not renew agency agreements upon contract expiry or for justified material reasons, subject to specific statutory notice periods."
            }
        ],
        relatedSlugs: ["corporate-mergers-acquisitions", "dispute-resolution", "real-estate", "intellectual-property"]
    },
    {
        slug: "construction-infrastructure",
        title: "Construction & Infrastructure",
        category: "Industry & Specialist",
        categoryId: "industry-specialist",
        icon: "fa-solid fa-helmet-safety",
        statute: "UAE Civil Transactions Law & FIDIC Standard Contract Conditions",
        heroSummary: "Legal counsel for developers, master contractors, and engineering consultants on megaprojects, EPC contracts, delay claims, and FIDIC disputes.",
        detailedOverview: "The UAE boasts some of the world's most ambitious infrastructure and real estate developments. AHA Law Firm's construction practice advises throughout the project lifecycle—from procurement strategy and FIDIC contract drafting to on-site claims management, extension of time (EOT) disputes, performance bond call defense, and construction arbitration.",
        keyServices: [
            {
                title: "EPC, FIDIC & Bespoke Construction Contracts",
                desc: "Drafting and negotiating FIDIC Red, Yellow, and Silver books, EPC turn-key contracts, and design-build packages."
            },
            {
                title: "Extension of Time (EOT) & Delay Claims",
                desc: "Analyzing critical path delays, prolongation costs, disruption, and acceleration claims."
            },
            {
                title: "Performance Bond Injunctions",
                desc: "Filing urgent court applications to prevent wrongful calls on unconditional bank performance guarantees."
            },
            {
                title: "Construction Arbitration & Litigation",
                desc: "Representing parties in technical construction arbitrations under DIAC, ICC, and UAE court proceedings."
            },
            {
                title: "Decennial Liability Defense & Claims",
                desc: "Advising contractors and supervising architects on 10-year joint structural collapse liability under UAE Civil Code."
            },
            {
                title: "Subcontractor & Supply Chain Management",
                desc: "Drafting back-to-back subcontracts, pay-when-paid clauses, collateral warranties, and mechanic's liens."
            }
        ],
        regulatoryFramework: "Muqawala (Construction Contracts) provisions of the UAE Civil Code (Articles 872–896) and FIDIC standard forms.",
        strategicAdvantages: [
            "Direct experience advising on UAE infrastructure, rail, port, and high-rise developments",
            "Seamless collaboration with premier independent forensic delay and quantum experts",
            "Proven track record in freezing wrongful performance bond calls in court"
        ],
        faqList: [
            {
                q: "Can an employer in the UAE encash a performance bond at will?",
                a: "While performance bonds are generally unconditional, UAE courts will issue an urgent injunction to prevent encashment if the contractor demonstrates clear evidence of employer fraud, bad faith, or unlawful termination."
            }
        ],
        relatedSlugs: ["real-estate", "arbitration", "projects-energy", "litigation"]
    },
    {
        slug: "real-estate",
        title: "Real Estate & Property Law",
        category: "Industry & Specialist",
        categoryId: "industry-specialist",
        icon: "fa-solid fa-house-chimney",
        statute: "Dubai Law No. 7 of 2006 on Real Estate Registration & RERA Regulations",
        heroSummary: "Comprehensive property law counsel: off-plan dispute litigation, Land Department transfers, escrow account protection, and Rental Dispute Centre representation.",
        detailedOverview: "Our Real Estate practice represents institutional developers, sovereign funds, high-net-worth investors, and corporate landlords/tenants. We handle property acquisitions, Oqood registration, off-plan cancellation disputes, delay compensation, construction defects, and high-value tenancy disputes before the Rental Dispute Centre (RDC).",
        keyServices: [
            {
                title: "Off-Plan Project Disputes & Termination",
                desc: "Representing purchasers and developers in delayed off-plan handovers, contract rescission, and refund recoveries."
            },
            {
                title: "DLD Property Transfers & Conveyancing",
                desc: "Drafting Sale & Purchase Agreements (Form F), title due diligence, NOC issuance, and escrow management."
            },
            {
                title: "Commercial Leases & RDC Litigation",
                desc: "Drafting long-term commercial leases and litigating rent valuation, eviction, and maintenance claims before RDC."
            },
            {
                title: "Jointly Owned Property (JOP) & Strata Law",
                desc: "Advising owners' associations, facility managers, and developers on Dubai Law No. 6 of 2019 on Jointly Owned Property."
            },
            {
                title: "Real Estate Development Structuring",
                desc: "Advising on master community declarations, plot acquisitions, development escrow setups, and RERA registrations."
            },
            {
                title: "Property Portfolio Mortgages & Refinancing",
                desc: "Structuring real estate collateral packages, mezzanine property loans, and debt refinancing before Land Departments."
            }
        ],
        regulatoryFramework: "Dubai Land Department (DLD) Regulations, Real Estate Regulatory Agency (RERA), and Abu Dhabi Real Estate Law No. 3 of 2015.",
        strategicAdvantages: [
            "Deep procedural familiarity with DLD, RERA, and Rental Dispute Centre (RDC)",
            "Turnkey conveyancing service for high-value prime luxury real estate transactions",
            "High rate of success in recovering investor funds from stalled developments"
        ],
        faqList: [
            {
                q: "Can an investor cancel an off-plan property contract if the developer delays completion?",
                a: "Yes. If the developer fails to complete the project within the statutory grace period without an approved force majeure event, investors can petition DLD/court for contract termination and full refund from the project escrow account."
            }
        ],
        relatedSlugs: ["construction-infrastructure", "litigation", "immigration-golden-visa", "corporate-structuring"]
    },
    {
        slug: "shipping-logistics",
        title: "Shipping, Aviation & Logistics",
        category: "Industry & Specialist",
        categoryId: "industry-specialist",
        icon: "fa-solid fa-ship",
        statute: "UAE Federal Decree-Law No. 43 of 2023 on Maritime Law",
        heroSummary: "Specialized maritime and aviation advocacy: emergency ship arrests, charterparty disputes, marine insurance claims, freight logistics, and collision casualties.",
        detailedOverview: "Operating from the maritime hub of the UAE, AHA Law Firm's Shipping & Logistics team provides 24/7 emergency response for ship owners, charterers, P&I Clubs, freight forwarders, and port operators. We execute ship arrests across UAE ports (Jebel Ali, Port Rashid, Fujairah, Khalifa Port), resolve bill of lading cargo claims, bunker supply disputes, and litigate aviation carriage liability.",
        keyServices: [
            {
                title: "Precautionary Ship Arrest & Release",
                desc: "Securing emergency ex-parte ship arrest orders for maritime debts, crew wages, bunker claims, and vessel release bonds."
            },
            {
                title: "Charterparty & Bill of Lading Disputes",
                desc: "Litigating demurrage, deadfreight, cargo contamination, and deviation claims under charter contracts."
            },
            {
                title: "Marine Insurance & Casualty Investigation",
                desc: "Handling collision, grounding, salvage, general average, and total loss insurance claims."
            },
            {
                title: "Aviation Carriage & Cargo Law",
                desc: "Advising airlines and freight forwarders on Montreal Convention liability, aircraft leasing, and logistics disputes."
            },
            {
                title: "Ship Sale, Purchase & Flag Registration",
                desc: "Drafting Norwegian Saleform contracts, conducting vessel registry searches, and closing transactions under UAE/Panama flags."
            },
            {
                title: "Port Authority Liens & Terminal Operations",
                desc: "Advising terminal operators on tariff enforcement, cargo abandonment auctions, and environmental port sanctions."
            }
        ],
        regulatoryFramework: "New UAE Maritime Law (Federal Decree-Law No. 43 of 2023), UAE Civil Aviation Law, and International Maritime Organization (IMO) conventions.",
        strategicAdvantages: [
            "24/7 rapid response ship arrest team across all UAE ports",
            "Trusted counsel to international P&I Clubs and maritime insurers",
            "Mastery of the modern 2023 UAE Maritime Law update"
        ],
        faqList: [
            {
                q: "What claims qualify for a ship arrest under the new UAE Maritime Law?",
                a: "Under Federal Decree-Law No. 43 of 2023, maritime debts including bunker supplies, crew wages, ship repair, collision damage, charterparty breaches, and salvage qualify for precautionary ship arrest."
            }
        ],
        relatedSlugs: ["insurance", "international-litigation", "arbitration", "commercial-law"]
    },
    {
        slug: "projects-energy",
        title: "Projects & Energy Law",
        category: "Industry & Specialist",
        categoryId: "industry-specialist",
        icon: "fa-solid fa-bolt",
        statute: "UAE Energy Regulatory Framework & Concession Agreements",
        heroSummary: "Advising sponsors, energy majors, and utilities on upstream oil & gas concessions, solar/renewable IPPs, hydrogen projects, and power purchase agreements (PPAs).",
        detailedOverview: "As the UAE leads the regional green transition while sustaining world-class hydrocarbon operations, our Projects & Energy practice advises on conventional oil & gas concessions, nuclear energy compliance, utility-scale solar IPP projects, green hydrogen initiatives, waste-to-energy facilities, and regulatory compliance before the Abu Dhabi Department of Energy (DoE) and Dubai Supreme Council of Energy.",
        keyServices: [
            {
                title: "Renewable Energy & Solar IPPs",
                desc: "Drafting Power Purchase Agreements (PPAs), grid connection agreements, EPC/O&M contracts for solar and wind projects."
            },
            {
                title: "Oil & Gas Upstream & Midstream",
                desc: "Advising on exploration and production sharing agreements (EPSA), farm-in/farm-out transactions, and pipeline transport."
            },
            {
                title: "Public-Private Partnerships (PPP)",
                desc: "Structuring concession agreements, government off-take contracts, and sovereign risk mitigation under UAE PPP laws."
            },
            {
                title: "Green Hydrogen & Carbon Offsets",
                desc: "Drafting clean tech development contracts, carbon credit trading agreements, and sustainability compliance frameworks."
            },
            {
                title: "Water Desalination & Waste-to-Energy (WTE)",
                desc: "Drafting water purchase agreements (WPA), municipal solid waste feedstock contracts, and plant operation licenses."
            },
            {
                title: "Nuclear Energy Regulatory Compliance",
                desc: "Advising contractors and suppliers on Federal Authority for Nuclear Regulation (FANR) licensing and liability regimes."
            }
        ],
        regulatoryFramework: "UAE Energy Strategy 2050, Dubai Clean Energy Strategy, and Federal PPP Law No. 12 of 2023.",
        strategicAdvantages: [
            "Direct experience in landmark UAE utility-scale solar and water desalination projects",
            "Pioneering advisory in green hydrogen and carbon credit regulatory frameworks",
            "Comprehensive PPP project finance capabilities"
        ],
        faqList: [
            {
                q: "What legal frameworks govern Public-Private Partnerships (PPP) in the UAE?",
                a: "Federal Law No. 12 of 2023 regulates partnerships between federal entities and the private sector, complemented by emirate-level PPP laws in Dubai and Abu Dhabi."
            }
        ],
        relatedSlugs: ["construction-infrastructure", "sustainable-business-esg", "banking-finance", "corporate-mergers-acquisitions"]
    },
    {
        slug: "employment-labor",
        title: "Employment & Incentives",
        category: "Industry & Specialist",
        categoryId: "industry-specialist",
        icon: "fa-solid fa-handshake",
        statute: "UAE Federal Decree-Law No. 33 of 2021 on the Regulation of Labor Relations",
        heroSummary: "Comprehensive employment law advisory: MOHRE compliance, executive employment agreements, restrictive covenants, workplace investigations, and labor court defense.",
        detailedOverview: "AHA Law Firm's Employment group provides strategic counsel to HR directors, general counsel, and C-suite executives on UAE labor law. We draft executive employment contracts, non-compete and non-solicitation covenants, design incentive/bonus plans, handle corporate restructuring redundancies, manage workplace harassment investigations, and litigate claims before MOHRE and the Labor Courts.",
        keyServices: [
            {
                title: "Employment Contracts & Policy Handbooks",
                desc: "Drafting MOHRE standard contracts, bilingual internal HR policies, and code of conduct manuals."
            },
            {
                title: "Executive Severance & Restrictive Covenants",
                desc: "Enforcing post-termination non-compete clauses, non-disclosure agreements, and golden handshake agreements."
            },
            {
                title: "MOHRE Conciliation & Labor Litigation",
                desc: "Representing employers and senior executives in wrongful termination, unpaid end-of-service gratuity, and arbitrary dismissal claims."
            },
            {
                title: "Emiratisation (NAFIS) Compliance",
                desc: "Advising private sector firms on meeting mandatory Emiratisation quotas, MoHRE audits, and avoiding financial penalties."
            },
            {
                title: "Workplace Discrimination & Harassment Audits",
                desc: "Conducting independent fact-finding investigations into workplace grievances, whistleblower claims, and safety violations."
            },
            {
                title: "Executive Long-Term Incentive Plans (LTIP)",
                desc: "Designing performance share units, retention bonuses, and deferred compensation schemes under UAE & DIFC regimes."
            }
        ],
        regulatoryFramework: "UAE Federal Decree-Law No. 33 of 2021 (Labor Relations Law), its Executive Regulations (Cabinet Resolution No. 1 of 2022), and DIFC/ADGM Employment Laws.",
        strategicAdvantages: [
            "Clear, practical guidance on mandatory Emiratisation targets and statutory deadlines",
            "Deep experience in enforcing non-compete covenants before UAE courts",
            "Rapid resolution of labor complaints through MOHRE mediation"
        ],
        faqList: [
            {
                q: "Are non-compete clauses enforceable in the UAE under the new Labor Law?",
                a: "Yes. Under Article 10 of Federal Decree-Law No. 33 of 2021, non-compete clauses are enforceable provided they specify the geographic scope, type of work, and duration (maximum 2 years) necessary to protect the employer's legitimate business interests."
            }
        ],
        relatedSlugs: ["commercial-law", "litigation", "corporate-services", "compliance-investigations"]
    },
    {
        slug: "intellectual-property",
        title: "Intellectual Property",
        category: "Industry & Specialist",
        categoryId: "industry-specialist",
        icon: "fa-solid fa-copyright",
        statute: "UAE Federal Decree-Law No. 36 of 2021 on Trademarks & Copyright Law",
        heroSummary: "Protecting, managing, and enforcing intellectual property assets: trademark registration, anti-counterfeiting customs seizures, copyright, and brand licensing.",
        detailedOverview: "We safeguard our clients' most valuable intangible assets across the UAE and GCC. Our IP attorneys handle trademark registration, copyright filings, trade secret protection, brand licensing agreements, and aggressive anti-counterfeiting raids in coordination with UAE Customs, Economic Departments, and Criminal Police.",
        keyServices: [
            {
                title: "Trademark Registration & Portfolio Management",
                desc: "Conducting trademark clearance searches, filing applications, managing opposition proceedings, and renewals across the MENA region."
            },
            {
                title: "Anti-Counterfeiting & Customs Recordals",
                desc: "Recording trademarks with UAE Customs ports to execute border seizures and coordinating market raids on counterfeit goods."
            },
            {
                title: "IP Infringement Litigation",
                desc: "Litigating trademark infringement, passing-off, copyright piracy, and trade secret misappropriation before UAE courts."
            },
            {
                title: "Brand Licensing & Franchising Agreements",
                desc: "Drafting technology transfer, trademark licensing, and commercial brand distribution agreements."
            },
            {
                title: "Domain Name & Digital Brand Enforcement",
                desc: "Resolving cybersquatting disputes under WIPO UDRP rules and recovering infringing .ae domain names."
            },
            {
                title: "Copyright & Media Content Protection",
                desc: "Registering broadcast rights, literary, software source code, and artistic works with the Ministry of Economy."
            }
        ],
        regulatoryFramework: "UAE Federal Decree-Law No. 36 of 2021 (Trademarks), Federal Decree-Law No. 38 of 2021 (Copyrights), and Madrid Protocol for International Registration.",
        strategicAdvantages: [
            "Direct electronic filing capability with the UAE Ministry of Economy IP Department",
            "Proactive customs enforcement blocking counterfeit shipments at UAE ports",
            "Multijurisdictional brand protection across the entire GCC"
        ],
        faqList: [
            {
                q: "How long is a trademark valid in the UAE?",
                a: "A trademark registration in the UAE is valid for 10 years from the filing date and can be renewed indefinitely for successive 10-year periods."
            }
        ],
        relatedSlugs: ["patents-innovation", "commercial-law", "digital-data-privacy", "litigation"]
    },
    {
        slug: "patents-innovation",
        title: "Innovation, Patents & Industrial Property (3IP)",
        category: "Industry & Specialist",
        categoryId: "industry-specialist",
        icon: "fa-solid fa-lightbulb",
        statute: "UAE Federal Decree-Law No. 11 of 2021 on Regulation and Protection of Industrial Property Rights",
        heroSummary: "Securing patents, utility certificates, industrial designs, and trade secrets for tech innovators, biotech enterprises, and industrial manufacturers.",
        detailedOverview: "As the UAE establishes itself as a global hub for innovation, AI, and advanced technology, our Industrial Property group provides specialized patent drafting, PCT national phase entries, utility model protections, industrial design registrations, and patent litigation defense before the Ministry of Economy Patent Office and UAE courts.",
        keyServices: [
            {
                title: "Patent Drafting & PCT National Phase Filing",
                desc: "Preparing technical patent specifications, international PCT filings, and accelerated examination petitions."
            },
            {
                title: "Industrial Design Registration",
                desc: "Protecting product aesthetics, 3D industrial shapes, and packaging designs across UAE and GCC registries."
            },
            {
                title: "Trade Secrets & Confidentiality Protocols",
                desc: "Establishing internal corporate IP governance, NDAs, employee inventions ownership, and non-disclosure controls."
            },
            {
                title: "Patent Litigation & Invalidation Proceedings",
                desc: "Defending patent infringement claims and petitioning for patent invalidation based on prior art."
            },
            {
                title: "Utility Certificate & Fast-Track Filings",
                desc: "Securing fast-track 10-year utility certificates for incremental mechanical and chemical innovations."
            },
            {
                title: "Technology Transfer & Commercialization",
                desc: "Structuring university-industry research spin-offs, patent monetization, and international cross-licensing."
            }
        ],
        regulatoryFramework: "UAE Federal Decree-Law No. 11 of 2021 on Industrial Property, Patent Cooperation Treaty (PCT), and Paris Convention.",
        strategicAdvantages: [
            "Registered patent agents with technical background in software, biotech, and engineering",
            "Accelerated patent examination pathways through the UAE Ministry of Economy",
            "Comprehensive technology licensing and assignment frameworks"
        ],
        faqList: [
            {
                q: "What is the term of patent protection in the UAE?",
                a: "Patents in the UAE are granted for a term of 20 years from the date of application, subject to payment of annual maintenance fees."
            }
        ],
        relatedSlugs: ["intellectual-property", "digital-data-privacy", "venture-capital", "commercial-law"]
    },
    {
        slug: "digital-data-privacy",
        title: "Digital & Data Privacy",
        category: "Industry & Specialist",
        categoryId: "industry-specialist",
        icon: "fa-solid fa-microchip",
        statute: "UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL)",
        heroSummary: "Strategic legal advisory on UAE Data Protection Law, GDPR alignment, cybersecurity incident response, AI regulation, and cloud compliance.",
        detailedOverview: "In an era of rapid digital transformation, data compliance is a boardroom priority. Our Digital & Data team guides multinationals and tech enterprises through the UAE Personal Data Protection Law (PDPL), DIFC and ADGM Data Protection Regulations, cross-border data transfer mechanisms, data breach crisis management, AI governance, and cybersecurity notifications.",
        keyServices: [
            {
                title: "UAE PDPL & GDPR Compliance Audits",
                desc: "Conducting data mapping, privacy impact assessments (DPIAs), drafting privacy notices, and consent mechanisms."
            },
            {
                title: "Cross-Border Data Transfer Frameworks",
                desc: "Drafting standard contractual clauses (SCCs) and binding corporate rules for transferring data outside the UAE."
            },
            {
                title: "Data Breach Incident Response & Notification",
                desc: "24/7 emergency response for ransomware attacks, data leaks, and regulatory notifications to the UAE Data Office."
            },
            {
                title: "Artificial Intelligence & Cloud Governance",
                desc: "Advising on generative AI liability, algorithm transparency, cloud outsourcing policies, and TDRA rules."
            },
            {
                title: "Data Protection Officer (DPO) Support",
                desc: "Providing outsourced DPO services, handling data subject access requests (DSARs), and regulatory record-keeping."
            },
            {
                title: "Health & Financial Sector Special Data Rules",
                desc: "Ensuring compliance with Nabidh health data rules and Central Bank consumer data protection standards."
            }
        ],
        regulatoryFramework: "UAE Federal Decree-Law No. 45 of 2021 (PDPL), DIFC Data Protection Law No. 5 of 2020, and ADGM Data Protection Regulations 2021.",
        strategicAdvantages: [
            "Seamless alignment of UAE PDPL with global GDPR and CCPA standards",
            "Rapid data breach containment protocols preventing regulatory fines",
            "Pioneering legal guidance on UAE AI ethics guidelines and digital assets"
        ],
        faqList: [
            {
                q: "Does the UAE Personal Data Protection Law apply to foreign companies?",
                a: "Yes. The UAE PDPL has extraterritorial effect and applies to foreign companies that process the personal data of data subjects residing in the UAE."
            }
        ],
        relatedSlugs: ["patents-innovation", "intellectual-property", "compliance-investigations", "commercial-law"]
    },

    // ══════════════════════════════════════════════════════════════
    // GROUP 4: REGULATORY & ADVISORY
    // ══════════════════════════════════════════════════════════════
    {
        slug: "competition-antitrust",
        title: "Competition & Antitrust",
        category: "Regulatory & Advisory",
        categoryId: "regulatory-advisory",
        icon: "fa-solid fa-layer-group",
        statute: "UAE Federal Decree-Law No. 36 of 2023 on the Regulation of Competition",
        heroSummary: "Guiding clients through mandatory merger clearance, anti-competitive practice investigations, abuse of dominance defense, and Ministry of Economy approvals.",
        detailedOverview: "The enactment of the new UAE Competition Law (Federal Decree-Law No. 36 of 2023) introduced strict turnover-based thresholds for economic concentrations (merger control). Our Antitrust group represents domestic and multinational enterprises in merger clearance filings before the Ministry of Economy, conducts internal antitrust compliance audits, and defends against allegations of price-fixing, market division, and abuse of dominance.",
        keyServices: [
            {
                title: "Merger Control & Economic Concentration Filings",
                desc: "Assessing transaction thresholds and preparing merger clearance notifications for M&A and joint venture transactions."
            },
            {
                title: "Antitrust Compliance Programs & Audits",
                desc: "Reviewing commercial contracts, distribution agreements, and pricing policies to eliminate anti-competitive risk."
            },
            {
                title: "Abuse of Dominance & Cartel Defense",
                desc: "Representing corporations facing regulatory inquiries, dawn raids, and market collusion investigations."
            },
            {
                title: "Leniency Applications & Settlement Protocols",
                desc: "Navigating statutory leniency mechanisms and negotiating settlements with the Competition Department."
            },
            {
                title: "Vertical & Horizontal Agreement Reviews",
                desc: "Vetting exclusivity terms, resale price maintenance (RPM), and non-compete covenants for statutory compliance."
            },
            {
                title: "Cross-Border Competition Clearance",
                desc: "Coordinating multi-jurisdictional merger filings across GCC competition authorities (GAC Saudi Arabia, UAE, Kuwait)."
            }
        ],
        regulatoryFramework: "UAE Federal Decree-Law No. 36 of 2023 on the Regulation of Competition and its Executive Regulations.",
        strategicAdvantages: [
            "Direct experience with Ministry of Economy Competition Department clearance workflows",
            "Deep integration with corporate M&A teams ensuring zero deal closing delays",
            "Practical risk mitigation for dominant market players in the UAE"
        ],
        faqList: [
            {
                q: "When is a merger clearance filing mandatory under the new UAE Competition Law?",
                a: "A merger clearance notification is mandatory if the combined annual sales/turnover of the parties exceeds the statutory threshold or if the transaction results in an economic concentration with market impact in the UAE."
            }
        ],
        relatedSlugs: ["corporate-mergers-acquisitions", "regulatory-compliance", "commercial-law", "compliance-investigations"]
    },
    {
        slug: "compliance-investigations",
        title: "Compliance, Investigations & International Cooperation",
        category: "Regulatory & Advisory",
        categoryId: "regulatory-advisory",
        icon: "fa-solid fa-user-shield",
        statute: "UAE Anti-Money Laundering Law (Federal Decree-Law No. 20 of 2018)",
        heroSummary: "Internal corporate investigations, Anti-Money Laundering (AML/CFT) audits, bribery & corruption defense, and regulatory enforcement.",
        detailedOverview: "Our Investigations & Compliance team conducts confidential internal corporate investigations into fraud, embezzlement, insider trading, and FCPA/UK Bribery Act violations. We assist financial institutions and Designated Non-Financial Businesses and Professions (DNFBPs) in establishing AML/CFT compliance systems, filing Suspicious Transaction Reports (STRs), and responding to regulatory inquiries.",
        keyServices: [
            {
                title: "Internal Corporate Fraud Investigations",
                desc: "Conducting digital forensics, employee interviews, and tracing misappropriated corporate assets."
            },
            {
                title: "AML/CFT Regulatory Compliance & Audits",
                desc: "Designing risk-based AML policies, customer due diligence (CDD) frameworks, and goAML reporting protocols."
            },
            {
                title: "Anti-Bribery & Whistleblower Systems",
                desc: "Structuring compliance hotlines, internal reporting channels, and anti-corruption training programs."
            },
            {
                title: "Regulatory Sanctions & Enforcement Defense",
                desc: "Defending corporations facing enforcement actions from Central Bank, SCA, Ministry of Economy, or Financial Intelligence Unit (FIU)."
            },
            {
                title: "Sanctions & Export Control Compliance",
                desc: "Screening transactions against UN, OFAC, and UAE National Counter Terrorism Committee (NCTC) sanctions lists."
            },
            {
                title: "Independent Monitor & Remediation Reviews",
                desc: "Serving as independent external compliance monitors to oversee post-settlement regulatory remediation programs."
            }
        ],
        regulatoryFramework: "UAE Federal Decree-Law No. 20 of 2018 (AML/CFT), UAE Penal Code, and international FATF standards.",
        strategicAdvantages: [
            "Independent credibility trusted by UAE and international regulatory bodies",
            "Rapid deployment of forensic accountants and digital evidence specialists",
            "Strict legal privilege protections safeguarding internal audit findings"
        ],
        faqList: [
            {
                q: "Which businesses are classified as DNFBPs required to comply with UAE AML laws?",
                a: "DNFBPs include real estate brokers and developers, dealers in precious metals and stones, corporate service providers, trust administrators, and independent accountants/lawyers."
            }
        ],
        relatedSlugs: ["criminal-defense", "regulatory-compliance", "corporate-services", "interpol-extradition"]
    },
    {
        slug: "regulatory-compliance",
        title: "Regulatory Compliance",
        category: "Regulatory & Advisory",
        categoryId: "regulatory-advisory",
        icon: "fa-solid fa-stamp",
        statute: "UAE Federal & Local Regulatory Frameworks",
        heroSummary: "Navigating complex licensing, statutory approvals, and regulatory compliance across mainland, free zones, and specialized industry watchdogs.",
        detailedOverview: "Regulatory requirements in the UAE are continuously evolving. We provide ongoing advisory on regulatory licensing, ESG compliance, product safety approvals, Central Bank guidelines, and consumer protection mandates. We represent clients before government ministries, economic development authorities, and sector-specific regulators.",
        keyServices: [
            {
                title: "Government Licensing & Approvals",
                desc: "Securing specialized regulatory approvals from TDRA, Ministry of Health (MOHAP), KHDA, and ESMA."
            },
            {
                title: "Consumer Protection & Advertising Compliance",
                desc: "Vetting promotional campaigns, commercial prize draws, and ensuring compliance with UAE Consumer Protection Law."
            },
            {
                title: "ESG & Sustainability Reporting",
                desc: "Guiding listed and private companies on ESG disclosures and environmental compliance."
            },
            {
                title: "Regulatory Policy Advice & Advocacy",
                desc: "Preparing regulatory submissions, position papers, and representing industry groups in public consultations."
            },
            {
                title: "Product Standards & Conformity (ESMA / MoIAT)",
                desc: "Securing UAE conformity certificates (ECAS / EQM) for imported consumer goods, cosmetics, and industrial machinery."
            },
            {
                title: "Telecommunications & Media Regulatory (TDRA / MRC)",
                desc: "Obtaining commercial broadcast licenses, content permits, and specialized VoIP/IoT communications approvals."
            }
        ],
        regulatoryFramework: "UAE Consumer Protection Law (Federal Law No. 15 of 2020), Media Regulatory Council directives, and sectoral ministry regulations.",
        strategicAdvantages: [
            "Proactive regulatory radar anticipating legal reforms before implementation",
            "Direct channel of communication with key UAE governmental departments",
            "Comprehensive compliance checklists tailored to specific industry verticals"
        ],
        faqList: [
            {
                q: "Do commercial promotional campaigns and prize draws require government permits in the UAE?",
                a: "Yes. All commercial promotions, discounts, competitions, and raffle draws require prior permits from the relevant Department of Economy and Tourism (DET / DED)."
            }
        ],
        relatedSlugs: ["compliance-investigations", "corporate-services", "tax", "sustainable-business-esg"]
    },
    {
        slug: "legislative-drafting",
        title: "Legislative Drafting & Policy",
        category: "Regulatory & Advisory",
        categoryId: "regulatory-advisory",
        icon: "fa-solid fa-scroll",
        statute: "UAE Supreme Legislation Committee & Ministry of Justice Protocols",
        heroSummary: "Advising government entities, free zone authorities, and trade bodies on drafting federal decree-laws, executive regulations, and regulatory policy.",
        detailedOverview: "AHA Law Firm's senior legal scholars and legislative specialists advise sovereign authorities, free zone registries, and industry associations on drafting statutes, cabinet decisions, and municipal regulations. We conduct comparative international law research, regulatory impact assessments (RIA), and draft bilingual legal frameworks that foster economic growth and foreign investment.",
        keyServices: [
            {
                title: "Statutory Drafting & Decrees",
                desc: "Drafting primary and secondary legislation, executive regulations, and ministerial decrees in precise legal Arabic and English."
            },
            {
                title: "Free Zone Regulatory Frameworks",
                desc: "Designing complete legal, licensing, and dispute resolution codes for new specialized free zones and economic clusters."
            },
            {
                title: "Comparative Legal Research & Impact Studies",
                desc: "Benchmarking proposed laws against leading international jurisdictions (UK, EU, Singapore, US)."
            },
            {
                title: "White Papers & Policy Advocacy",
                desc: "Authoring evidence-based policy white papers and statutory amendments on behalf of industry federations."
            },
            {
                title: "Regulatory Impact Assessments (RIA)",
                desc: "Evaluating the economic, social, and fiscal impacts of proposed legislative updates prior to promulgation."
            },
            {
                title: "Public Consultation & Stakeholder Workshops",
                desc: "Facilitating multi-stakeholder legal roundtables and synthesizing private sector feedback into draft statutory provisions."
            }
        ],
        regulatoryFramework: "UAE Constitution, Supreme Legislation Committee (SLC) standards, and international legislative drafting guidelines.",
        strategicAdvantages: [
            "Authored and consulted on major regional commercial and regulatory laws",
            "Mastery of legal terminology in Arabic, English, and French civil law systems",
            "Deep understanding of the UAE government's vision and legislative agenda"
        ],
        faqList: [
            {
                q: "What is the official process for enacting federal laws in the UAE?",
                a: "Federal laws are drafted by relevant ministries, reviewed by the Ministerial Development Council and Cabinet, debated by the Federal National Council (FNC), approved by the Federal Supreme Council, and promulgated by the UAE President."
            }
        ],
        relatedSlugs: ["regulatory-compliance", "sustainable-business-esg", "competition-antitrust", "corporate-structuring"]
    },
    {
        slug: "sustainable-business-esg",
        title: "Sustainable Business (ESG)",
        category: "Regulatory & Advisory",
        categoryId: "regulatory-advisory",
        icon: "fa-solid fa-leaf",
        statute: "SCA ESG Disclosure Directives & UAE Net Zero 2050 Charter",
        heroSummary: "Advisory on Environmental, Social, and Governance (ESG) compliance, carbon credit trading, green bonds, and sustainability reporting.",
        detailedOverview: "As the host nation of COP28, the UAE is accelerating its commitment to Net Zero 2050. Our ESG & Sustainable Business practice assists public joint-stock companies, sovereign entities, and private corporations in navigating mandatory SCA ESG reporting, green finance frameworks, carbon offset trading, supply chain human rights due diligence, and climate risk disclosures.",
        keyServices: [
            {
                title: "Mandatory ESG Reporting & Governance",
                desc: "Assisting listed companies with SCA ESG disclosure compliance, board diversity mandates, and sustainability metrics."
            },
            {
                title: "Green Bonds & Sustainable Financing",
                desc: "Structuring green Sukuk, sustainability-linked loans (SLLs), and ESG bond documentation aligned with ICMA principles."
            },
            {
                title: "Carbon Credits & Offsets Legal Structuring",
                desc: "Advising on voluntary carbon market (VCM) transactions, carbon credit purchase agreements, and registry compliance."
            },
            {
                title: "Supply Chain Due Diligence & Human Rights",
                desc: "Auditing supplier ethical standards, environmental compliance, and drafting enforceable sustainable procurement clauses."
            },
            {
                title: "Circular Economy & Waste Compliance",
                desc: "Advising industrial clients on UAE Circular Economy Policy, single-use plastic restrictions, and extended producer responsibility (EPR)."
            },
            {
                title: "Climate Litigation & Greenwashing Defense",
                desc: "Defending corporations against greenwashing allegations, sustainability misstatement claims, and environmental tort liabilities."
            }
        ],
        regulatoryFramework: "SCA Chairman Decision No. 3/R.M of 2020 on Corporate Governance and UAE Net Zero by 2050 strategic initiative.",
        strategicAdvantages: [
            "Pioneering advisory in UAE carbon credit trading and green financial instruments",
            "Comprehensive board-level ESG compliance roadmaps",
            "Direct alignment with international TCFD and ISSB sustainability standards"
        ],
        faqList: [
            {
                q: "Is ESG reporting mandatory for listed companies in the UAE?",
                a: "Yes. Under SCA regulations, all Public Joint Stock Companies (PJSCs) listed on ADX or DFM are required to publish an annual Sustainability / ESG Report."
            }
        ],
        relatedSlugs: ["projects-energy", "corporate-mergers-acquisitions", "capital-markets", "regulatory-compliance"]
    },
    {
        slug: "private-notary",
        title: "Private Notary Services",
        category: "Regulatory & Advisory",
        categoryId: "regulatory-advisory",
        icon: "fa-solid fa-file-pen",
        statute: "UAE Federal Law No. 4 of 2022 Concerning the Notary Public Profession",
        heroSummary: "Expedited private notary services: Powers of Attorney (POA), memorandums of association, commercial contract authentication, and judicial notices.",
        detailedOverview: "Avoid long court notary queues. Through our licensed UAE Private Notary services, AHA Law Firm provides fast, legally authenticated notarization for individual and corporate documents. We notarize general and special Powers of Attorney (POA), Articles of Association, share purchase deeds, debt acknowledgments, and legal notices with direct electronic integration with Dubai Courts and the Ministry of Justice.",
        keyServices: [
            {
                title: "Powers of Attorney (POA) Drafting & Attestation",
                desc: "Drafting and notarizing general, special, property, and court advocacy POAs for individuals and corporations."
            },
            {
                title: "Corporate Memorandums & Share Transfer Deeds",
                desc: "Notarizing LLC Articles of Association, board addendums, and share assignment contracts."
            },
            {
                title: "Legal Notices & Debt Acknowledgments",
                desc: "Authenticating formal statutory notices, declarations of debt, and pre-litigation demands."
            },
            {
                title: "Remote Video Notarization",
                desc: "Executing remote digital notarization for international clients using UAE Pass and biometric verification."
            },
            {
                title: "Commercial Lease & Settlement Deeds",
                desc: "Attesting long-term lease covenants, settlement deeds, and commercial undertakings with execution writ power."
            },
            {
                title: "MOFA & Consular Legalization Coordination",
                desc: "Managing full-chain document legalization including Ministry of Foreign Affairs (MOFA) and foreign embassy stamps."
            }
        ],
        regulatoryFramework: "UAE Federal Law No. 4 of 2022 Regulating the Notary Public Profession and Dubai Judicial Institute Private Notary regulations.",
        strategicAdvantages: [
            "Same-day document drafting and authentication in English and Arabic",
            "Remote digital notarization available worldwide without traveling to the UAE",
            "Seamless coordination with UAE Ministry of Foreign Affairs (MOFA) attestation"
        ],
        faqList: [
            {
                q: "Can I notarize a UAE Power of Attorney if I am currently outside the country?",
                a: "Yes. Through the UAE remote digital notarization system and private notary video verification, foreign clients can execute and notarize a UAE POA remotely using video conferencing and digital signature protocols."
            }
        ],
        relatedSlugs: ["corporate-services", "commercial-law", "wills-probate", "family-personal-status"]
    },
    {
        slug: "family-business-wealth",
        title: "Family Business & Private Client",
        category: "Regulatory & Advisory",
        categoryId: "regulatory-advisory",
        icon: "fa-solid fa-people-roof",
        statute: "UAE Federal Decree-Law No. 37 of 2022 on Family Businesses",
        heroSummary: "Protecting generational wealth, family office governance, family business charters, succession planning, and DIFC/ADGM foundations.",
        detailedOverview: "Family businesses constitute over 70% of the UAE private sector economy. Our Private Wealth team advises prominent GCC family conglomerates, ultra-high-net-worth individuals, and family offices on succession planning, family governance constitutions, establishing ADGM/DIFC Foundations and Trusts, and resolving inter-generational shareholder disputes under the UAE Family Business Law.",
        keyServices: [
            {
                title: "Family Business Constitutions & Charters",
                desc: "Drafting family protocols, board succession rules, next-generation employment policies, and dispute boards."
            },
            {
                title: "ADGM & DIFC Foundations and Family Trusts",
                desc: "Establishing common law foundations to ring-fence family assets, real estate portfolios, and prevent probate fragmentation."
            },
            {
                title: "Inter-Generational Succession Planning",
                desc: "Structuring smooth leadership transitions, voting rights allocation, and pre-emptive buy-sell rights."
            },
            {
                title: "Family Office Structuring & Governance",
                desc: "Setting up single and multi-family offices (SFO/MFO) with bespoke investment mandates."
            },
            {
                title: "Family Dispute Conciliation & Buyouts",
                desc: "Managing confidential buyouts of exiting family branches, share valuations, and family council arbitration."
            },
            {
                title: "Philanthropy & Waqf Endowment Structuring",
                desc: "Establishing registered charitable endowments, family foundations, and impact investing vehicles."
            }
        ],
        regulatoryFramework: "UAE Federal Decree-Law No. 37 of 2022 (Family Businesses), ADGM Foundations Regulations, and DIFC Foundations Law No. 3 of 2018.",
        strategicAdvantages: [
            "Deep understanding of traditional Gulf family dynamics combined with modern common law wealth structures",
            "Complete insulation of multi-asset family holdings from probate delays",
            "Confidential mediation of family shareholder disagreements"
        ],
        faqList: [
            {
                q: "What benefits does an ADGM or DIFC Foundation offer to a family business?",
                a: "A Foundation provides separate legal personality to hold and protect family assets, ensures perpetual succession, avoids statutory probate splits, and allows the founder to retain governance control through a Foundation Council."
            }
        ],
        relatedSlugs: ["wills-probate", "corporate-structuring", "family-personal-status", "private-notary"]
    },
    {
        slug: "criminal-defense",
        title: "Criminal Defense & Police Matters",
        category: "Regulatory & Advisory",
        categoryId: "regulatory-advisory",
        icon: "fa-solid fa-user-ninja",
        statute: "UAE Federal Decree-Law No. 31 of 2021 (Penal Code) & Law No. 38 of 2022 (Criminal Procedure)",
        heroSummary: "24/7 emergency criminal defense: white-collar financial crimes, police station representation, Public Prosecution bail hearings, and criminal trial defense.",
        detailedOverview: "Facing criminal accusations in the UAE requires immediate, assertive legal defense. Our seasoned Emirati criminal defense advocates provide 24/7 emergency counsel across all police departments, the Public Prosecution, and Criminal Courts. We specialize in white-collar financial crimes (embezzlement, breach of trust, bribery, cyber fraud), commercial forgery, medical malpractice defense, and securing bail approvals.",
        keyServices: [
            {
                title: "24/7 Police Station & Prosecution Advocacy",
                desc: "Immediate attendance during initial police interrogations, recording official statements, and Public Prosecution representation."
            },
            {
                title: "Bail Applications & Passport Release",
                desc: "Filing urgent petitions for provisional release on personal guarantee or financial bail, and lifting travel bans."
            },
            {
                title: "White-Collar & Financial Crime Defense",
                desc: "Defending executives against corporate fraud, AML charges, forgery, breach of trust, and tax evasion."
            },
            {
                title: "Criminal Trials & Cassation Appeals",
                desc: "Aggressive defense before Criminal Courts of First Instance, Appeal, and Cassation."
            },
            {
                title: "Cybercrime & Digital Fraud Defense",
                desc: "Defending against allegations under the UAE Cybercrime Law (online defamation, electronic extortion, unauthorized access)."
            },
            {
                title: "Travel Ban Removal & Clearance Certificates",
                desc: "Petitioning prosecution judges to cancel financial and criminal travel bans and securing official police clearance."
            }
        ],
        regulatoryFramework: "UAE Federal Decree-Law No. 31 of 2021 (Penal Code), Federal Decree-Law No. 38 of 2022 (Criminal Procedure Code), and Cybercrime Law.",
        strategicAdvantages: [
            "Senior Emirati criminal defense advocates with round-the-clock emergency response",
            "Proven track record in obtaining bail and dismissal of charges at the Public Prosecution stage",
            "Absolute confidentiality protecting the client's public and commercial reputation"
        ],
        faqList: [
            {
                q: "Can a suspect have a lawyer present during police questioning in the UAE?",
                a: "Yes. Under UAE Criminal Procedure Law, suspects have the right to legal representation during Public Prosecution interrogations and court trials. AHA Law Firm advocates provide immediate on-site attendance."
            }
        ],
        relatedSlugs: ["compliance-investigations", "interpol-extradition", "litigation", "international-litigation"]
    },
    {
        slug: "interpol-extradition",
        title: "Interpol Red Notice & Extradition Defense",
        category: "Regulatory & Advisory",
        categoryId: "regulatory-advisory",
        icon: "fa-solid fa-passport",
        statute: "UAE Federal Law No. 39 of 2006 on International Judicial Cooperation",
        heroSummary: "Challenging Interpol Red Notices before the CCF in Lyon, defending against international extradition requests before UAE courts, and removing travel bans.",
        detailedOverview: "AHA Law Firm is a recognized authority in international criminal defense and cross-border extradition. We represent foreign nationals, executives, and high-profile individuals targeted by politically motivated or commercial Red Notices. We submit deletion requests to the Commission for the Control of INTERPOL’s Files (CCF) in France and defend against extradition proceedings before the UAE Courts of Appeal.",
        keyServices: [
            {
                title: "Interpol Red Notice Deletion Applications",
                desc: "Drafting comprehensive legal submissions to the CCF in Lyon, France challenging notices on human rights and commercial grounds."
            },
            {
                title: "Extradition Trial Defense in UAE Courts",
                desc: "Representing requested persons before the UAE Court of Appeal to contest extradition treaties and dual criminality requirements."
            },
            {
                title: "Pre-Emptive CCF Inquiries & Prevention",
                desc: "Filing preemptive requests to block publication of Red Notices before international arrest warrants are broadcast."
            },
            {
                title: "Cross-Border Asylum & Political Protection",
                desc: "Demonstrating political persecution, lack of fair trial safeguards, and human rights risks in requesting states."
            },
            {
                title: "Diffusions & Blue / Silver Notice Defense",
                desc: "Challenging bilateral police diffusions and blue/silver tracking notices used by foreign states to harass targets."
            },
            {
                title: "Emergency Airport Detention Advocacy",
                desc: "Providing immediate legal intervention and emergency bail representation for individuals detained at UAE border entry points."
            }
        ],
        regulatoryFramework: "INTERPOL Constitution (Articles 2 & 3), UAE Federal Law No. 39 of 2006 on International Judicial Cooperation, and bilateral extradition treaties.",
        strategicAdvantages: [
            "Direct experience handling CCF filings in Lyon with exceptional deletion track record",
            "Mastery of UAE bilateral extradition agreements and international human rights jurisprudence",
            "Immediate emergency bail representation upon airport detentions in the UAE"
        ],
        faqList: [
            {
                q: "Can the UAE refuse an extradition request from a foreign state?",
                a: "Yes. Under UAE law, extradition will be denied if the offense is political, commercial rather than criminal, lacks dual criminality, violates human rights, or if the individual will not receive a fair trial in the requesting country."
            }
        ],
        relatedSlugs: ["criminal-defense", "international-litigation", "compliance-investigations", "litigation"]
    },
    {
        slug: "immigration-golden-visa",
        title: "Immigration & Golden Visa Solutions",
        category: "Regulatory & Advisory",
        categoryId: "regulatory-advisory",
        icon: "fa-solid fa-plane-arrival",
        statute: "UAE Cabinet Resolution on Golden Residence & ICP Directives",
        heroSummary: "Strategic legal advisory for the 10-year UAE Golden Visa: real estate investors, entrepreneurs, specialized talents, and corporate executive residency.",
        detailedOverview: "The UAE Golden Visa provides 10-year renewable long-term residency for investors, entrepreneurs, scientists, and outstanding talents. Our immigration lawyers handle the entire application process—from asset valuation and eligibility verification to Dubai Land Department / ICP approvals, family sponsorship, and overturning previous visa rejections.",
        keyServices: [
            {
                title: "Real Estate Investor 10-Year Golden Visa",
                desc: "Processing Golden Visas for investors owning property valued at AED 2,000,000+ (including off-plan and mortgaged real estate)."
            },
            {
                title: "Entrepreneur & Investor Category Filings",
                desc: "Securing approvals for business founders owning enterprises with AED 500,000+ audited annual revenue."
            },
            {
                title: "Specialized Talent & Executive Visas",
                desc: "Facilitating long-term visas for senior C-suite executives, doctors, engineers, and digital tech specialists."
            },
            {
                title: "Visa Rejection Appeals & Overstay Relief",
                desc: "Submitting formal petitions to the ICP/GDRFA to overturn entry bans, visa rejections, and clear overstay fines."
            },
            {
                title: "Family & Domestic Staff Long-Term Sponsorship",
                desc: "Sponsoring spouses, children of any age, and domestic staff with full 10-year residency entitlements."
            },
            {
                title: "Corporate Investor & Green Visa Programs",
                desc: "Advising corporate groups on 5-year Green Visas for skilled freelancers, self-employed professionals, and business partners."
            }
        ],
        regulatoryFramework: "UAE Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) and Dubai GDRFA Golden Residence Framework.",
        strategicAdvantages: [
            "Direct expedited processing through dedicated government immigration portals",
            "100% success rate on eligible investor and executive Golden Visa applications",
            "Comprehensive family and domestic staff sponsorship included"
        ],
        faqList: [
            {
                q: "Can I obtain a UAE Golden Visa if my property is mortgaged?",
                a: "Yes. Following recent regulatory updates, mortgaged properties qualify provided the total property purchase value is AED 2 million or more, regardless of the down payment amount."
            }
        ],
        relatedSlugs: ["real-estate", "corporate-services", "family-personal-status", "wills-probate"]
    },
    {
        slug: "family-personal-status",
        title: "Family & Personal Status Law",
        category: "Regulatory & Advisory",
        categoryId: "regulatory-advisory",
        icon: "fa-solid fa-users",
        statute: "UAE Federal Decree-Law No. 41 of 2022 on Civil Personal Status (Non-Muslims)",
        heroSummary: "Compassionate, authoritative counsel on civil divorce, financial settlements, child custody & travel bans, and Sharia/Civil personal status litigation.",
        detailedOverview: "Family matters demand delicate handling and deep legal expertise. Under UAE Federal Decree-Law No. 41 of 2022, non-Muslim expatriates can access a modern civil family law regime featuring no-fault divorce, joint child custody, and equitable financial alimony. Our family law attorneys represent expatriate and Emirati clients in civil and Sharia family courts across Dubai, Abu Dhabi, and the Northern Emirates.",
        keyServices: [
            {
                title: "Non-Muslim Civil Divorce & Dissolution",
                desc: "Executing rapid no-fault civil divorces without mandatory family guidance conciliation hurdles."
            },
            {
                title: "Child Custody & Parental Rights",
                desc: "Securing joint custody orders, child maintenance, visitation schedules, and child travel ban injunctions."
            },
            {
                title: "Financial Settlements & Alimony Claims",
                desc: "Calculating spousal maintenance, housing allowances, and equitable division of marital assets."
            },
            {
                title: "Sharia Family Court Advocacy",
                desc: "Representing Muslim clients in Talaq, Khul', and personal status disputes under UAE Federal Law No. 28 of 2005."
            },
            {
                title: "Pre-Nuptial & Post-Nuptial Agreements",
                desc: "Drafting enforceable marital property agreements registered under non-Muslim civil court systems."
            },
            {
                title: "Emergency Child Travel Ban & Recovery Orders",
                desc: "Obtaining urgent ex-parte court orders placing airport travel bans to prevent wrongful international child relocation."
            }
        ],
        regulatoryFramework: "UAE Federal Decree-Law No. 41 of 2022 on Civil Personal Status for Non-Muslims and Federal Law No. 28 of 2005 (Personal Status Law).",
        strategicAdvantages: [
            "Bilingual family advocates sensitive to multi-cultural and multi-faith dynamics",
            "Urgent court orders preventing child abduction and imposing airport travel bans",
            "Clear guidance on choosing between Civil Personal Status Court vs home country jurisdiction"
        ],
        faqList: [
            {
                q: "Do non-Muslim expatriates have to attend mandatory reconciliation sessions before getting divorced?",
                a: "No. Under the Civil Personal Status Law (Federal Decree-Law No. 41 of 2022), no-fault civil divorce is granted at the first hearing without mandatory reconciliation sessions."
            }
        ],
        relatedSlugs: ["wills-probate", "family-business-wealth", "private-notary", "litigation"]
    },
    {
        slug: "wills-probate",
        title: "Wills, Probate & Legacy Planning",
        category: "Regulatory & Advisory",
        categoryId: "regulatory-advisory",
        icon: "fa-solid fa-file-signature",
        statute: "DIFC Wills & Probate Registry Rules / Abu Dhabi Civil Wills",
        heroSummary: "Protecting family assets and inheritance rights: DIFC/ADGM Wills registration, Abu Dhabi Civil Wills, probate orders, and estate administration.",
        detailedOverview: "Without a legally registered Will, a deceased individual's UAE bank accounts, corporate shares, and real estate assets are subject to immediate freezing and statutory probate distribution. Our Legacy Planning practice drafts and registers DIFC Wills, Abu Dhabi Civil Family Court Wills, and Dubai Notary Wills. We also administer estates, obtain probate grant orders, and execute asset distribution to heirs.",
        keyServices: [
            {
                title: "DIFC Wills & Probate Registration",
                desc: "Drafting and registering Full Wills, Property Wills, Financial Assets Wills, and Guardianship Wills for non-Muslims."
            },
            {
                title: "Abu Dhabi Civil Wills Registration",
                desc: "Registering bilingual civil wills before the Abu Dhabi Judicial Department Civil Family Court."
            },
            {
                title: "Temporary & Permanent Child Guardianship",
                desc: "Appointing legal guardians for minor children to prevent custody delays in the event of unforeseen tragedy."
            },
            {
                title: "Probate Orders & Estate Distribution",
                desc: "Securing court probate decrees, unfreezing bank accounts, and transferring real estate and corporate shares to heirs."
            },
            {
                title: "Offshore Asset & Trust Integration",
                desc: "Harmonizing UAE registered wills with offshore trusts, BVI holding companies, and foreign testamentary documents."
            },
            {
                title: "Contested Probate & Inheritance Litigation",
                desc: "Representing heirs in inheritance disputes, contested wills, and Sharia estate partition claims before UAE Courts."
            }
        ],
        regulatoryFramework: "DIFC Wills and Probate Registry Rules, Abu Dhabi Civil Family Court Regulations, and Dubai Courts probate administration.",
        strategicAdvantages: [
            "Registered DIFC Wills draftsmen with hundreds of successfully registered wills",
            "Complete freedom of testamentary disposition avoiding default statutory inheritance splits",
            "Expedited unfreezing of bank accounts and transfer of real estate title deeds"
        ],
        faqList: [
            {
                q: "What happens to a non-Muslim's UAE assets if they pass away without a Will?",
                a: "Without a registered Will, bank accounts and assets are frozen, and estate distribution may default to statutory intestacy rules or Sharia principles, often leading to protracted court probate proceedings."
            }
        ],
        relatedSlugs: ["family-personal-status", "family-business-wealth", "real-estate", "private-notary"]
    }
];

// Helper Functions
export const getPracticeBySlug = (slug) => {
    if (!slug) return null;
    const cleanSlug = slug.toLowerCase().trim();
    return practicesData.find((p) => p.slug === cleanSlug) || null;
};

export const getPracticesByCategory = (categoryTitleOrId) => {
    return practicesData.filter(
        (p) =>
            p.category.toLowerCase() === categoryTitleOrId.toLowerCase() ||
            p.categoryId === categoryTitleOrId.toLowerCase()
    );
};

export const getAllPracticeSlugs = () => {
    return practicesData.map((p) => p.slug);
};
