import React from 'react'
import Refer from '../components/Refer'
import BrandMarquee from '../components/BrandMarquee'
import ContactForm from '../components/forms/ContactForm'
import PageHeading from '../components/heading/PageHeading'

const Contact = () => {

    return (
        <>
            <div className="pt-20">
                <PageHeading>
                    <h4 className='text-[3rem] font-bold uppercase'>Contact Us</h4>
                </PageHeading>
            </div>
            <section className='content-center'>
                <div className="grid sm:grid-cols-1 md:grid-cols-2  md:mx-10 lg:mx-20 xl:mx-28 min-h-[80vh] sm:pt-16 md:pt-0 shadow-lg">

                    <div className="capitalize bg-[url('https://www.classicgarage.ca/wp-content/uploads/2022/03/Classic-BMW-Web-Clean-JPEG-3000px-53-1024x683.jpg')]">
                        <div className="bg-black text-zinc-300 bg-opacity-[60%] h-full w-full xl:px-20 lg:px-16 md:px-10 content-center sm:px-2 sm:py-12">

                            <div className="text-center">
                                <h4 className='text-3xl text-white font-bold uppercase'>Get in touch with us</h4>
                                <p className="my-5">
                                    Fill up the form and our team will get back to you within 24 hours
                                </p>

                                <ul className='gap-4 grid mx-auto w-fit mt-5'>
                                    <li className='flex items-center gap-4'>
                                        <i className='bx bxs-phone text-white text-2xl'></i>
                                        +91 123-4567-890
                                    </li>
                                    <li className='flex items-center gap-4'>
                                        <i className='bx bx-envelope text-white text-2xl'></i>
                                        contacteam@rentogo.com
                                    </li>
                                    <li className='flex items-center gap-4'>
                                        <i className='bx bxs-map text-white text-2xl'></i>
                                        Nagpur, Maharashtra, India
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="bg-white text-zinc-800 xl:px-20 lg:px-16 md:px-10 content-center sm:p-6">

                        <ContactForm />
                    </div>
                </div>
            </section>

            <BrandMarquee />
            <Refer />
            <iframe className='w-full min-h-[40vh]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d703992.829603094!2d79.25452441589711!3d21.0245027422516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1728148436584!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}

export default Contact