import React from 'react'
import banner from '../../assets/image/banner.png'
import apple from '../../assets/image/apple.svg'
import Button from '../../components/Button'
import Section from '../../components/Section'
import FeaturedSection from '../../components/FeaturedProduct'

const Home = () => {
    return (
        <div className="home_container">
            <div className="home_inner">
                <div className="hero_section">
                    <img src={banner} alt="banner_image" className='banner_image' />
                    <div className="text_container">
                        <div className="banner_text">
                            <img src={apple} alt="apple_icon" />
                            <h4>iPhone 14 Series</h4>
                        </div>
                        <div className="announcement">
                            <h6 className='announcement_text'>Up to 10% off Voucher</h6>
                        </div>
                        <Button title='Shop Now' />
                    </div>
                </div>
                <div className="container">
                    <Section
                        sectionName={`Today's`}
                        subTitle='Flash Sales'
                        isTimer={1}
                        isProduct={1}
                        />
                    <Section
                        sectionName='Categories'
                        subTitle='Browse By Category'
                        isTimer={0}
                        isProduct={0}
                        />
                    <Section
                        sectionName='This Month'
                        subTitle='Best Selling Products'
                        isTimer={0}
                        isProduct={1}
                        />
                    <Section
                        sectionName='Our Products'
                        subTitle='Explore Our Products'
                        isTimer={0}
                        isProduct={1}
                    />
                    <FeaturedSection />
                </div>
            </div>
        </div>
    )
}

export default Home
