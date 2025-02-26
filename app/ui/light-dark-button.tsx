'use client'

import {
  SunIcon as LightSunIcon
} from '@heroicons/react/24/outline';
import {
  MoonIcon as DarkMoonIcon
} from '@heroicons/react/24/solid';
import { Button } from '@heroui/button';
import { useState } from 'react';

const darkModeIcon = <DarkMoonIcon className="size-6 text-emerald-500" />
const lightModeIcon = <LightSunIcon className="size-6 text-emerald-500" />

// interface ThemeAttributes {
//   icon: JSX.Element
// }
// type ThemeMode = "Dark" | "Light"

const themeModePops = new Map()

themeModePops.set("Dark", { "icon": darkModeIcon })
themeModePops.set("Light", { "icon": lightModeIcon })


export default function LightDarkButton() {

  const [themeMode, setThemeMode] = useState("Light")
  const themeProp = themeModePops.get(themeMode)

  function toggleTheme() {

    if (themeMode === "Dark") {
      setThemeMode("Light")
    } else {
      setThemeMode("Dark")
    }
  }

  return (
    <Button
      className='border-emerald-500'
      variant="bordered"
      size="sm"
      radius="full"
      startContent={themeProp.icon}
      isIconOnly
      onPress={toggleTheme} />
  );
}

