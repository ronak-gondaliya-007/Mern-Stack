import React from 'react';
import Button from '../../Button';
import CountdownTimer from './Timer'

function SectionHeader({ sectionName, subTitle, isTimer, button }) {
    console.log(sectionName, subTitle, isTimer);
    return (
        <>
            <div className="title">
                <div className="empty"></div>
                <h6>{sectionName}</h6>
            </div>
            <div className="subTitle">
                <h4>{subTitle}</h4>
                {isTimer > 0 && <div className="time_counter">
                    <CountdownTimer />
                </div>}
                {button !== 0 && <div className="view_all">
                    <Button title='View All' />
                </div>}
            </div>
        </>
    );
}

export default SectionHeader;