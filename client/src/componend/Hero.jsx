import brain from '../assets/brain_Hero.png'
import brainS from '../assets/Group.png';
import wave from '../assets/wave.png';
const HeroSection = () => {

  return (
    <div className=" pb-5 ">
      <div className=" container h-auto mx-auto text-center border-2 pb-5 lg:h-[85vh] overflow-hidden">
        <section>
          <h1 className="font-rochester text-[3rem] tracking-widest">Your Mental Health Matters</h1>
        </section>

        <section className='flex flex-col md:flex-row justify-center items-center'>
          <div className=' hidden md:block text-sm md:text-2xl'>
            <h1> You<span className='font-bold'>  don't </span> have<br /> to <span className='font-bold'> struggle </span> in <br />silence!</h1>
            <img src={wave} alt="brain" width={180} />
          </div>
          <div>
            <img src={brain} alt="brain" width={650} className='min-w-12' />
          </div>

          <div className=' flex flex-col gap-20'>
            <div className='justify-center items-center flex-col hidden md:block text-sm md:text-xl'>
              <img src={brainS} alt="brain" width={120} />
              <h1 className=' hidden md:block text-sm md:text-xl'>There's hope when <br /> your barain tell's <br />you there isn't</h1>
            </div>
            <div className=' flex flex-col gap-5 items-center '>
              <h1 className=' text-sm md:text-2xl hidden md:block'><span className='font-bold'>Healing</span> takes time,<br /> asking for help is a<br /><span className='font-bold'>courageous</span> step</h1>
              <button onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }} className=' w-32 text-sm tracking-wide bg-[#F7C1F8] border-2 border-gray-600 py-2 rounded-full'>Take a step</button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HeroSection;