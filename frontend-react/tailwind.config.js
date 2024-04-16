/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT(
  {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [ 
  ],
}
)

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"], // Update paths to your components
//   theme: {
//     extend: {}, // Add custom styles here (optional)
//   },
//   plugins: [], // Add plugins here (optional)
// };