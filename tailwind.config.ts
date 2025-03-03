import { type Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
        inter: "var(--font-inter)",
        manrope: "var(--font-manrope)",
        roboto: "var(--font-roboto)",
        publicSans: "var(--font-public-sans)",
        quicksand: "var(--font-quicksand)",
        plusJakartaSans: "var(--font-plus-jakarta-sans)",
      },
    },
  },
  plugins: [],
};

export default config;
