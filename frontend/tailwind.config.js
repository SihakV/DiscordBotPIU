/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#222739",
        "purple-custom": "#3A325A",
        "description-color": "#BABAB8",
        "background-text": "#2C3040",
        "blue-500": "#1e90ff",
        "blue-700": "#0047ab",
        "green": "	#7CFC00",
        "active-sb-color": "#8970F1",
        "gray-custom": "#BDBCBC",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
        ibm: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
