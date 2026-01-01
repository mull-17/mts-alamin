/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark : '#0f172a',
        secondary : '#64748b',
        whitee : '#F5F5F5',
        hijau : '#15803d',
        abu :'#374151',
        grayy : '#111827',
      },
       screens: {
        '2xl' : '1200px',
      },
  },
},
  plugins:[require('tailwindcss-motion'),
     require('@tailwindcss/line-clamp'),
  ],
}


