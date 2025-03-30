import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|autocomplete|button|input|table|popover|divider|ripple|spinner|form|listbox|scroll-shadow|checkbox|spacer).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [heroui({
    // themes: {
    //   dark: {
    //     colors: {
    //       default: {
    //         100: "#d1fae5",
    //         DEFAULT: "#BEF264",
    //         foreground: "#10b981"
    //       },
    //       focus: "#BEF264",
    //       overlay: "#10b981",
    //       background: "#064e3b",
    //     }
    //   }
    // }
  })],
} satisfies Config;
