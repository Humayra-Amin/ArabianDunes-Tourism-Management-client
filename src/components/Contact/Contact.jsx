import { Helmet } from 'react-helmet-async';
import contact1 from '../../assets/images/contact1.jpg'
import contact2 from '../../assets/images/contact2.jpeg'

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>ArabianDunes | Contact</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/logos.jpg" />
            </Helmet>

            <div>

                <div className="hero h-[470px] object-contain" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/926358556/photo/contact-us-symbols-on-a-yellow-wall.jpg?s=612x612&w=0&k=20&c=1Ru2QnG989PiCkSiytv1VJ5xuNWwynF9BLM3CHWkB70=' }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h2 className="text-4xl md:text-7xl lg:text-7xl font-sedan font-semibold lg:p-4 text-black">Contact Us</h2>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <div className="container mx-auto mt-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-amber-200 p-6 rounded-lg border-2 border-amber-500">
                            <h2 className="text-2xl font-semibold mb-4 font-roboto">Send Us a Message</h2>

                            <form className=''>

                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-600">Your Name</label>
                                    <input type="text" id="name" name="name" className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-600">Your Email</label>
                                    <input type="email" id="email" name="email" className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-600">Message</label>
                                    <textarea id="message" name="message" rows="5" className="w-full mt-1 p-2 border border-gray-300 rounded-md"></textarea>
                                </div>
                                <button type="submit" className="btn bg-[#FACF39] text-black border-amber-500 hover:bg-white hover:text-black hover:border-amber-300">Send Message</button>

                                <div>
                                    <p className='text-slate-500 mt-2'>Got a question? Need assistance? Contact our friendly team today!</p>
                                    <p className='text-slate-500'>Our team is here to help. Reach out to us anytime for assistance or inquiries.</p>

                                    <img src={contact1} alt="" className='rounded-lg mt-2 h-[200px] w-[400px] md:h-[400px] md:w-auto lg:h-auto' />
                                </div>
                            </form>

                        </div>


                        <div className="bg-amber-200 p-6 rounded-lg border-2 border-amber-500">
                            <h2 className="text-2xl font-semibold mb-4 font-roboto">ArabianDunes Travel Tour</h2>
                            <ul>
                                <li className="mb-2">
                                    <h1 className="font-semibold">123 Main St, Chittagong, Bangladesh</h1>
                                </li>
                                <li className="mb-2">
                                    <span className="font-semibold">Phone:</span> +8801875469911
                                </li>
                                <li className="mb-2">
                                    <span className="font-semibold">Email:</span> ArabianDunes@example.com
                                </li>
                                <p className='text-slate-500'>As your premier online destination for exceptional travel experiences in the Middle East, we are delighted to offer convenient and personalized assistance to ensure your journey with us is seamless and unforgettable.

                                    At ArabianDunes, we understand that every detail matters when it comes to planning your dream vacation. Whether you are seeking expert advice on selecting the perfect tour package, require assistance with customizing your itinerary, or have inquiries about our services, our dedicated team of travel specialists is here to assist you every step of the way.

                                    Feel free to reach out to us via email or phone during our business hours. Our friendly and knowledgeable staff are committed to providing you with prompt and personalized support to address all your travel needs and preferences.

                                    In addition to our direct contact options, you can also connect with us through our social media channels to stay updated on the latest travel trends, exclusive offers, and inspiring destination highlights.

                                    Thank you for considering ArabianDunes as your trusted partner in exploring the wonders of the Middle East. We look forward to hearing from you and helping you create memories that will last a lifetime!</p>
                                <div>
                                    <img src={contact2} alt="" className='h-[200px] md:h-auto lg:h-auto mt-6 rounded-lg' />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;