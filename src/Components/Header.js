import {useState} from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
   const [nav, setnav] = useState('-translate-x-full')
  return (
    <>
    <div className="w-full bg-white sticky top-0 z-[9999]">
        <div className="common-width flex items-center justify-between w-full px-5 bg-white py-4 mx-auto">
            <div><Link to="/"><img src="/images/logo.svg" className='w-[140px] lg:w-auto' alt="logo" /></Link></div>
            <div className="hidden lg:flex items-center gap-10">
              <Link to="/"><span className='text-[#979797]'>Home</span></Link>
              <Link to="/about"><span className='text-[#979797]'>About Us</span></Link>
              <Link to="/#"><span className='text-[#979797]'>Content</span></Link>
              <Link to="/contact"><span className='text-[#979797]'>Contact</span></Link>
            </div>
            <Link to="/contact" className='hidden lg:block'><button className='contact-btn-bg flex items-center gap-5 rounded-[4px] py-3 px-7 font-[600] text-white'><img src="/images/phone-icon.svg" alt="icon" />Contact Us</button></Link>
            <button onClick={()=>{nav === "-translate-x-full" ? setnav("translate-x-0") : setnav("-translate-x-full")}} className='flex lg:hidden items-cener justify-between'><img src="/images/burger.svg" className='w-[35px]' alt="burger" /></button>
          
          <div className={`block lg:hidden w-full h-fit absolute left-0 top-[69px] border-b border-b-[#DCDCDC] z-50 bg-white text-center transition transform ${nav}`}>
              <div className='py-4'><Link to="/"><span className='w-full text-[#979797]'>Home</span></Link></div>
              <div className="w-full h-[1px] bg-[#DCDCDC]"></div>
              <div className='py-4'><Link to="/about"><span className='w-full text-[#979797]'>About Us</span></Link></div>
              <div className="w-full h-[1px] bg-[#DCDCDC]"></div>
              <div className='py-4'><Link to="/#"><span className='w-full text-[#979797]'>Content</span></Link></div>
              <div className="w-full h-[1px] bg-[#DCDCDC]"></div>
              <div className='py-4'><Link to="/contact"><span className='w-full text-[#979797]'>Contact</span></Link></div>
              <div className='tex-center flex items-center justify-center mt-4 mb-6'><Link to="/contact"><button className='contact-btn-bg flex items-center gap-5 rounded-[4px] py-3 px-7 font-[600] text-white'><img src="/images/phone-icon.svg" alt="icon" />Contact Us</button></Link></div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Header