/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js,jsx,ts,tsx}", // Update according to your project structure
];
export const theme = {
  extend: {
    borderRadius: {
      "custom-10": "10px",
    },
    boxShadow: {
      custom: "0px 24px 50px 0px rgba(0, 0, 0, 0.2)",
      custom2: "0px 20px 50px 0px rgba(0, 0, 0, 0.1)",
    },
    colors: {
      brightGray: "#E4E6ED",
      mintCream: "#F0FFF8",
      greenWhite: "#E9E9E9",
      lavendar: "#E1E1E1",
      aquaSpring: "#E9FBF2",
      golden: "#FFBF00;",
      softPeach: "#EDEDED",
      sherwoodGreen: "#013D29",
      seaGreen: "#219653",
      mercury: "#E7E7E7",
      snowDrift: "#F9F9F9",
    },
    backgroundImage: {
      "custom-green-blue-gradient":
        "linear-gradient(93.17deg, #5ACD84 -22.23%, #56AEFF 106.85%)",
    },
  },
};
export const plugins = [
  function ({ addComponents }) {
    addComponents({
      ".heading1": {
        fontSize: "44px",
        fontWeight: "700",
        lineHeight: "50px",
        letterSpacing: "-0.03em",
        "@media (min-width: 768px)": {
          fontSize: "64px",
          fontWeight: "700",
          lineHeight: "70px",
          letterSpacing: "-0.03em",
        },
      },
      ".heading2": {
        fontSize: "34px",
        fontWeight: "600",
        lineHeight: "50px",
        letterSpacing: "-0.03em",
        "@media (min-width: 768px)": {
          fontSize: "54px",
          fontWeight: "600",
          lineHeight: "60px",
          letterSpacing: "-0.03em",
        },
      },
      ".text-4xl-tight": {
        fontSize: "24px",
        fontWeight: "600",
        lineHeight: "20px",
        letterSpacing: "-0.03em",
      },
      ".text-4xl-normal": {
        fontSize: "24px",
        fontWeight: "600",
        lineHeight: "30px",
        letterSpacing: "-0.03em",
      },
      ".text-3xl": {
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "20px",
      },
      ".text-2xl-sbold-tight": {
        fontSize: "18px",
        fontWeight: "600",
        lineHeight: "30px",
      },
      ".text-2xl-normal": {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "24px",
        "@media (min-width: 768px)": {
          fontSize: "18px",
        },
      },
      ".text-xl-bold": {
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "20.16px",
      },
      ".text-xl-normal": {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "20.16px",
      },
      ".text-lg-sbold": {
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "17.64px",
      },
      ".text-lg-normal": {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "24px",
      },
      ".text-lg-normal-relax": {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "20px",
        letterSpacing: "-0.03em",
      },
      ".text-base-sbold-normal": {
        fontSize: "12px",
        fontWeight: "600",
        lineHeight: "15.12px",
      },
      ".text-base-sbold": {
        fontSize: "12px",
        fontWeight: "600",
        lineHeight: "18px",
      },

      ".text-base-normal": {
        fontSize: "12px",
        fontWeight: "400",
        lineHeight: "15.12px",
      },
    });
  },
];
