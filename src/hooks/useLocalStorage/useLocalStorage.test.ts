import { renderHook } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";
import { themeOptions } from "../../utils/themeOptions/themeOptions";

describe("Given the setTheme and getTheme functions", () => {
  describe("When they are invoked to save and return theme", () => {
    test("Then it should be able to access the theme at the localStorage", () => {
      const value = themeOptions.light;

      const {
        result: {
          current: { getTheme, setTheme },
        },
      } = renderHook(() => useLocalStorage());

      setTheme(value);

      expect(getTheme()).toStrictEqual(value);
    });
  });
});
