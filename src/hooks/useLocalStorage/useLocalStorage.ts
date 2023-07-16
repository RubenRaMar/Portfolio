import { themeOptions } from "../../utils/themeOptions/themeOptions";

const useLocalStorage = () => {
  const setTheme = (value: string) => {
    localStorage.setItem(themeOptions.theme, value);
  };

  const getTheme = () => localStorage.getItem(themeOptions.theme);

  return { setTheme, getTheme };
};

export default useLocalStorage;
