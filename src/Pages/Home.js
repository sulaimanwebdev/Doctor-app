import React from 'react'
import {Link} from 'react-router-dom'
import FeaturesSlider from '../Components/Features-slider'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import TestimonailsSlider from '../Components/Testimonials-slider'

const Home = () => {
  return (
    <>
    <Header/>
    <div className="home-bg bg-[#F8FBFF] w-full overflow-hidden">
    <div className="common-width relative min-h-[600px] flex items-center gap-[130px]  w-full px-5 pt-1 mx-auto">
      <div className='z-10'>
        <div className='font-[Ubuntu] font-[700] text-[37px] text-[#3D5C70] leading-tight'>We Help Make Peoples<br/> Life Better</div>
        <div className='text-[#3D5C70] text-[16px] mt-4 mb-[40px]'>The future of healthcare that combines the best of artificial<br/> intelligence and experts in the medical field</div>
        <Link to="/contact"><button className='contact-btn-bg tracking-normal font-[600] flex items-center gap-5 rounded-[4px] py-3 px-8 text-white'>Make An Inquiry</button></Link>
      </div>
      <img src="images/home.svg" className='w-[570px] absolute -top-1 -right-[35px] z-10' alt="doctor" />
      <img src="images/circle.svg" className='w-[650px] absolute -top-16 -left-[180px]' alt="circle" />
    </div>
    </div>


    <div className="bg-white w-full relative">
    <div className="common-width bg-white flex items-center justify-center gap-[60px]  w-full px-5 py-1 mx-auto">
      <div className='z-10 transform translate-y-5'>
        <div className='mb-2 link-gradient font-[600] text-[16px] font-[Ubuntu]'>Why Choose Us?</div>
        <div className='font-[Ubuntu] font-[700] text-[37px] text-[#3D5C70] leading-tight'>We Helps Revolutionize the Way Doctors and Patients Interact</div>
        <div className='text-[#3D5C70] leading-relaxed text-[14.5px] mt-4 mb-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames natoque vel nec vitae arcu phasellus. Quam pulvinar laoreet molestie commodo quis placerat. Adipiscing nibh netus at vivamus eu ac egestas. Non ullamcorper turpis odio gravida mauris elementum viverra. Consectetur imperdiet pharetra, neque, euismod. Metus etiam cursus elit sagittis, pharetra. Non risus id rhoncus convallis. Enim fermentum a quam enim gravida. </div>
        <Link to="/contact"><button className='contact-btn-bg tracking-normal font-[600] flex items-center gap-5 rounded-[4px] py-3 px-14 text-white'>Inquire</button></Link>
      </div>
      <img src="images/doctor-image.svg" className='w-[480px] block' alt="doctor" />
      <img src="images/circle2.svg" className='w-[100px] absolute -top-16 left-0' alt="circle" />
    </div>
    </div>


    <div className="slider-bg bg-[#F8FBFF] relative w-full">
    <div className="common-width  min-h-[auto] w-full px-5 pt-[250px] pb-[250px] mx-auto">
      <div className="text-center z-10 relative mb-16">
      <div className='mb-2 link-gradient font-[600] text-[17px] font-[Ubuntu]'>Features</div>
      <div className='font-[Ubuntu] font-[700] text-[34px] text-[#3D5C70] leading-tight'>Solving Healthcare Problems with Artificial Intelligence and Cloud Computing</div>
      </div>
      <div className="relative z-10">
        <FeaturesSlider/>
      </div>
    <img src="images/circle3.svg" className='w-[650px] absolute -top-16 -left-[100px]' alt="circle" />
    <img src="images/circle4.svg" className='w-[400px] absolute -top-16 -right-[100px]' alt="circle" />
    </div>
    </div>


    <div className="bg-white w-full relative mt-5">
    <div className="common-width bg-white w-full px-5 py-1 mx-auto">
    <div className="text-center z-10 relative mb-16">
      <div className='mb-2 link-gradient font-[600] text-[17px] font-[Ubuntu]'>How It Works</div>
      <div className='font-[Ubuntu] font-[700] text-[34px] text-[#3D5C70] leading-tight'>Delivering Personalized Healthcare to Every Patient</div>
      </div>
       <div className="w-full grid grid-cols-4 gap-5 z-10 relative">
         <div className='text-center flex items-center justify-center flex-col'>
         <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7713 11.1046C15.7715 10.1044 16.3334 8.74782 16.3334 7.33333C16.3334 5.91885 15.7715 4.56229 14.7713 3.5621C13.7711 2.5619 12.4146 2 11.0001 2C9.58559 2 8.22904 2.5619 7.22885 3.5621C6.22865 4.56229 5.66675 5.91885 5.66675 7.33333C5.66675 8.74782 6.22865 10.1044 7.22885 11.1046C8.22904 12.1048 9.58559 12.6667 11.0001 12.6667C12.4146 12.6667 13.7711 12.1048 14.7713 11.1046Z" stroke="url(#paint0_linear_183_12)" stroke-width="2.67" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.40042 19.4003C6.15076 17.65 8.52473 16.6667 11.0001 16.6667C13.4754 16.6667 15.8494 17.65 17.5997 19.4003C19.3501 21.1507 20.3334 23.5246 20.3334 26H1.66675C1.66675 23.5246 2.65008 21.1507 4.40042 19.4003Z" stroke="url(#paint1_linear_183_12)" stroke-width="2.67" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_183_12" x1="21.5654" y1="4.71699" x2="1.23092" y2="5.22024" gradientUnits="userSpaceOnUse"><stop stop-color="#A04276"/><stop offset="0.0001" stop-color="#EC597C"/><stop offset="1" stop-color="#A04276"/></linearGradient><linearGradient id="paint1_linear_183_12" x1="21.5654" y1="4.71699" x2="1.23092" y2="5.22024" gradientUnits="userSpaceOnUse"><stop stop-color="#A04276"/><stop offset="0.0001" stop-color="#EC597C"/><stop offset="1" stop-color="#A04276"/></linearGradient></defs></svg>
         <div className="link-gradient font-[Ubuntu] font-[700] text-[22px] mt-2">Step 1</div>
          <div className="w-[10px] h-[10px] rounded-full bg-[#3D5C70] mt-3 mb-2 relative"><div className="absolute bg-[#3D5C70] top-1/2 left-full h-[1px] w-[880px]"></div></div>
           <div className='text-[19px] font-[700] text-[#3D5C70] font-[Ubuntu]'>Title Here</div>
          <div className='text-[#3D5C70] text-[14.5px] mt-2 mb-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mattis at commodo lobortis orci ipsum.</div>
         </div>

         <div className='text-center flex items-center justify-center flex-col'>
         <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99996 4.66667H4.33329C3.62605 4.66667 2.94777 4.94762 2.44767 5.44772C1.94758 5.94781 1.66663 6.62609 1.66663 7.33333V23.3333C1.66663 24.0406 1.94758 24.7189 2.44767 25.219C2.94777 25.719 3.62605 26 4.33329 26H17.6666C18.3739 26 19.0521 25.719 19.5522 25.219C20.0523 24.7189 20.3333 24.0406 20.3333 23.3333V7.33333C20.3333 6.62609 20.0523 5.94781 19.5522 5.44772C19.0521 4.94762 18.3739 4.66667 17.6666 4.66667H15M6.99996 4.66667C6.99996 5.37391 7.28091 6.05219 7.78101 6.55229C8.28111 7.05238 8.95938 7.33333 9.66663 7.33333H12.3333C13.0405 7.33333 13.7188 7.05238 14.2189 6.55229C14.719 6.05219 15 5.37391 15 4.66667M6.99996 4.66667C6.99996 3.95942 7.28091 3.28115 7.78101 2.78105C8.28111 2.28095 8.95938 2 9.66663 2H12.3333C13.0405 2 13.7188 2.28095 14.2189 2.78105C14.719 3.28115 15 3.95942 15 4.66667M6.99996 16.6667L9.66663 19.3333L15 14" stroke="url(#paint0_linear_183_2)" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_183_2" x1="21.5653" y1="4.71699" x2="1.2308" y2="5.22024" gradientUnits="userSpaceOnUse"><stop stop-color="#A04276"/><stop offset="0.0001" stop-color="#EC597C"/><stop offset="1" stop-color="#A04276"/></linearGradient></defs></svg>
         <div className="link-gradient font-[Ubuntu] font-[700] text-[22px] mt-2">Step 2</div>
         <div className="w-[10px] h-[10px] rounded-full bg-[#3D5C70] mt-3 mb-2 relative"></div>
           <div className='text-[19px] font-[700] text-[#3D5C70] font-[Ubuntu]'>Title Here</div>
          <div className='text-[#3D5C70] text-[14.5px] mt-2 mb-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mattis at commodo lobortis orci ipsum.</div>
         </div>

         <div className='text-center flex items-center justify-center flex-col'>
         <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.66667 14.3333V12.9999M14 14.3333V10.3333M19.3333 14.3333V7.66658M8.66667 24.9999L14 19.6666L19.3333 24.9999M2 2.33325H26M3.33333 2.33325H24.6667V18.3333C24.6667 18.6869 24.5262 19.026 24.2761 19.2761C24.0261 19.5261 23.687 19.6666 23.3333 19.6666H4.66667C4.31304 19.6666 3.97391 19.5261 3.72386 19.2761C3.47381 19.026 3.33333 18.6869 3.33333 18.3333V2.33325Z" stroke="url(#paint0_linear_183_14)" stroke-width="2.67" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_183_14" x1="27.584" y1="4.8993" x2="1.4533" y2="5.77968" gradientUnits="userSpaceOnUse"><stop stop-color="#A04276"/><stop offset="0.0001" stop-color="#EC597C"/><stop offset="1" stop-color="#A04276"/></linearGradient></defs></svg>
         <div className="link-gradient font-[Ubuntu] font-[700] text-[22px] mt-2">Step 3</div>
         <div className="w-[10px] h-[10px] rounded-full bg-[#3D5C70] mt-3 mb-1.5 relative"></div>
           <div className='text-[19px] font-[700] text-[#3D5C70] font-[Ubuntu]'>Title Here</div>
          <div className='text-[#3D5C70] text-[14.5px] mt-2 mb-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mattis at commodo lobortis orci ipsum.</div>
         </div>

         <div className='text-center flex items-center justify-center flex-col'>
         <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.45673 5.37044C2.75826 4.64248 3.20023 3.98104 3.75738 3.42389C4.31454 2.86673 4.97598 2.42477 5.70393 2.12323C6.43189 1.8217 7.21211 1.6665 8.00005 1.6665C8.78799 1.6665 9.56821 1.8217 10.2962 2.12323C11.0241 2.42477 11.6856 2.86673 12.2427 3.42389L14.0001 5.18122L15.7574 3.42389C16.8826 2.29866 18.4087 1.66652 20.0001 1.66652C21.5914 1.66652 23.1175 2.29866 24.2427 3.42389C25.3679 4.54911 26.0001 6.07525 26.0001 7.66656C26.0001 9.25786 25.3679 10.784 24.2427 11.9092L14.0001 22.1519L3.75738 11.9092C3.20023 11.3521 2.75826 10.6906 2.45673 9.96267C2.1552 9.23471 2 8.45449 2 7.66656C2 6.87862 2.1552 6.0984 2.45673 5.37044Z" stroke="url(#paint0_linear_183_10)" stroke-width="2.67" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_183_10" x1="27.5841" y1="3.98561" x2="1.45994" y2="4.9595" gradientUnits="userSpaceOnUse"><stop stop-color="#A04276"/><stop offset="0.0001" stop-color="#EC597C"/><stop offset="1" stop-color="#A04276"/></linearGradient></defs></svg>
         <div className="link-gradient font-[Ubuntu] font-[700] text-[22px] mt-2">Step 4</div>
          <div className="w-[10px] h-[10px] rounded-full bg-[#3D5C70] mt-4 mb-2"></div>
           <div className='text-[19px] font-[700] text-[#3D5C70] font-[Ubuntu]'>Title Here</div>
          <div className='text-[#3D5C70] text-[14.5px] mt-2 mb-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mattis at commodo lobortis orci ipsum.</div>
         </div>
       </div>
      <img src="images/circle5.svg" className='w-[270px] absolute top-16 left-0 ' alt="circle" />
      <img src="images/circle6.svg" className='w-[400px] absolute bottom-0 right-0 ' alt="circle" />
    </div>
    </div>

    
    <div className="second-bg bg-[#F8FBFF] w-full overflow-hidden mt-10">
    <div className="common-width relative min-h-[900px] flex items-center gap-[130px] justify-end w-full px-5 pt-1 mx-auto">
      <div className='z-10 relative max-w-[600px]'>
      <div className='mb-2 link-gradient font-[600] text-[17px] font-[Ubuntu]'>The Future of HealthCare</div>
        <div className='font-[Ubuntu] font-[700] text-[37px] text-[#3D5C70] leading-tight'>We’re Improving the way Doctors Help Osteopathy Patients</div>
        <div className='text-[#3D5C70] leading-relaxed text-[16px] mt-4 mb-[40px]'>We are here to solve healthcare problems with artifical intelligence, we are building a new system to track the life style and help doctors make the better diagnosis.</div>
        <Link to="/contact"><button className='contact-btn-bg tracking-normal font-[600] flex items-center gap-5 rounded-[4px] py-3 px-14 text-white'>Inquire</button></Link>
      </div>
      <img src="images/doctor-2.svg" className='w-[550px] absolute top-[200px] -left-[35px] z-10' alt="doctor" />
    </div>
    </div>


    <div className="bg-white w-full relative mt-5 mb-6">
    <div className="common-width bg-white w-full px-5 py-1 mx-auto">
    <div className="text-center z-10 relative mb-16">
      <div className='mb-2 link-gradient font-[600] text-[17px] font-[Ubuntu]'>Testimonials</div>
      <div className='font-[Ubuntu] font-[700] text-[34px] text-[#3D5C70] leading-tight'>What our Clients Say</div>
      </div>
       <div className="w-full z-10 relative mx-auto max-w-[700px]">
        <TestimonailsSlider/>
       </div>
      <img src="images/circle6.svg" className='w-[400px] absolute bottom-0 right-0 ' alt="circle" />
    </div>
    </div>


    <div className="footer-bg w-full">
    <div className="common-width bg-transparent w-full px-5 py-5 mx-auto">
      <div className="w-full grid grid-cols-2 gap-2 mt-[70px]">
          <div className='text-white'>
             <div className='font-[600] text-[28px] font-[Ubuntu]'>Get In Touch With Us</div>
             <div className='leading-relaxed text-[15px] font-[300] mt-2 opacity-70'>Have any questions? Feel free to contact us through our contact details below or send us a direct message</div>
              <div className="mt-6">
                <div className="flex items-center gap-2 text-[16p] font-[600]"><img src="/images/mail.svg" alt="mail" />example@email.com</div>
                <div className="flex items-center gap-[7px] text-[16p] font-[600] mt-3"><img src="/images/location.svg" className='transform -translate-x-0.5' alt="mail" />Dr. John Doe, South Dakota 12345</div>
              </div>
          </div>
          <div className='w-full text-white'>
             <input type="text" placeholder='Name*' className='w-full mb-6 placeholder-white placeholder-opacity-70 border-opacity-70 text-white outline-0 border-b border-white bg-transparent pb-1 text-[17px]' />
             <input type="text" placeholder='Phone Number*' className='w-full mb-6 placeholder-white placeholder-opacity-70 border-opacity-70 text-white outline-0 border-b border-white bg-transparent pb-1 text-[17px]' />
             <textarea placeholder='Message*' className='w-full min-h-[110px] max-h-[110px] placeholder-white placeholder-opacity-70 border-opacity-70 text-white outline-0 border-b border-white bg-transparent pb-1 text-[17px] resize-none'></textarea>
             <div className='text-[15px] opacity-70 font-[400] mt-2'>Required fileds are marked *</div>
             <div className="w-full flex items-center justify-end mt-2"><button className='py-3 px-10 rounded bg-white text-[#EC597C] font-[600]'>Send</button></div>
          </div>
      </div>
      <div className="w-full bg-white h-[1px] opacity-70 my-20"></div>
      <Footer/>
    </div>
    </div>
    </>
  )
}

export default Home