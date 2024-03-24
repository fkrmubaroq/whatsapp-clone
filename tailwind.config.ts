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
        placeholder: "#667781",
        "light-blue": "#34B7F1",
        "light-green": "#d9fdd3",
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
