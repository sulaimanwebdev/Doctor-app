import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <>
    <div className="w-full bg-[#F8FBFF]">
    <div className="footer-bg w-full">
    <div className="common-width bg-transparent w-full mx-auto">
      <Header page="not-home-page"/>
       <div className="w-full px-5 h-[280px] lg:h-[350px] flex items-center">
          <div>
            <div className="w-[60px] h-[3px] bg-white mb-2"></div>
          <div className='text-white font-[600] text-[29px]'>Contact</div>
          </div>
       </div>
    </div>
    </div>



    <div className="bg-[#F8FBFF] w-full relative">
    <div className="common-width bg-transparent w-full lg2:px-5 lg2:py-20 mx-auto">
     <div className="bg-[#F8F9FA] mx-auto">
     <div className="grid grid-cols-1 lg2:grid-cols-[500px,1fr] w-full  mx-auto">
          <div className="relative h-[400px] lg2:h-[773px] contact-map">
           <img src="/images/map.svg" alt="map" className='w-full h-full object-cover object-top'/>
           <a href='/#' className="absolute top-0 right-0 text-center flex items-center justify-center w-[91px] h-[91px] footer-bg text-white font-[600]">OPEN<br/>MAP</a>
          </div>
          <div className="">
            <div className="h-[91px] hidden lg2:block"></div>
             <div className="py-10 px-5 lg2:px-12 bg-[#F2F4F5]">
             <div className='text-[34px] text-[#283646] font-[600]'>Get in Touch</div>
              <div className='text-[14px] text-[#283646] mt-1 font-[400]'>Fill up the form our team will get back to you within 24 Hours</div>
              <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
                    <div>
                        <div className='text-[#283646] font-[600] text-[15px] mb-2'>First Name</div>
                        <input type="text" className='w-full rounded-md bg-[#F8F9FA] border border-[#ECEEF0] outline-0 px-3 py-2.5 placeholder:text-[14px]' placeholder='Input your first name in here'/>
                    </div>
                    <div>
                        <div className='text-[#283646] font-[600] text-[15px] mb-2'>Last Name</div>
                        <input type="text" className='w-full rounded-md bg-[#F8F9FA] border border-[#ECEEF0] outline-0 px-3 py-2.5 placeholder:text-[14px]' placeholder='Input your last name in here'/>
                    </div>
                </div>
                <div className='w-full mt-8 md:mt-10'>
                  <div className='text-[#283646] font-[600] text-[15px] mb-2'>Email Address</div>
                  <input type="email" className='w-full rounded-md bg-[#F8F9FA] border border-[#ECEEF0] outline-0 px-3 py-2.5 placeholder:text-[14px]' placeholder='Input your email address in here'/>
                </div>
                <div className='w-full mt-8 md:mt-10'>
                  <div className='text-[#283646] font-[600] text-[15px] mb-2'>Messages</div>
                  <textarea className='w-full rounded-md bg-[#F8F9FA] border border-[#ECEEF0] outline-0 px-4 py-3.5 placeholder:text-[14px] resize-none h-[144px]' placeholder='Write your messages in here'></textarea>
                </div>
                <div className="w-full mt-6 flex items-center justify-end"><button className='contact-btn-bg tracking-normal font-[500] flex items-center gap-5 rounded-[4px] py-3 px-10 text-white'>Send Message</button></div>
              </div>
             </div>
          </div>
     </div>
     <div className="grid grid-cols-1 sm2:grid-cols-2 gap-7 lg2:gap-0 lg2:grid-cols-[230px,230px,230px,1fr] xl:grid-cols-[250px,250px,250px,1fr] px-5 py-12 lg2:py-6">
        <div className='flex gap-3 h-[50px]'>
            <div className="flex items-center justify-center min-w-[50px] min-h-[50px] rounded-lg bg-white"><svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">SSS<path d="M11 1H3C1.89543 1 1 1.89543 1 3V19C1 20.1046 1.89543 21 3 21H11C12.1046 21 13 20.1046 13 19V3C13 1.89543 12.1046 1 11 1Z" stroke="url(#paint0_linear_29_1152)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>SSS<path d="M6.9502 17H7.0502" stroke="url(#paint1_linear_29_1152)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>SSS<defs>SSS<linearGradient id="paint0_linear_29_1152" x1="13.792" y1="3.26416" x2="0.716586" y2="3.51379" gradientUnits="userSpaceOnUse">SSS<stop stop-color="#A04276"/>SSS<stop offset="0.0001" stop-color="#EC597C"/>SSS<stop offset="1" stop-color="#A04276"/>SSS</linearGradient>SSS<linearGradient id="paint1_linear_29_1152" x1="7.0568" y1="17.1132" x2="6.94779" y2="17.1136" gradientUnits="userSpaceOnUse">SSS<stop stop-color="#A04276"/>SSS<stop offset="0.0001" stop-color="#EC597C"/>SSS<stop offset="1" stop-color="#A04276"/>SSS</linearGradient>SSS</defs>SSS</svg></div>
            <div className="h-full flex flex-col justify-between"><div className='leading-1 text-[13px] text-[#A2A9B0] font-[500]'>Mobile</div><div className='text-[15px] leading-1 text-[#283646] font-[600]'>06 20179569</div></div>
        </div>
        <div className='flex gap-3 h-[50px]'>
            <div className="flex items-center justify-center min-w-[50px] min-h-[50px] rounded-lg bg-white"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.55423 5.24003L6.17123 1.33503C5.78123 0.88503 5.06623 0.88703 4.61323 1.34103L1.83123 4.12803C1.00323 4.95703 0.766232 6.18803 1.24523 7.17503C4.10685 13.1 8.88528 17.8851 14.8062 20.755C15.7922 21.234 17.0222 20.997 17.8502 20.168L20.6582 17.355C21.1132 16.9 21.1142 16.181 20.6602 15.791L16.7402 12.426C16.3302 12.074 15.6932 12.12 15.2822 12.532L13.9182 13.898C13.8484 13.9712 13.7565 14.0195 13.6566 14.0354C13.5567 14.0513 13.4543 14.0339 13.3652 13.986C11.1357 12.7021 9.28622 10.8503 8.00523 8.61903C7.95726 8.52978 7.93989 8.42726 7.95578 8.32719C7.97168 8.22711 8.01996 8.13502 8.09323 8.06503L9.45323 6.70403C9.86523 6.29003 9.91023 5.65003 9.55423 5.23903V5.24003Z" stroke="url(#paint0_linear_29_1148)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_29_1148" x1="22.3201" y1="3.26332" x2="0.541745" y2="3.95626" gradientUnits="userSpaceOnUse"><stop stop-color="#A04276"/><stop offset="0.0001" stop-color="#EC597C"/><stop offset="1" stop-color="#A04276"/></linearGradient></defs></svg></div>
            <div className="h-full flex flex-col justify-between"><div className='leading-1 text-[13px] text-[#A2A9B0] font-[500]'>Phone</div><div className='text-[15px] leading-1 text-[#283646] font-[600]'>0416 341 125</div></div>
        </div>
        <div className='flex gap-3 h-[50px]'>
            <div className="flex items-center justify-center min-w-[50px] min-h-[50px] rounded-lg bg-white"><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z" fill="url(#paint0_linear_29_1150)"/><defs><linearGradient id="paint0_linear_29_1150" x1="21.32" y1="1.81133" x2="-0.445866" y2="2.67706" gradientUnits="userSpaceOnUse"><stop stop-color="#A04276"/><stop offset="0.0001" stop-color="#EC597C"/><stop offset="1" stop-color="#A04276"/></linearGradient></defs></svg></div>
            <div className="h-full flex flex-col justify-between"><div className='leading-1 text-[13px] text-[#A2A9B0] font-[500]'>Email</div><div className='text-[15px] leading-1 text-[#283646] font-[600]'>email@email.com</div></div>
        </div>
        <div className='flex gap-3 h-[50px]'>
            <div className="flex items-center justify-center min-w-[50px] min-h-[50px] rounded-lg bg-white"><svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z" stroke="url(#paint0_linear_29_1167)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9C1 10.892 1.402 12.13 2.5 13.5L9 21L15.5 13.5C16.598 12.13 17 10.892 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1V1Z" stroke="url(#paint1_linear_29_1167)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_29_1167" x1="12.396" y1="6.67925" x2="5.86252" y2="6.88714" gradientUnits="userSpaceOnUse"><stop stop-color="#A04276"/><stop offset="0.0001" stop-color="#EC597C"/><stop offset="1" stop-color="#A04276"/></linearGradient><linearGradient id="paint1_linear_29_1167" x1="18.056" y1="3.26416" x2="0.627053" y2="3.70783" gradientUnits="userSpaceOnUse"><stop stop-color="#A04276"/><stop offset="0.0001" stop-color="#EC597C"/><stop offset="1" stop-color="#A04276"/></linearGradient></defs></svg></div>
            <div className="h-full flex flex-col justify-between"><div className='leading-1 text-[13px] text-[#A2A9B0] font-[500]'>Address</div><div className='text-[15px] leading-1 text-[#283646] font-[600]'>Tom Mandersstraat 4, 5144ZX Waalwijk</div></div>
        </div>
     </div>
     </div>
    </div>
    </div>


    <div className="footer-bg w-full">
    <div className="common-width bg-transparent w-full px-5 pb-5 pt-10 footerBreak:pt-20 mx-auto">
      <Footer/>
    </div>
    </div>

    </div>
    </>
  )
}

export default Contact