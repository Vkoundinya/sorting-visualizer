/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'homepage': "url('../src/assets/images/homepage.jpg')",
      },
      backgroundColor:{
        'sorter':'#D5E8F9',
        'infoCard':"#FFF3E0",
        'sortBar':'#4169E1'
      },
      textColor:{
        infoColor:"#333333",
        snippetText: '#FF6F61'
      },
      borderRadius:{
        circle: '50%'
      },
      borderColor:{
        "buttonBorder": '#CCCCCC',
      },
      height:{
        "ide":'60vh',
        "snippet":'50vh'
      },
      width:{
        'snippet': "760px"
      },
      boxShadow:{
        snippet: 'box-shadow: 0 2px 1px rgba(0,0,0,0.09), 0 4px 2px rgba(0,0,0,0.09), 0 8px 4px rgba(0,0,0,0.09), 0 16px 8px rgba(0,0,0,0.09), 0 32px 16px rgba(0,0,0,0.09);'
      }
    },
  },
  plugins: [],
}

