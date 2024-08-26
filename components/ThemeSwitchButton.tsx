/* 'use client'

import React, { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";


export default function ThemeSwitchButton() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark");
    }
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
} */


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