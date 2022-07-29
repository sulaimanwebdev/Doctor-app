import {useState} from 'react'
import {Link} from 'react-router-dom'

const Header = ({page}) => {
   const [nav, setnav] = useState('-translate-x-full')

   return (
    <>
    <div className={`w-full relative z-[9999] ${page === undefined ? "bg-white" : "bg-transparent"}`}>
        <div className={`common-width flex items-center justify-between w-full px-5 py-4 mx-auto ${page === undefined ? "bg-white" : "bg-transparent"}`}>
            <div><Link to="/">{page === undefined ? <img src="/images/logo.svg" className='w-[140px] lg:w-auto' alt="logo" /> : <img src="/images/logo-white.svg" className='w-[140px] lg:w-[185px]' alt="logo" />}</Link></div>
            <div className="hidden lg:flex items-center gap-10">
              <Link to="/"><span className={`${page === undefined ? "text-[#979797]" : "text-white"}`}>Home</span></Link>
              <Link to="/about"><span className={`${page === undefined ? "text-[#979797]" : "text-white"}`}>About Us</span></Link>
              <Link to="/#"><span className={`${page === undefined ? "text-[#979797]" : "text-white"}`}>Content</span></Link>
              <Link to="/contact"><span className={`${page === undefined ? "text-[#979797]" : "text-white"}`}>Contact</span></Link>
            </div>
            <Link to="/contact" className='hidden lg:block'><button className={`flex items-center gap-5 rounded-[4px] py-3 px-7 font-[600] text-white ${page === undefined ? "contact-btn-bg" : "bg-white header-text-grad"}`}>{page === undefined ? <img src="/images/phone-icon.svg" alt="icon" /> : <img src="/images/phone2.svg" alt="icon" />}<span>Contact Us</span></button></Link>
            <button onClick={()=>{nav === "-translate-x-full" ? setnav("translate-x-0") : setnav("-translate-x-full")}} className='flex lg:hidden items-cener justify-between'>{page === undefined ? <img src="/images/burger.svg" className='w-[35px]' alt="burger" /> : <img src="/images/burger-white.svg" className='w-[35px]' alt="burger" />}</button>
          
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