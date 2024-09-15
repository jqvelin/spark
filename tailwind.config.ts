import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)"
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))"
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))"
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                    darker: "hsl(var(--primary-darker))"
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))"
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))"
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))"
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))"
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))"
                }
            },
            animation: {
                shine: "5s linear infinite shine",
                "running-line": "8s linear infinite running-line",
                "fade-in": "1s fade-in ease-in-out forwards",
                "pop-up": "pop-up 0.5s ease-in-out forwards"
            },
            keyframes: {
                shine: {
                    "0%": {
                        "background-size": "100%"
                    },
                    "50%": {
                        "background-size": "150%"
                    },
                    "100%": {
                        "background-size": "100%"
                    }
                },
                "running-line": {
                    "0%": {
                        transform: "translateX(0)"
                    },
                    "40%": {
                        transform: "translateX(-100%)"
                    },
                    "50%": {
                        transform: "translateX(-100%)"
                    },
                    "90%": {
                        transform: "translateX(0)"
                    },
                    "100%": {
                        transform: "translateX(0)"
                    }
                },
                "pop-up": {
                    "0%": {
                        transform: "translateY(0)",
                        scale: "1"
                    },
                    "100%": {
                        transform: "translateY(-10px)",
                        scale: "1.02"
                    }
                },
                "fade-in": {
                    from: {
                        opacity: "0"
                    },
                    to: {
                        opacity: "1"
                    }      
                }
            }
        }
    },
    plugins: [require("tailwindcss-animate")]
};
export default config;
