import ipv4 from './assets/images/IPV4-cert.png'
import nubcert from './assets/images/NUB-cert.png'
import bsaucert from './assets/images/BSAU-cert.jpeg'
import vlan from './assets/images/VLan Fundamentals.png'
import Net from './assets/images/Networking.jpeg'
import ipv6 from './assets/images/IPv6.jpeg'
import outskill from './assets/images/Outskill.png'

function Cert({ setActiveImage }) {
  return (
    <section id='cert' class="w-full bg-[#10173a] flex flex-col pb-30 px-30">
      <h1 class="text-center text-4xl font-extrabold text-blue-700 pb-20">Certificates</h1>
      <div class="bg-[#10172a] p-10 rounded-2xl overflow-x-scroll scrollbar-trans flex gap-3 items-stretch min-h-100">

        {/* Card 1 */}
        <div onClick={() => setActiveImage(bsaucert)} class="bg-white max-w-80 min-w-80 pb-5 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-[0.8s] flex flex-col cursor-pointer">
          <img src={bsaucert} alt="team" class="h-60 w-full mb-4 object-cover shrink-0" />
          <div class="grow">
            <h1 class="text-2xl font-serif mx-2 font-bold">BSAU Certificate</h1>
            <p class="font-thin font-sans text-[12px] mx-2">1st Semester of Academic Year 2023-2024. Certificate of Appriciation / Academic Exellence Award.</p>
          </div>
        </div>
        
        {/* Card 2 */}
        <div onClick={() => setActiveImage(nubcert)} class="bg-white max-w-80 min-w-80 pb-5 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-[0.8s] flex flex-col cursor-pointer">
          <img src={nubcert} alt="team" class="h-60 w-full mb-4 object-cover shrink-0" />
          <div class="grow">
            <h1 class="text-2xl font-serif mx-2 font-bold">NUB Certificate</h1>
            <p class="font-thin font-sans text-[12px] mx-2">Certificate of Attendance <b>"THE END IS JUST THE START" 05/20/2022</b></p>
          </div>
        </div>
        
        {/* Card 3 */}
        <div onClick={() => setActiveImage(ipv4)} class="bg-white max-w-80 min-w-80 pb-5 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-[0.8s] flex flex-col cursor-pointer">
          <img src={ipv4} alt="team" class="h-60 w-full mb-4 object-cover shrink-0" />
          <div class="grow">
            <h1 class="text-2xl font-serif mx-2 font-bold">IPV4 Fundamentals</h1>
            <p class="font-thin font-sans text-[12px] mx-2">Certificate of Course Completion for IPv4 Fundamentals</p>
          </div>
        </div>
        
        {/* Card 4 */}
        <div onClick={() => setActiveImage(vlan)} class="bg-white max-w-80 min-w-80 pb-5 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-[0.8s] flex flex-col cursor-pointer">
          <img src={vlan} alt="team" class="h-60 w-full mb-4 object-cover shrink-0" />
          <div class="grow">
            <h1 class="text-2xl font-serif mx-2 font-bold">VLan Fundamentals</h1>
            <p class="font-thin font-sans text-[12px] mx-2">Certificate of Course Completion for VLan Fundamentals</p>
          </div>
        </div>
        
        {/* Card 5 */}
        <div onClick={() => setActiveImage(Net)} class="bg-white max-w-80 min-w-80 pb-5 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-[0.8s] flex flex-col cursor-pointer">
          <img src={Net} alt="team" class="h-60 w-full mb-4 object-cover shrink-0" />
          <div class="grow">
            <h1 class="text-2xl font-serif mx-2 font-bold">Networking Basics</h1>
            <p class="font-thin font-sans text-[12px] mx-2">Certificate of Course Completion Basic Networking</p>
          </div>
        </div>
        
        {/* Card 6 */}
        <div onClick={() => setActiveImage(ipv6)} class="bg-white max-w-80 min-w-80 pb-5 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-[0.8s] flex flex-col cursor-pointer">
          <img src={ipv6} alt="team" class="h-60 w-full mb-4 object-cover shrink-0" />
          <div class="grow">
            <h1 class="text-2xl font-serif mx-2 font-bold">IPv6 Fundamentals</h1>
            <p class="font-thin font-sans text-[12px] mx-2">Certificate of Course Completion for IPv6 Fundamentals</p>
          </div>
        </div>
        
        {/* Card 7 */}
        <div onClick={() => setActiveImage(outskill)} class="bg-white max-w-80 min-w-80 pb-5 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-[0.8s] flex flex-col cursor-pointer">
          <img src={outskill} alt="team" class="h-60 w-full mb-4 object-cover shrink-0" />
          <div class="grow">
            <h1 class="text-2xl font-serif mx-2 font-bold">OutSkill Certificate</h1>
            <p class="font-thin font-sans text-[12px] mx-2">Certificate of Course Completion for Generative AI Mastermind</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Cert
