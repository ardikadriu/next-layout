import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Playwrite: ["Playwrite IN", "serif"],
        Dancin: ["Dancing Script", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
