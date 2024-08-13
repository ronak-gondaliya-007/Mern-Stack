import React from 'react';
import SectionHeader from '../Section/Header';
import Button from '../Button';
import arrival_1 from '../../assets/image/arrival1.svg';
import arrival_2 from '../../assets/image/arrival2.svg';
import arrival_3 from '../../assets/image/arrival3.svg';
import arrival_product_1 from '../../assets/image/arrivalProduct1.svg';
import arrival_product_2 from '../../assets/image/arrivalProduct2.svg';
import arrival_product_3 from '../../assets/image/arrivalProduct3.svg';
import arrival_product_4 from '../../assets/image/arrivalProduct4.svg';

function NewArrivalSection({ sectionName, subTitle }) {
    return (
        <>
            <SectionHeader
                sectionName={sectionName}
                subTitle={subTitle}
                button={0}
            />
            <div className="new_arrival_contanier">
                <div className="left_arrival">
                    <img src={arrival_product_1} alt="arrival_product_image" />
                    <div className="arrival_product_detail">
                        <h2 className="title">PlayStation 5</h2>
                        <h6 className="title">Black and White version of the PS5 coming out on sale.</h6>
                        <Button title='Shop Now' />
                    </div>
                </div>
                <div className="right_arrival">
                    <div className="right_arrival_top">
                        <div className="arrival_product">
                            <img src={arrival_product_2} alt="arrival_product_image" />
                            <div className="arrival_product_detail">
                                <h2 className="title">Women’s Collections</h2>
                                <h6 className="title">Featured woman collections that give you another vibe.</h6>
                                <Button title='Shop Now' />
                            </div>
                        </div>
                    </div>
                    <div className="right_arrival_bottom">
                        <div className="right_arrival_bottom_right">
                            {/* <div className="arrival_product">
                                <img src={arrival_product_3} alt="arrival_product_image" />
                                <div className="arrival_product_detail">
                                    <h2 className="title">Speakers</h2>
                                    <h6 className="title">Amazon wireless speakers</h6>
                                    <Button title='Shop Now' />
                                </div>
                            </div> */}
                        </div>
                        <div className="right_arrival_bottom_left">
                            {/* <div className="arrival_product">
                                <img src={arrival_product_4} alt="arrival_product_image" />
                                <div className="arrival_product_detail">
                                    <h2 className="title">Perfume</h2>
                                    <h6 className="title">GUCCI INTENSE OUD EDP</h6>
                                    <Button title='Shop Now' />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewArrivalSection;