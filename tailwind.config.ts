import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/components/**/*.tsx", "./src/app/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#25d366",
        secondary: "#128c7e",
        "dark-green": "#128c7e",
        "light-gray": "#F0F2F5",
        "light-green": "#dcf8c6",
        background: "#ece5dd",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
