import banner1 from '../../assets/images/uae.jpg'
import banner2 from '../../assets/images/kuwait.jfif'
import banner3 from '../../assets/images/qatar.jpg'
import banner4 from '../../assets/images/saudi arabia.jpg'
import banner5 from '../../assets/images/jordan.jpg'
import banner6 from '../../assets/images/iran.avif'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    <div className='overlay'></div>
                    <img src={banner1} className="w-full lg:h-[630px]" />

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white md:gap-4 lg:gap-8">
                        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold ml-4 font-sedan">Discover the Wonders of the UAE</h2>
                        <p className="font-roboto text-[12px] md:text-xl lg:text-2xl font-bold ml-2 lg:ml-0 md:ml-0">Explore the vibrant cities and stunning architecture of the UAE</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle mt-28 md:mt-32 lg:mt-0">❮</a>
                        <a href="#slide2" className="btn btn-circle mt-28 md:mt-32 lg:mt-0">❯</a>
                    </div>
                </div>


                <div id="slide2" className="carousel-item relative w-full">
                    <div className='overlay'></div>
                    <img src={banner2} className="w-full lg:h-[630px]" />

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white md:gap-4 lg:gap-8">
                        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold ml-4 font-sedan">Experience Kuwait Cultural Charm</h2>
                        <p className="font-roboto text-[12px] md:text-xl lg:text-2xl font-bold ml-2 lg:ml-0 md:ml-0">Immerse yourself in Kuwait rich history and bustling markets</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle mt-28 md:mt-32 lg:mt-0">❮</a>
                        <a href="#slide3" className="btn btn-circle mt-28 md:mt-32 lg:mt-0">❯</a>
                    </div>
                </div>


                <div id="slide3" className="carousel-item relative w-full">
                    <div className='overlay'></div>
                    <img src={banner3} className="w-full lg:h-[630px]" />

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white md:gap-4 lg:gap-8">
                        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold ml-4 font-sedan">Journey Through the Heart of Qatar</h2>
                        <p className="font-roboto text-center text-[12px] md:text-xl lg:text-2xl font-bold ml-2 lg:ml-0 md:ml-0">Embark on an unforgettable adventure through Qatar modern marvels</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle mt-28 md:mt-32 lg:mt-0">❮</a>
                        <a href="#slide4" className="btn btn-circle mt-28 md:mt-32 lg:mt-0">❯</a>
                    </div>
                </div>


                <div id="slide4" className="carousel-item relative w-full">
                    <div className='overlay'></div>
                    <img src={banner4} className="w-full lg:h-[630px]" />

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white md:gap-4 lg:gap-8">
                        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold ml-4 font-sedan">Explore the Majesty of Saudi Arabia</h2>
                        <p className="font-roboto text-center text-[12px] md:text-xl lg:text-2xl font-bold ml-2 lg:ml-0 md:ml-0">Discover Saudi Arabs diverse landscapes, rich heritage, and legendary hospitality</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle mt-28 md:mt-32 lg:mt-0">❮</a>
                        <a href="#slide5" className="btn btn-circle mt-28 md:mt-32 lg:mt-0">❯</a>
                    </div>
                </div>


                <div id="slide5" className="carousel-item relative w-full">
                    <div className='overlay'></div>
                    <img src={banner5} className="w-full lg:h-[630px]" />

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white md:gap-4 lg:gap-8">
                        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold ml-4 font-sedan">Discover the Mystique of Jordan</h2>
                        <p className="font-roboto text-center text-[12px] md:text-xl lg:text-2xl font-bold ml-2 lg:ml-0 md:ml-0">Uncover ancient wonders, natural beauty, and timeless heritage in Jordan</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle mt-28 md:mt-32 lg:mt-0">❮</a>
                        <a href="#slide6" className="btn btn-circle mt-28 md:mt-32 lg:mt-0">❯</a>
                    </div>
                </div>


                <div id="slide6" className="carousel-item relative w-full">
                    <div className='overlay'></div>
                    <img src={banner6} className="w-full lg:h-[630px]" />

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white md:gap-4 lg:gap-8">
                        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold ml-4 font-sedan">Experience the Allure of Iran</h2>
                        <p className="font-roboto text-center text-[12px] md:text-xl lg:text-2xl font-bold ml-2 lg:ml-0 md:ml-0">Indulge in Iran rich history, vibrant culture, and breathtaking landscapes</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle mt-28 md:mt-32 lg:mt-0">❮</a>
                        <a href="#slide1" className="btn btn-circle mt-28 md:mt-32 lg:mt-0">❯</a>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Banner;