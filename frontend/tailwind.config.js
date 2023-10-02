/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        skin:{
          pry_text:'var(--pry-col)',
          sec_text:'var(--sec-col)',
          link:'var(--links)',
          link_hover:'var(--links-hover)',
          btnText:'var(--button-text-col)',
        }
      },
      borderColor:{
        skin:{
          section_divide:'var(--section-divide)'
        }
      },
       backgroundColor:{
        skin:{
          button_bg_pry:'var(--button-bg-pry-col)',
          button_bg_sec:'var(--button-bg-sec-col)',
          pry_bg:'var(--pry-col)',
          sec_bg:'var(--sec-col)',
          
        }
    },
    },
  },
  plugins: [],
}

