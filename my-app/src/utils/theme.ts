export const useTheme = () => {
    const toggleTheme = () => {
        const root = window.document.documentElement;
        root.classList.toggle('dark');
    };

    return { toggleTheme };
};