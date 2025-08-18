import '/src/style/style.scss';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'prismjs/themes/prism.css';
import Prism from 'prismjs';

try {
    new Swiper('.mySwiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-left',
            prevEl: '.swiper-button-right'
        },
        loop: true,
        spaceBetween: 10,
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 45,
            },
        },
    })
} catch (error) {
    console.log(error)
}

function startCodeTypewriter(element, text, options = {}) {
    const {
        typingSpeed = 150,
        deletingSpeed = 100,
        pauseDuration = 1000,
        loop = false
    } = options;

    let index = 0;
    let deleting = false;

    function type() {
        if (!deleting) {
            if (index <= text.length) {
                element.textContent = text.substring(0, index);
                index++;
                setTimeout(type, typingSpeed);
            } else {

                if (loop) {
                    setTimeout(() => {
                        deleting = true;
                        type();
                    }, pauseDuration);
                }
            }
        } else {
            if (index > 0) {
                element.textContent = text.substring(0, index - 1);
                index--;
                setTimeout(type, deletingSpeed);
            } else {
                if (loop) {
                    setTimeout(() => {
                        deleting = false;
                        type();
                    }, pauseDuration);
                }
            }
        }
    }

    type();
}

const htmlCode = `
<!DOCTYPE html>
 <html>
  <head>
     <title>My Page</title>
  </head>
   <body>
      <h1>Hello World</h1>
   </body>
 </html>`;

const cssCode = `
.card {
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #f9f9f9;
  font-family: sans-serif;
}`;

const jsCode = `
const btn = document.createElement('button');
btn.textContent = 'Click';
document.body.appendChild(btn);

btn.onclick = () => alert('Button');`;

const reactCode = `
import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  return (
    <div>
      <button onClick={() => {
        setMessage('Click')}>Click me</button>
        }
      {message && <p>{message}</p>}
    </div>
  );
}
export default App;`;

const viteCode = `
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
            },
        },
    },
`;

const webpackCode = `
module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },`;

const sassCode = `
  $primary-color: #2196F3;

.button {
  background-color: $primary-color;
  padding: 10px;
  border-radius: 4px;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}`;

const bootstrapCode = `
<div class="container">
  <div class="row">
    <div class="col-md-6">Левая колонка</div>
    <div class="col-md-6">Правая колонка</div>
  </div>
</div>`;

const gitCode = `
git init

git add .

git commit -m "first commit"

git remote add origin https://github.com/depst0r.git

git push -u origin main`;

const htmlSnippet = document.getElementById('html');
const cssSnippet = document.getElementById('css');
const jsSnippet = document.getElementById('js');
const reactSnippet = document.getElementById('react');
const viteSnippet = document.getElementById('vite');
const webpackSnippet = document.getElementById('webpack');
const sassSnippet = document.getElementById('sass');
const bootstrapSnippet = document.getElementById('bootstrap');
const gitSnippet = document.getElementById('git');



startCodeTypewriter(htmlSnippet, htmlCode, {
    typingSpeed: 50,
    deletingSpeed: 30,
    pauseDuration: 1500,
    loop: true
});

startCodeTypewriter(cssSnippet, cssCode, {
    typingSpeed: 50,
    deletingSpeed: 30,
    pauseDuration: 1500,
    loop: true
});

startCodeTypewriter(jsSnippet, jsCode, {
    typingSpeed: 50,
    deletingSpeed: 30,
    pauseDuration: 1500,
    loop: true
});

startCodeTypewriter(reactSnippet, reactCode, {
    typingSpeed: 50,
    deletingSpeed: 30,
    pauseDuration: 1500,
    loop: true
});

startCodeTypewriter(viteSnippet, viteCode, {
    typingSpeed: 50,
    deletingSpeed: 30,
    pauseDuration: 1500,
    loop: true
});

startCodeTypewriter(webpackSnippet, webpackCode, {
    typingSpeed: 50,
    deletingSpeed: 30,
    pauseDuration: 1500,
    loop: true
});

startCodeTypewriter(sassSnippet, sassCode, {
    typingSpeed: 50,
    deletingSpeed: 30,
    pauseDuration: 1500,
    loop: true
});

startCodeTypewriter(bootstrapSnippet, bootstrapCode, {
    typingSpeed: 50,
    deletingSpeed: 30,
    pauseDuration: 1500,
    loop: true
});

startCodeTypewriter(gitSnippet, gitCode, {
    typingSpeed: 50,
    deletingSpeed: 30,
    pauseDuration: 1500,
    loop: true
});


Prism.highlightElement(htmlSnippet);




