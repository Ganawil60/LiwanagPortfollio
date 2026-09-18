import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './header.jsx'
import Me from './assets/images/Me.jpg'
import Cert from './Cert.jsx'
import './App.css'
import Skills from './Skills.jsx'
import Educ from './education.jsx'
import basc from './assets/images/basc.png'

function App() {
  const [count, setCount] = useState(0)
  const [activeImage, setActiveImage] = useState(null)

  return (
    <>
      <Header/>
      <main class="pt-15 grid grid-cols-5 grid-rows-5 h-screen w-full">
        <div class="bg-cover bg-[#10172a]  row-span-5 col-span-3 flex justify-center items-center">
          <div class="[&>h1]:text-7xl  [&>h3]:font-mono [&>h3]:mb-10 font-serif [&>h3]:text-sky-400 [&>h3]:text-[23px] mx-25">
            <h3>Hi I'am Lee Andrei!</h3>
            <h1>FrontEnd Developer</h1>
            <h1>UI/UX Designer</h1>
            <h1>IT Student</h1>
            <h3 class="text-sky-400 font-semibold tracking-wide mt-10">"Turning your Design to reality"</h3>
            <p class="text-justify font-sans">An Aspiring FrontEnd Developer with passion for Beautiful Design with Creativity and Functionality. Currently Studying BS in Information Technology</p>
          </div>
        </div>
        <div class="bg-[#10172a] row-span-5 col-span-2 justify-center items-center p-5">
          <img src={Me} alt="Lee Andrei Liwanag" class="[mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)] h-130 w-auto rounded-2xl" />
        </div>
          <div class="max-w-md mx-auto mt-10 col-span-5 mb-5">
            <a href="#skills">
              <div class="flex justify-between items-center px-5 py-4 font-semibold text-sky-400 cursor-pointer list-none bg-[#10172a] hover:bg-[#10173a] transition-colors duration-200 select-none">
                <span>View More</span>
                <svg class="w-5 h-5 text-gray-500 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </a>
          </div>
      </main>
      <Skills/>
      <Educ/>
      
      <Cert setActiveImage={setActiveImage} />
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)} 
          class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div class="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-xl bg-slate-900 p-2 shadow-2xl">
            <img 
              src={activeImage} 
              alt="Certificate Fullscreen" 
              class="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()} 
            />
            <button 
              onClick={() => setActiveImage(null)}
              class="absolute top-4 right-4 bg-black/60 text-white hover:bg-black/90 w-10 h-10 rounded-full flex items-center justify-center font-bold font-sans text-xl transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
