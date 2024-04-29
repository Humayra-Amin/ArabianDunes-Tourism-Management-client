import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TouristSpot from "../TouristSpot/TouristSpot";
import { useLoaderData } from "react-router-dom";
import About from "../About/About";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";


const Home = () => {
    const tour = useLoaderData();
    return (
        <div style={{ background: 'linear-gradient(to bottom right, #FFFFFF, #FFFCB3)' }}>

            <Banner></Banner>

            <div>

            <div className="text-center my-16">
                <h2 className="text-4xl lg:text-5xl font-roboto font-semibold mt-8 lg:mt-6">Tourists Spot</h2>
                <p className="mt-6 font-sedan">Rich in history and culture, offers a diverse array of tourist attractions. Visitors can explore the vibrant souks of Middle East country.<br></br> The Middle East is a destination that truly has something for everyone</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {
                    tour.map(tours => <TouristSpot key={tours._id} tours={tours}></TouristSpot>)
                }
            </div>

            </div>

            <About></About>
            <Newsletter></Newsletter>
            <Footer></Footer>

            <Helmet>
                <title>ArabianDunes | Home</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/logos.jpg" />
            </Helmet>
        </div>
    );
};

export default Home;