# cv

npm create vite@latest
npm install
npm install react-router-dom // sayfalar arası route etmek için
npm install react-toastify // ekranda verilen hata mesajlarını görmek için
npm install react-icons // ikon eklemek için


npm install react-axios // veritabanı sorgu atmak için

https://react-bootstrap.netlify.app/
npm install react-bootstrap bootstrap

{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

index.html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">



npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

npm install @headlessui/react @heroicons/react