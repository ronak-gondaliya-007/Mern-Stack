import React from 'react';
import SectionHeader from '../Section/Header';

function NewArrivalSection({ sectionName, subTitle }) {
    return (
        <>
            <SectionHeader
                sectionName={sectionName}
                subTitle={subTitle}
            />
        </>
    );
}

export default NewArrivalSection;