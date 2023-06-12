import React from 'react'

export default function About() {
    return (
        <>
            <div id="about" className="container mx-auto px-8 page-height bg-slate-100 mt-12 flex flex-col gap-12">
                <div className="about-me">
                    <h2 className='text-dark font-bold text-4xl mb-4 font-poppins'>About Me</h2>
                    <p className=' text-paragraph text-lg max-w-3xl'>A highly motivated and energetic Computer Engineer with a high interest in Web Development specially frontend and Mobile applications. An enthusiast who eager to learn more and always looking for new opportunities. Looking forward to making a difference in my community.</p>
                </div>
                <div className="education">
                    <h2 className='text-dark font-bold text-4xl mb-4'>Education</h2>
                    <div className="college flex justify-between">
                        <h4 className=' text-paragraph text-lg font-semibold font-poppins'>Soubra Faculty Of Engineering, Benha University, <span className=' italic font-normal'>Bachelor’s degree</span></h4>
                        <h6 className=' text-paragraph text-lg'>Sep 2016 - Jul 2021</h6>
                    </div>
                    <div className='details'>
                        <h6 className=' text-paragraph text-lg'>Major: Computer Engineering</h6>
                        <h6 className=' text-paragraph text-lg'>Grade: Very Good</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
