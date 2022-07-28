import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='bg-transparent text-white'>
    <div className='bg-transparent text-white flex items-start flex-col footerBreak:flex-row justify-start gap-[50px] footerBreak:gap-[40px] xl:gap-[80px]'>
      <div className='w-fit mr-0 footerBreak:mr-[50px]'><Link to="/"><img src="/images/logo-footer.svg" className='w-[200px]' alt="logo" /></Link></div>
      <div className="footerGrid grid grid-cols-2 footerBreak:grid-cols-4 gap-[40px] sm:gap-[70px] footerBreak:gap-[20px] xl:gap-[60px]">
        <div>
            <div className='font-[700] font-[Ubuntu] text-[19px] mb-5'>Quick Links</div>
            <div className="flex flex-col gap-5">
                <Link to="/"><span className='text-white font-[400]'>Home</span></Link>
                <Link to="#/"><span className='text-white font-[400]'>Features</span></Link>
                <Link to="#/"><span className='text-white font-[400]'>How It Works</span></Link>
                <Link to="/about"><span className='text-white font-[400]'>About Us</span></Link>
                <Link to="/contact"><span className='text-white font-[400]'>Contact Us</span></Link>
            </div>
        </div>

        <div>
            <div className='font-[700] font-[Ubuntu] text-[19px] mb-5'>Legal</div>
            <div className="flex flex-col gap-5">
                <Link to="#/"><span className='text-white font-[400]'>Terms of Service</span></Link>
                <Link to="#/"><span className='text-white font-[400]'>Privacy Policy</span></Link>
            </div>
        </div>

        <div>
            <div className='font-[700] font-[Ubuntu] text-[19px] mb-5'>Social Media</div>
            <div className="flex flex-col gap-5">
                <a href="/#"><span className='text-white font-[400]'>Facebook</span></a>
                <a href="/#"><span className='text-white font-[400]'>Instagram</span></a>
                <a href="/#"><span className='text-white font-[400]'>Twitter</span></a>
            </div>
        </div>

        <div>
            <div className='font-[700] font-[Ubuntu] text-[19px] mb-5'>Contact</div>
            <div className="flex flex-col gap-5">
                <a href="mailto:someone@example.com"><span className='text-white font-[400]'>example@email.com</span></a>
                <a href="tel:someone@example.com"><span className='text-white font-[400]'>(222) 555-8888</span></a>
            </div>
        </div>
      </div>
    </div>
    <div className="w-full text-center flex items-center justify-center text-[15px] mt-[100px] font-[400]">Copyright {new Date().getFullYear()} Bart Dirks, All Rights Reserved</div>
    </div>
    </>
  )
}

export default Footer