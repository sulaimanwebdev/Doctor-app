import React from 'react'
import {Link} from 'react-router-dom'
import FeaturesSlider from '../Components/Features-slider'
import Header from '../Components/Header'

const Home = () => {
  return (
    <>
    <Header/>
    <div className="home-bg bg-[#F8FBFF] w-full overflow-hidden">
    <div className="common-width relative min-h-[600px] max-h-[600px] flex items-center gap-[130px]  w-full px-5 pt-1 mx-auto">
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
        <div className='mb-2 text-[#EC597C] font-[600] font-[Ubuntu]'>Why Choose Us?</div>
        <div className='font-[Ubuntu] font-[700] text-[37px] text-[#3D5C70] leading-tight'>We Helps Revolutionize the Way Doctors and Patients Interact</div>
        <div className='text-[#3D5C70] leading-relaxed text-[16px] mt-4 mb-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames natoque vel nec vitae arcu phasellus. Quam pulvinar laoreet molestie commodo quis placerat. Adipiscing nibh netus at vivamus eu ac egestas. Non ullamcorper turpis odio gravida mauris elementum viverra. Consectetur imperdiet pharetra, neque, euismod. Metus etiam cursus elit sagittis, pharetra. Non risus id rhoncus convallis. Enim fermentum a quam enim gravida. </div>
        <Link to="/contact"><button className='contact-btn-bg tracking-normal font-[600] flex items-center gap-5 rounded-[4px] py-3 px-14 text-white'>Inquire</button></Link>
      </div>
      <img src="images/doctor-image.svg" className='w-[480px] block' alt="doctor" />
      <img src="images/circle2.svg" className='w-[100px] absolute -top-16 left-0' alt="circle" />
    </div>
    </div>


    <div className="slider-bg bg-[#F8FBFF] w-full overflow-hidden">
    <div className="common-width relative min-h-[800px] max-h-[800px] w-full px-5 pt-[200px] mx-auto">
      <div className="text-center z-10 relative mb-5">
      <div className='mb-2 text-[#EC597C] font-[600] font-[Ubuntu]'>Features</div>
      <div className='font-[Ubuntu] font-[700] text-[34px] text-[#3D5C70] leading-tight'>Solving Healthcare Problems with Artificial Intelligence and Cloud Computing</div>
      </div>
      <div className="relative z-10">
        <FeaturesSlider/>
      </div>
    <img src="images/circle3.svg" className='w-[650px] absolute -top-16 -left-[100px]' alt="circle" />
    <img src="images/circle4.svg" className='w-[400px] absolute -top-16 -right-[100px]' alt="circle" />
    </div>
    </div>
    </>
  )
}

export default Home