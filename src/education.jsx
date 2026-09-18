import Me from './assets/images/Me.jpg'
import './App.css'
import basc from './assets/images/basc.png'
import vrshs from './assets/images/VRSHS.png'
import cbes from './assets/images/cbes.png'

// We bypass the git caching issue by importing it under a clean name 
// or using a relative fallback if Git messed up the exact casing on GitHub.
import nub from './assets/images/NUB.png' 

function Educ(){
    return(
        <>
        <section className="flex justify-center bg-[#10172a] py-24 px-4 flex-col">
            <div className="items-center-safe">
                <h1 className="text-blue-400 font-extrabold text-center text-4xl mb-10">Education</h1>
            </div>
            
            {/* Bulacan State Agricultural University */}
            <div>
                <div className="px-24 py-5 flex-row flex gap-20">
                    <div>
                        <img className="w-100 rounded-4xl" src={basc} alt="BASC Logo" />
                    </div>
                    <div className='justify-center flex flex-col'>
                        <h1 className='text-2xl text-blue-400 font-bold text-left font-serif'>Bulacan State Agricultural University</h1>
                        <p className='text-white font-thin my-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora eligendi at odit culpa illum eos accusantium eaque consequatur quisquam repellendus eveniet vel cum, sit quibusdam exercitationem pariatur iure. Ipsam?</p>
                        <p className='text-blue-400 font-bold my-5 text-justify '>2023 - 2027</p>
                    </div>
                </div>
            </div>

            {/* National University Baliwag */}
            <div>
                <div className="px-24 py-5 flex-row flex gap-20">
                    <div>
                        <img className="w-100 rounded-4xl" src={nub} alt="NU Baliwag Logo" />
                    </div>
                    <div className='justify-center flex flex-col'>
                        <h1 className='text-2xl text-blue-400 font-bold text-left font-serif'>National University Baliwag</h1>
                        <p className='text-white font-thin my-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora eligendi at odit culpa illum eos accusantium eaque consequatur quisquam repellendus eveniet vel cum, sit quibusdam exercitationem pariatur iure. Ipsam?</p>
                        <p className='text-blue-400 font-bold my-5 text-justify '>2021 - 2023</p>
                    </div>
                </div>
            </div>

            {/* Vedasto R. Santiago Highschool */}
            <div>
                <div className="px-24 py-5 flex-row flex gap-20">
                    <div>
                        <img className="w-100 rounded-4xl" src={vrshs} alt="VRSHS Logo" />
                    </div>
                    <div className='justify-center flex flex-col'>
                        <h1 className='text-2xl text-blue-400 font-bold text-left font-serif'>Vedasto R. Santiago Highschool</h1>
                        <p className='text-white font-thin my-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora eligendi at odit culpa illum eos accusantium eaque consequatur quisquam repellendus eveniet vel cum, sit quibusdam exercitationem pariatur iure. Ipsam?</p>
                        <p className='text-blue-400 font-bold my-5 text-justify '>2016 - 2021</p>
                    </div>
                </div>
            </div>

            {/* Cuayan Bugtong Elementary School */}
            <div>
                <div className="px-24 py-5 flex-row flex gap-20">
                    <div>
                        <img className="w-100 rounded-4xl" src={cbes} alt="CBES Logo" />
                    </div>
                    <div className='justify-center flex flex-col'>
                        <h1 className='text-2xl text-blue-400 font-bold text-left font-serif'>Cuayan Bugtong Elementary School</h1>
                        <p className='text-white font-thin my-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora eligendi at odit culpa illum eos accusantium eaque consequatur quisquam repellendus eveniet vel cum, sit quibusdam exercitationem pariatur iure. Ipsam?</p>
                        <p className='text-blue-400 font-bold my-5 text-justify '>2009 - 2016</p>
                    </div>
                </div>
            </div>

        </section>
        </>
    );
}
export default Educ;
