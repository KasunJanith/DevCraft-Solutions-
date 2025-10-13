import { useDarkMode } from '../hooks/useDarkMode';

const DarkModeToggle = () => {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-700 transition-colors hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
    >
      <span className="material-symbols-outlined block dark:hidden">light_mode</span>
      <span className="material-symbols-outlined hidden dark:block">dark_mode</span>
    </button>
  );
};

export default DarkModeToggle;