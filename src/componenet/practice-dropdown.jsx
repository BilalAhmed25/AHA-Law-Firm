import React from "react";
import "../assets/css/practice-dropdown.css";

const defaultPracticeAreas = [
    "Litigation & Dispute Resolution",
    "Arbitration & ADR",
    "Corporate & Commercial Law",
    "Contracts & Commercial Transactions",
    "Banking & Financial Law",
    "Bankruptcy & Insolvency",
    "Tax & Regulatory Compliance",
    "Real Estate & Property Law",
    "Maritime & Transport Law",
    "Intellectual Property Protection",
    "Criminal Defense & Penal Law",
    "Interpol Red Notice & Extradition Defense",
    "Immigration & Residency Solutions",
    "Family & Personal Status Law",
    "Wills, Probate & Legacy Planning",
    "General Legal Advisory"
];

function PracticeDropdown({
    id = "practice-area",
    name = "practiceArea",
    label = "Practice Area / Legal Service",
    value = "",
    onChange,
    required = false,
    options = defaultPracticeAreas,
    icon = "fa-solid fa-gavel",
    className = ""
}) {
    const hasValue = value !== null && value !== undefined && value.toString().trim().length > 0;

    return (
        <div className={`practice-dropdown-group ${hasValue ? "has-value" : ""} ${className}`}>
            <div className="practice-dropdown-wrapper">
                <select
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className="practice-dropdown-select"
                >
                    <option value="" disabled hidden></option>
                    {options.map((opt, idx) => (
                        <option key={idx} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>

                {icon && <i className={`practice-dropdown-icon ${icon}`} />}
                <i className="fa-solid fa-chevron-down practice-dropdown-arrow" />

                <label htmlFor={id} className="practice-dropdown-label">
                    {label} {required && <span style={{ color: "#DC2626" }}>*</span>}
                </label>
            </div>
        </div>
    );
}

export default PracticeDropdown;
