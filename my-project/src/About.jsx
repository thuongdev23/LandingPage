import React from 'react';
import avatar from './assets/avatar-2.png';
const About = () =>{
    return (
    <div className="relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-gray-100 flex justify-center
    items-center" >  
        {/* main section */}
        <div className="container pb-8 sm:pb-0">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text section */}
                    <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-2 relative z-10">
                        {/* <img src={avatar} alt="bg" className="w-24 h-24 rounded-full mb-2"></img> */}
                        <h1 className="text-5xl sm:text-6xl
                        lg:text-7xl font-bold">
                            Hi, Welcome to my Developer Website
                        </h1>
                        <p className="text-sm">
                            My Name is Thuong <br/>
                            A Freelance Developer<br/>
                            Speacilized in Web, App Development
                        </p>
                        <div>
                        <button className="bg-gradient-to-r from-blue-800 to-gray hover:
                        scale-105 duration-200 text-white py-2 px-4 rounded-full">
                        Contact Me!  </button>
                        </div>
                    </div>
                    {/* image section */}
                    <div className="order-1 sm:order-1">
                        <div className="relative z-10">
                            <img src={avatar} alt="avatar-photo" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto" />
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        {/* main section */}
    </div>
    )

}
export default About;