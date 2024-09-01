'use client'

import React from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export default function ThemeSwitchButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme-switch"
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
      />
    </div>
  );
}