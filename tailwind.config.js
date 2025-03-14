/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        xs: "576px", // Extra small devices (Bootstrap doesn't have xs)
        sm: "576px", // Small devices (landscape phones)
        md: "768px", // Medium devices (tablets)
        lg: "992px", // Large devices (desktops)
        xl: "1200px", // Extra large devices (large desktops)
        "2xl": "1400px", // Bootstrap 5.3+ extra breakpoint
      },
      colors: {
        // Add your custom colors here
        "brand-color": "#92278F",
        "icon-color": "#4F2C70",
        "secondary-color": "#E6E3EC",
      },
    },
  },
  plugins: [],
};
