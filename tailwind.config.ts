import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "custom-big": { min: "1440px", max: "1555px" }, // matches isBigScreen
        "custom-medium": { min: "768px", max: "1439px" }, // matches isMediumScreen
        "custom-medium-small": { min: "400px", max: "767px" }, // matches isMediumSmallScreen
        "custom-small": { min: "300px", max: "399px" }, // matches isSmallScreen
      },
      backgroundImage: {
        "custom-radial": "radial-gradient(circle, white 40%, gray 80%)",
      },
      boxShadow: {
        "rainbow-7": "0 0 15px rgba(148, 0, 211, 0.8)", // Violet
        "rainbow-1": "0 0 15px rgba(255, 0, 0, 0.8)", // Red
        "rainbow-2": "0 0 15px rgba(255, 127, 0, 0.8)", // Orange
        "rainbow-3": "0 0 15px rgba(255, 255, 0, 0.8)", // Yellow
        "rainbow-4": "0 0 15px rgba(0, 255, 0, 0.8)", // Green
        "rainbow-5": "0 0 15px rgba(0, 0, 255, 0.8)", // Blue
        "rainbow-6": "0 0 15px rgba(75, 0, 130, 0.8)", // Indigo
      },
      borderColor: {
        "rainbow-1": "rgba(255, 0, 0, 1)", // Red
        "rainbow-2": "rgba(255, 127, 0, 1)", // Orange
        "rainbow-3": "rgba(255, 255, 0, 1)", // Yellow
        "rainbow-4": "rgba(0, 255, 0, 1)", // Green
        "rainbow-5": "rgba(0, 0, 255, 1)", // Blue
        "rainbow-6": "rgba(75, 0, 130, 1)", // Indigo
        "rainbow-7": "rgba(148, 0, 211, 1)", // Violet
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
