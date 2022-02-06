import React from 'react';
import useDarkMode from 'use-dark-mode';
import DarkModeToggle from "react-dark-mode-toggle";

const CustomDarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <DarkModeToggle
      className="util-margin-right-1_5"
        onChange={darkMode.toggle}
        checked={darkMode.value}
        size={60}
    /> 
  );
};

export default CustomDarkModeToggle;