import React from "react";

const Button = ({ styles }) => (
    <button
        className={`py-4 px-6 bg-blue-gradient rounded-md font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
        type="button"
    >
        Get Started
    </button>
);

export default Button;
