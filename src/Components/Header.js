import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="w-full bg-white">
        <div className="common-width flex items-center justify-between w-full px-5 bg-white py-4 mx-auto">
            <div><Link to="/"><img src="/images/logo.svg" alt="logo" /></Link></div>
            <div className="flex items-center gap-10">
              <Link to="/"><span className='text-[#979797]'>Home</span></Link>
              <Link to="/about"><span className='text-[#979797]'>About Us</span></Link>
              <Link to="/#"><span className='text-[#979797]'>Content</span></Link>
              <Link to="/contact"><span className='text-[#979797]'>Contact</span></Link>
            </div>
            <Link to="/contact"><button className='contact-btn-bg flex items-center gap-5 rounded-[4px] py-3 px-7 font-[600] text-white'><img src="/images/phone-icon.svg" alt="icon" />Contact Us</button></Link>
        </div>
    </div>
    </>
  )
}

export default Header