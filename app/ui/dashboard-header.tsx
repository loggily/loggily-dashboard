import { PressEvent } from "@heroui/button";
import { ThemeMode } from "../lib/definitions";
import LightDarkButton from "./light-dark-button";

export default function DashboardHeader({ themeMode, onToggle }: Readonly<{ themeMode: ThemeMode, onToggle: ((e: PressEvent) => void) }>) {

  return (
    <div className="inset-x-0 top-0 z-10 border-b border-emerald-500/25">
      <div className="flex h-10 items-center justify-between gap-8 px-4 sm:px-6">
        <div className="flex gap-4">
          <span className="text-xl font-bold text-emerald-500 shrink-0">Loggily Dashboard</span>
        </div>
        <div className="flex items-center gap-6 max-md:hidden">
          <LightDarkButton themeMode={themeMode} onToggle={onToggle}></LightDarkButton>
        </div>
      </div>
    </div>
  );

}
