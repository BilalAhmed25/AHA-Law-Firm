import React from "react";
import "../assets/css/floating-input.css";

function FloatingInput({
    id,
    label,
    name,
    type = "text",
    value = "",
    onChange,
    icon,
    required = false,
    error,
    rows = 4,
    className = ""
}) {
    const isTextarea = type === "textarea";
    const hasValue = value !== null && value !== undefined && value.toString().trim().length > 0;

    return (
        <div className={`floating-input-group ${hasValue ? "is-active" : ""} ${className}`}>
            <div className="floating-input-wrapper">
                {isTextarea ? (
                    <textarea
                        id={id || name}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder=" "
                        required={required}
                        rows={rows}
                        className={`floating-input-field textarea ${!icon ? "no-icon" : ""}`}
                    />
                ) : (
                    <input
                        id={id || name}
                        name={name}
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder=" "
                        required={required}
                        className={`floating-input-field ${!icon ? "no-icon" : ""}`}
                    />
                )}

                {icon && <i className={`floating-input-icon ${icon}`} />}

                <label htmlFor={id || name} className="floating-input-label">
                    {label} {required && <span style={{ color: "#DC2626" }}>*</span>}
                </label>
            </div>

            {error && <span className="floating-input-error">{error}</span>}
        </div>
    );
}

export default FloatingInput;
