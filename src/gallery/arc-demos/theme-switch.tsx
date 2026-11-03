import { useState } from "react";
import { ThemeSwitch } from "@/vendor/arc/theme-switch/theme-switch";
import type { Theme } from "@/vendor/arc/theme-switch/theme-switch";

export function AppearanceToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  return (
    <ThemeSwitch
      theme={theme}
      iconOnly
      onThemeChange={next => {
        if (!document.startViewTransition) return setTheme(next);
        document.startViewTransition(() => setTheme(next));
      }}
    />
  );
}
