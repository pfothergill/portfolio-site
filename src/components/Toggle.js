import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const Toggle = ({ checked, onChange }) => {
    // const [isDarkMode, setIsDarkMode] = useState(() => false);

    return (
        <DarkModeToggle
            onChange={onChange}
            checked={checked}
            size={60}
        />
    );
}

export default Toggle;
