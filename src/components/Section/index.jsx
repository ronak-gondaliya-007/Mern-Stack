import React from 'react';
import SectionHeader from './Header';
import ProductCard from '../Section/Card';

function Section({ sectionName, subTitle, isTimer, isProduct }) {
    return (
        <>
            <div className="section_container">
                <SectionHeader
                    sectionName={sectionName}
                    subTitle={subTitle}
                    isTimer={isTimer}
                />
                <div className="product_list">
                    <div className="product_card_container">
                        {Array.from({ length: 10 }).map((product) => {
                            return <ProductCard isProduct={isProduct} />
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section;