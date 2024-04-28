import { Link } from "react-router-dom";
import aboutpic from '../../assets/images/aboutpics.jpg'

const About = () => {
    return (
        <div className="font-roboto container mx-auto w-10/12 md:w-4/5 lg:w-4/5 text-center my-24 text-xl flex flex-col md:flex-col lg:flex-row">

            <div>
                <img src={aboutpic} alt="" className="rounded-lg shadow-lg h-[200px] md:w-[900px] md:h-[400px] lg:w-[900px] lg:h-[400px] border-2 border-amber-500" />
            </div>

            <div className="mx-auto w-10/12 md:w-4/5 lg:w-4/5 my-10 text-xl ml-10">

                <h2 className="text-4xl lg:text-4xl font-semibold mb-10">About Company</h2>

                <p className="font-sedan text-start text-xl md:text-center lg:text-center">Experience the allure of the Middle East with ArabianDunes Tourism Management. Our journey began with a deep-rooted passion for showcasing the rich cultural heritage and natural wonders of the region. Since our inception, we have been committed to redefining the tourism experience by offering unparalleled service, expert.......<Link to='/aboutUs' className="text-blue-700 hover:underline">See More</Link></p>

            </div>

        </div>
    );
};

export default About;