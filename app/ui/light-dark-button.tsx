import {
  SunIcon as LightSunIcon
} from '@heroicons/react/24/outline';
import {
  MoonIcon as DarkMoonIcon
} from '@heroicons/react/24/solid';
import { Button, PressEvent } from '@heroui/button';
import { ThemeMode } from '../lib/definitions';
import { ThemeAttributes } from '../lib/types';

const darkModeIcon = <DarkMoonIcon className="size-6 text-emerald-500" />
const lightModeIcon = <LightSunIcon className="size-6 text-emerald-500" />

const themeModeAttributesMap: Map<ThemeMode, ThemeAttributes> = new Map()
  .set("dark", { "icon": darkModeIcon })
  .set("light", { "icon": lightModeIcon })

export default function LightDarkButton({ themeMode, onToggle }: Readonly<{ themeMode: ThemeMode, onToggle: ((e: PressEvent) => void) }>) {

  const selectableThemeMode = themeMode === "dark" ? "light" : "dark"
  const themeAttributes = themeModeAttributesMap.get(selectableThemeMode)!

  return (
    <Button
      className='border-emerald-500'
      variant="bordered"
      size="sm"
      radius="full"
      startContent={themeAttributes.icon}
      isIconOnly
      onPress={onToggle}
    />
  );
}

