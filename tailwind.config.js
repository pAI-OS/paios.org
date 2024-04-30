module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'background-pattern': "url('/img/background-pattern.svg')",
      }),
      fontFamily: {
        sans: ['"DM Sans"', "system-ui"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
