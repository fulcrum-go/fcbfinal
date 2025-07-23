import React from 'react'
import Buttons from './Buttons'
import icon from '..//images/triangle.svg'
import backImage from '../images/back.jpg'
import logos from '../images/logo.jpeg'

const Landing = (props) => {
    return (
        <div className='w-full h-screen bg-center bg-cover' >
            
            {/* This div for navbar */}
            {/* <div className="w-full h-screen bg-[#fef3b8]"></div> */}
            <div className='p-10'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-row'>
                        <div><Buttons name="ABOUT" /></div>
                        <div><Buttons name="CONTACT"/></div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <div>
                            <img src={logos} alt="ICON" className='w-12 mix-blend-multiply' />
                        </div>
                        <div>FULCRUM</div>

                    </div>
                    <div>
                        <Buttons name="35 DAYS LEFT"/>
                    </div>
                </div>

            </div>

            {/* This div is for Content */}
            <div className='flex justify-center items-center flex-col pt-25 gap-1'>
                <div className='text-7xl tracking-widest font-sans font-light'>COMING SOON</div>
                <div className='text-2xl'>We're currently working on somthing fantastic.</div>
                <div className='text-2xl'>We'll be here soon, subscribe to be noticed.</div>
                <div className='py-3'>
                    <button className='bg-black text-white py-2 px-6 text-sm'>NOTIFY ME</button>
                </div>
            </div>


            {/* This div is for footer */}
            <div className='flex flex-col items-center pt-40 gap-2'>
                <div>
                    <div>Fulcrum Comming Soon</div>
                    <div>@All Right Reserved</div>
                </div>
                <div className='flex gap-5'>
                    <a href="https://www.facebook.com/" target='_blank'><img src="https://www.svgrepo.com/show/521654/facebook.svg" alt="Facebook" className='w-7' /></a>
                    <a href="https://www.instagram.com/" target='_blank'><img src="https://www.svgrepo.com/show/521711/instagram.svg" alt="Instagram" className='w-7'/></a>
                    <a href="https://www.twitter.com/" target='_blank'><img src="https://www.svgrepo.com/show/521900/twitter.svg" alt="Twitter" className='w-7'/></a>
                    <a href="https://www.google.com/" target='_blank'><img src="https://www.svgrepo.com/show/508824/google-x2b.svg" alt="Google" className='w-7'/></a>
                </div>
            </div>
        </div>
    )
}

export default Landing
