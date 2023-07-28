import React, { useContext, useState } from "react";
import { defaultTheme } from "./theme";

const ThemeContext = React.createContext({
  theme: defaultTheme,
  updateTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const updateTheme = ({
    colors = {},
    spacing = {},
    fontSize = {},
    fontFamily = {},
  }) => {
    const newTheme = {
      colors: { ...colors, ...defaultTheme.colors },
      spacing: { ...spacing, ...defaultTheme.spacing },
      fontSize: { ...fontSize, ...defaultTheme.fontSize },
      fontFamily: { ...fontFamily, ...defaultTheme.fontFamily },
    };

    setTheme(newTheme);
  };

  const value = { theme, updateTheme };


  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
