/** @type {import('tailwindcss').Config} */
module.exports = {
  /** tells tailwind to scan all index.html and all files ending with
   * .js or .jsx within the src directory
   */
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx}" 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

