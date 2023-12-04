/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      xs: ["0.875rem"], //14px
      sm: ["1rem"], //16px
      base: ["1.125rem"], //18px
      md: ["1.25rem"], //20px
      lg: ["1.5rem"], //24px
      xl: ["1.75rem"], //28px
      "2xl": ["2.375rem"], //38px
      "3xl": ["2.875rem"], //46px
      "4xl": ["3.875rem"], //62px
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)"],
        serif: ["var(--font-merchant)"],
      },
      colors: {
        // Primary
        white: "hsl(var(--white))",
        black: "hsl(var(--black))",
        cream: "hsl(var(--cream))",
        red: "hsl(var(--red))",
        yellow: "hsl(var(--yellow))",
        orange: "hsl(var(--orange))",
        green: "hsl(var(--green))",
        // Secondary
        lightRed: "hsl(var(--light-red))",
        darkRed: "hsl(var(--dark-red))",
        lightYellow: "hsl(var(--light-yellow))",
        darkYellow: "hsl(var(--dark-yellow))",
        paleYellow: "hsl(var(--pale-yellow))",
        extraLightGreen: "hsl(var(--extra-light-green))",
        lightGreen: "hsl(var(--light-green))",
        darkGreen: "hsl(var(--dark-green))",
        gray: "hsl(var(--gray))",
        lightGray: "hsl(var(--light-gray))",

        // Defaults

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
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
