import Header from '../Components/Header'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <>
    <div className="w-full bg-[#F8FBFF]">
    <div className="footer-bg w-full">
    <div className="common-width bg-transparent w-full mx-auto">
      <Header page="not-home-page"/>
       <div className="w-full px-5 h-[280px] lg:h-[350px] flex items-center">
          <div>
            <div className="w-[60px] h-[3px] bg-white mb-2"></div>
          <div className='text-white font-[600] text-[29px]'>About Us</div>
          </div>
       </div>
    </div>
    </div>


    <div className="bg-transparent w-full mt-10 lg:mt-20 relative">
    <div className="common-width bg-transparent flex items-center justify-center flex-col lg:flex-row gap-[20px] lg:gap-[60px]  w-full px-5 py-2 mx-auto">
      <div className='z-10 transform translate-y-5'>
        <div className='mb-2 link-gradient font-[600] text-[16px] font-[Ubuntu]'>Why Choose Us?</div>
        <div className='font-[Ubuntu] font-[700] text-[32px] sm:text-[37px] text-[#3D5C70] leading-tight'>We Helps Revolutionize the Way Doctors and Patients Interact</div>
        <div className='text-[#3D5C70] leading-relaxed text-[14.5px] mt-4 mb-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames natoque vel nec vitae arcu phasellus. Quam pulvinar laoreet molestie commodo quis placerat. Adipiscing nibh netus at vivamus eu ac egestas. Non ullamcorper turpis odio gravida mauris elementum viverra. Consectetur imperdiet pharetra, neque, euismod. Metus etiam cursus elit sagittis, pharetra. Non risus id rhoncus convallis. Enim fermentum a quam enim gravida. </div>
      </div>
      <img src="images/doctor-image.svg" className='w-[480px] block' alt="doctor" />
    </div>
    </div>


    <div className="bg-transparent w-full mt-14 lg:mt-20 mb-20 relative">
    <div className="common-width bg-transparent flex items-center justify-center flex-col lg:flex-row-reverse gap-[20px] lg:gap-[60px] w-full px-5 py-2 mx-auto">
      <div className='z-10 transform translate-y-5'>
        <div className='mb-2 link-gradient font-[600] text-[16px] font-[Ubuntu]'>Why Choose Us?</div>
        <div className='font-[Ubuntu] font-[700] text-[32px] sm:text-[37px] text-[#3D5C70] leading-tight'>We Helps Revolutionize the Way Doctors and Patients Interact</div>
        <div className='text-[#3D5C70] leading-relaxed text-[14.5px] mt-4 mb-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames natoque vel nec vitae arcu phasellus. Quam pulvinar laoreet molestie commodo quis placerat. Adipiscing nibh netus at vivamus eu ac egestas. Non ullamcorper turpis odio gravida mauris elementum viverra. Consectetur imperdiet pharetra, neque, euismod. Metus etiam cursus elit sagittis, pharetra. Non risus id rhoncus convallis. Enim fermentum a quam enim gravida. </div>
      </div>
      <img src="images/doctor-image.svg" className='w-[480px] block' alt="doctor" />
    </div>
    </div>


    <div className="bg-transparent w-full mt-20 pb-20 relative">
    <div className="common-width bg-transparent flex items-center justify-center flex-col-reverse lg:flex-row gap-5 w-full px-5 py-2 mx-auto">
     <div className="w-full h-[350px] sm:h-[450px] sm:w-[450px] flex items-center justify-center relative">
      <img src="/images/doctor-square-image.svg" alt="doctor" className='absolute top-0 left-0 w-full h-full object-cover object-top' />
      <div className="bg-black/20 z-5 absolute top-0 left-0 w-full h-full object-cover object-top"></div>
      <button><img src="/images/play-icon.svg" alt="play" className='relative z-10' /></button>
     </div>
     <div className="w-full lg:w-[600px] grid grid-cols-1 aboutUSGrid:grid-cols-2 gap-5">
     <div className='border-2 border-white/20 px-5 py-5'>
       <div className="flex items-center justify-center w-[91px] h-[91px] footer-bg"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2 34.4C7.72542 34.4 0 26.6746 0 17.2C0 8.16271 6.99661 0.583051 16.0339 0C16.4712 0 16.7627 0.145763 17.0542 0.437288C17.4915 0.728814 17.6373 1.02034 17.6373 1.45763V16.7627H32.9424C33.3797 16.7627 33.6712 16.9085 33.9627 17.2C34.2542 17.4915 34.4 17.9288 34.4 18.2203C33.817 27.2576 26.2373 34.4 17.2 34.4ZM14.722 3.06102C8.01695 4.22712 2.91525 10.2034 2.91525 17.2C2.91525 25.0712 9.32881 31.4847 17.2 31.4847C24.1966 31.4847 30.0271 26.3831 31.339 19.678H16.1797C15.3051 19.678 14.722 19.0949 14.722 18.2203V3.06102Z" fill="white"/><path d="M32.2136 15.0134H20.4068C19.9695 15.0134 19.678 14.7219 19.678 14.2846V2.47784C19.678 2.04055 19.9695 1.74902 20.4068 1.74902C27.2576 1.74902 32.9424 7.28801 32.9424 14.2846C32.9424 14.7219 32.6509 15.0134 32.2136 15.0134ZM21.1356 13.5558H31.4848C31.1932 8.01682 26.6746 3.64394 21.1356 3.20665V13.5558Z" fill="white"/></svg></div>
       <div className='text-[#3D5C70] font-[600] text-[15px] sm:text-[18px] mt-6'>Our experience always guarantee quality</div>
       <div className='text-[#3D5C70] leading-relaxed text-[13px] sm:text-[14.5px] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing. </div>
     </div>
     <div className='px-5 py-5 footer-bg'>
       <div className="flex items-center justify-center w-[91px] h-[91px] border-2 border-white"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2 34.4C7.72542 34.4 0 26.6746 0 17.2C0 8.16271 6.99661 0.583051 16.0339 0C16.4712 0 16.7627 0.145763 17.0542 0.437288C17.4915 0.728814 17.6373 1.02034 17.6373 1.45763V16.7627H32.9424C33.3797 16.7627 33.6712 16.9085 33.9627 17.2C34.2542 17.4915 34.4 17.9288 34.4 18.2203C33.817 27.2576 26.2373 34.4 17.2 34.4ZM14.722 3.06102C8.01695 4.22712 2.91525 10.2034 2.91525 17.2C2.91525 25.0712 9.32881 31.4847 17.2 31.4847C24.1966 31.4847 30.0271 26.3831 31.339 19.678H16.1797C15.3051 19.678 14.722 19.0949 14.722 18.2203V3.06102Z" fill="white"/><path d="M32.2136 15.0134H20.4068C19.9695 15.0134 19.678 14.7219 19.678 14.2846V2.47784C19.678 2.04055 19.9695 1.74902 20.4068 1.74902C27.2576 1.74902 32.9424 7.28801 32.9424 14.2846C32.9424 14.7219 32.6509 15.0134 32.2136 15.0134ZM21.1356 13.5558H31.4848C31.1932 8.01682 26.6746 3.64394 21.1356 3.20665V13.5558Z" fill="white"/></svg></div>
       <div className='text-white font-[600] text-[15px] sm:text-[18px] mt-6'>Our experience always guarantee quality</div>
       <div className='text-white leading-relaxed text-[13px] sm:text-[14.5px] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing. </div>
     </div>
     <div className='border-2 border-white/20 px-5 py-5'>
       <div className="flex items-center justify-center w-[91px] h-[91px] footer-bg"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8449 33.2728C9.74978 33.2728 6.49988 32.499 3.71425 31.261C3.40473 31.1062 3.09522 30.7967 2.94046 30.4872C-0.773712 22.285 0.928618 12.5353 7.27367 6.19029C11.2974 2.1666 16.7139 0 22.4399 0C25.535 0 28.7849 0.773786 31.5706 2.01184C31.8801 2.1666 32.1896 2.47612 32.3443 2.78563C36.2133 10.9878 34.5109 20.5827 28.1659 26.9278C23.9875 30.9515 18.5709 33.2728 12.8449 33.2728ZM5.57134 28.6301C7.89269 29.5586 10.3688 30.1777 12.8449 30.1777C17.7972 30.1777 22.2851 28.3206 25.6898 24.7612C30.9515 19.4994 32.4991 11.452 29.5587 4.48796C27.2374 3.55942 24.7612 2.94039 22.2851 2.94039C17.3329 2.94039 12.8449 4.79748 9.44027 8.35689C4.17852 13.7734 2.63095 21.8208 5.57134 28.6301Z" fill="white"/><path d="M5.26169 29.8682C5.10693 29.8682 4.79742 29.8682 4.64266 29.7134C4.33314 29.4039 4.33314 28.9396 4.64266 28.6301L30.3324 2.94039C30.6419 2.63087 31.1061 2.63087 31.4157 2.94039C31.7252 3.2499 31.7252 3.71417 31.4157 4.02369L5.72596 29.5586C5.5712 29.7134 5.41644 29.8682 5.26169 29.8682Z" fill="white"/><path d="M1.54757 34.2013C1.0833 34.2013 0.773786 34.0466 0.464272 33.7371C-0.154757 33.118 -0.154757 32.1895 0.464272 31.5705L3.2499 28.7848C3.86893 28.1658 4.79748 28.1658 5.4165 28.7848C6.03553 29.4039 6.03553 30.3324 5.4165 30.9514L2.63087 33.7371C2.32136 34.0466 2.01184 34.2013 1.54757 34.2013Z" fill="white"/><path d="M30.9514 17.1783L18.8804 16.5593C18.4161 16.5593 18.1066 16.2498 18.1066 15.7855C18.1066 15.3212 18.4161 15.0117 18.8804 15.0117L30.9514 15.6307C31.4157 15.6307 31.7252 15.9403 31.7252 16.4045C31.7252 16.8688 31.4157 17.1783 30.9514 17.1783Z" fill="white"/><path d="M26.773 24.7611L11.452 24.1421C10.9877 24.1421 10.6782 23.8325 10.6782 23.3683C10.6782 22.904 10.9877 22.5945 11.452 22.5945L26.6182 23.2135C27.0825 23.2135 27.392 23.523 27.392 23.9873C27.5468 24.4516 27.2373 24.7611 26.773 24.7611Z" fill="white"/><path d="M18.3928 15.4639C17.9285 15.4639 17.619 15.1544 17.619 14.6901L17 2.77379C17 2.30951 17.3095 2 17.7738 2C18.2381 2 18.5476 2.30951 18.5476 2.77379L19.1666 14.8449C19.1666 15.1544 18.8571 15.4639 18.3928 15.4639Z" fill="white"/><path d="M10.9878 23.5232C10.5235 23.5232 10.214 23.2137 10.214 22.7494L9.44019 7.58319C9.44019 7.11892 9.7497 6.80941 10.214 6.80941C10.6782 6.65465 10.9878 7.11892 10.9878 7.58319L11.6068 22.7494C11.7615 23.0589 11.452 23.5232 10.9878 23.5232Z" fill="white"/></svg></div>
       <div className='text-[#3D5C70] font-[600] text-[15px] sm:text-[18px] mt-6'>Our experience always guarantee quality</div>
       <div className='text-[#3D5C70] leading-relaxed text-[13px] sm:text-[14.5px] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing. </div>
     </div>
     <div className='border-2 border-white/20 px-5 py-5'>
       <div className="flex items-center justify-center w-[91px] h-[91px] footer-bg"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2092 34.5279C12.6738 34.5279 8.28464 32.7722 5.06594 29.5535C-1.66406 22.6772 -1.66406 11.7044 4.91964 4.97435C8.28464 1.75565 12.5275 0 17.2092 0C21.891 0 26.1338 1.75565 29.3525 4.97435C36.0825 11.7044 36.0825 22.6772 29.3525 29.4072C26.1338 32.6259 21.7447 34.5279 17.2092 34.5279ZM17.2092 2.92609C13.4053 2.92609 9.74769 4.38914 7.11421 7.16892C1.40833 12.7285 1.40833 21.7994 7.11421 27.3589C9.74769 29.9924 13.4053 31.6018 17.2092 31.6018C21.0131 31.6018 24.6707 30.1387 27.3042 27.3589C32.8638 21.7994 32.8638 12.7285 27.3042 7.16892C24.5244 4.38914 21.0131 2.92609 17.2092 2.92609Z" fill="white"/><path d="M19.1112 13.7526H2.28621C1.8473 13.7526 1.55469 13.46 1.55469 13.0211C1.55469 12.5822 1.8473 12.2896 2.28621 12.2896H19.1112C19.5501 12.2896 19.8428 12.5822 19.8428 13.0211C19.8428 13.46 19.5501 13.7526 19.1112 13.7526Z" fill="white"/><path d="M5.65116 28.6758C5.50485 28.6758 5.35855 28.6758 5.35855 28.5295C5.06594 28.3832 4.91964 27.9443 5.06594 27.5054L13.4053 12.8749C13.5516 12.5823 13.9905 12.436 14.4294 12.5823C14.722 12.7286 14.8683 13.1675 14.722 13.6064L6.38268 28.2369C6.09007 28.5295 5.94377 28.6758 5.65116 28.6758Z" fill="white"/><path d="M20.2816 33.3574C19.989 33.3574 19.8427 33.2111 19.6964 33.0648L11.357 18.4344C11.2107 18.1418 11.2107 17.7029 11.6496 17.4103C11.9423 17.264 12.3812 17.264 12.6738 17.7029L21.1594 32.3333C21.3057 32.6259 21.3057 33.0648 20.8668 33.3574C20.5742 33.2111 20.4279 33.3574 20.2816 33.3574Z" fill="white"/><path d="M31.6935 22.9696H14.8685C14.4296 22.9696 14.137 22.677 14.137 22.2381C14.137 21.7992 14.4296 21.5066 14.8685 21.5066H31.6935C32.1324 21.5066 32.425 21.7992 32.425 22.2381C32.425 22.5307 31.9861 22.9696 31.6935 22.9696Z" fill="white"/><path d="M19.8428 22.5308C19.6965 22.5308 19.5502 22.5308 19.5502 22.3845C19.2576 22.2382 19.1113 21.7993 19.2576 21.3603L27.7433 6.72989C27.8896 6.43728 28.3285 6.29097 28.7674 6.43728C29.06 6.58358 29.2063 7.0225 29.06 7.46141L20.5743 22.0919C20.428 22.3845 20.1354 22.5308 19.8428 22.5308Z" fill="white"/><path d="M22.0372 17.8491C21.7446 17.8491 21.5983 17.7028 21.452 17.5565L12.9663 2.92609C12.82 2.63348 12.9663 2.19456 13.2589 1.90195C13.5516 1.75565 13.9905 1.75565 14.2831 2.19456L22.7687 16.825C22.915 17.1176 22.915 17.5565 22.4761 17.8491C22.3298 17.8491 22.1835 17.8491 22.0372 17.8491Z" fill="white"/></svg></div>
       <div className='text-[#3D5C70] font-[600] text-[15px] sm:text-[18px] mt-6'>Our experience always guarantee quality</div>
       <div className='text-[#3D5C70] leading-relaxed text-[13px] sm:text-[14.5px] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing. </div>
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

export default About