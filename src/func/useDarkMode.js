import { useEffect, useState } from "react";

const useDarkMode = () => {
    const [theme, setTheme] = useState(
        typeof localStorage === "undefined" ? "light" : localStorage?.theme
    );

    const colorTheme = theme === "dark" ? "light" : "dark";
    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", theme);
        }
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

    }, [theme]);

    return [colorTheme, setTheme];
}

export default useDarkMode;