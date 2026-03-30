export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
theme: {
  extend: {
    backgroundImage: {
      'custom-gradient': 'linear-gradient(90deg, var(--green), var(--green-deep), var(--black))',
    }
  }
}