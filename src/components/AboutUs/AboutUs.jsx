import { Helmet } from "react-helmet-async";
import pics1 from '../../assets/images/about1.webp';
import pics2 from '../../assets/images/about2.jpg';
import pics3 from '../../assets/images/about3.jpg';
import { Roll } from "react-awesome-reveal";


const AboutUs = () => {
    return (
        <div style={{ background: 'linear-gradient(to bottom right, #FFFFFF, #FFFCB3)' }}>
            <Helmet>
                <title>ArabianDunes | About</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/logos.jpg" />
            </Helmet>

            <div>
                <div className="hero h-[500px] object-contain" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/top-view-luggage-with-starfish-hat_23-2148434434.jpg' }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                      <Roll>
                      <h2 className="text-4xl md:text-7xl lg:text-8xl font-sedan font-semibold lg:p-4 text-black">About Us</h2>
                      </Roll>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto w-10/12 lg:w-4/5 text-center my-10 text-xl">

                <div className="card lg:card-side shadow-lg border-2 bg-amber-200">
                    <figure><img src={pics1} alt="Album" className="h-[200px] md:h-[500px] lg:w-[2500px] lg:h-[550px]" /></figure>
                    <div className="card-body text-start">
                        <h2 className="text-3xl font-bold text-center font-sedan">Our Story</h2>
                        <p className="text-[16px] md:text-xl lg:text-xl font-sedan">Experience the allure of the Middle East with ArabianDunes Tourism Management. Our journey began with a deep-rooted passion for showcasing the rich cultural heritage and natural wonders of the region. Since our inception, we have been committed to redefining the tourism experience by offering unparalleled service, expert guidance, and personalized attention to each traveler. </p>
                        <p className="text-[16px] md:text-xl lg:text-xl font-sedan">From majestic deserts to vibrant cities, we have helped countless adventurers explore the hidden gems and iconic landmarks of the Middle East, creating unforgettable memories along the way. As we continue to evolve, our dedication to excellence and customer satisfaction remains unwavering, ensuring that every journey with ArabianDunes is nothing short of extraordinary.</p>
                        <p className="text-[16px] md:text-xl lg:text-xl font-sedan">We are proud of our accomplishments and look forward to serving you for many years to come.</p>
                    </div>
                </div>

                <div className="card lg:card-side bg-amber-200 shadow-lg border-2 mt-14">
                    <div className="card-body text-start">
                        <h2 className="text-3xl font-bold text-center font-sedan">Our Mission and Vision</h2>
                        <p className="text-[16px] md:text-xl lg:text-xl font-sedan">At ArabianDunes Tourism Management, our mission is to inspire discovery and foster a deep appreciation for the beauty and diversity of the Middle East. We are dedicated to empowering travelers to embark on transformative journeys that immerse them in the regions rich history, breathtaking landscapes, and vibrant cultures.</p>
                        <p className="text-[16px] md:text-xl lg:text-xl font-sedan">Our vision is to be the leading provider of authentic and enriching travel experiences, known for our commitment to sustainability, cultural preservation, and exceptional service. By continually innovating and adapting to the evolving needs of our travelers, we strive to set new standards of excellence in the tourism industry, while preserving the natural beauty and heritage of the Middle East for generations to come.</p>
                        <p className="text-[16px] md:text-xl lg:text-xl font-sedan">With a focus on innovation and continuous improvement, we are committed to staying ahead of the curve and adapting to the evolving needs of our clients. Our goal is to remain a trusted advisor and partner to our clients, providing them with the guidance and support they need.</p>
                    </div>
                    <figure><img src={pics2} alt="Album" className="h-[200px] md:h-[500px] lg:w-[2500px] lg:h-[550px]" /></figure>
                </div>

                <div className="card lg:card-side bg-amber-200 shadow-lg border-2 mt-14">
                    <figure><img src={pics3} alt="Album" className="h-[200px] md:h-[500px] lg:w-[2500px] lg:h-[550px]" /></figure>
                    <div className="card-body text-start">
                        <h2 className="text-3xl font-bold text-center font-sedan">Our Philosophy</h2>
                        <p className="text-[16px] md:text-xl lg:text-xl font-sedan">At ArabianDunes Tourism Management, we believe that travel is not just about visiting destinations; its about forging meaningful connections, fostering cultural exchange, and creating lasting memories. We are committed to offering more than just tours; we curate immersive experiences that celebrate the essence of the Middle East, allowing travelers to delve deep into its history, traditions, and way of life.</p>
                        <p className="text-[16px] md:text-xl lg:text-xl font-sedan">Our philosophy is rooted in authenticity, integrity, and respect for both our travelers and the communities we visit. By prioritizing responsible tourism practices and engaging with local partners, we aim to create positive social and economic impacts while ensuring the preservation of the regions natural and cultural heritage. With a passion for excellence and a dedication to service, we invite you to embark on a journey of discovery with ArabianDunes, where every moment is an adventure.</p>
                        <p className="text-[16px] md:text-xl lg:text-xl font-sedan">With a passion for excellence and a dedication to service, we are proud to be your trusted partner.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AboutUs;