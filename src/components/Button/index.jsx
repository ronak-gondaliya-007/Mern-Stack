import React from 'react';

function Button({ title }) {
    return (
        <>
            <div className="shop_btn">
                <button class="shop_now_btn">
                    <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">{title}</span>
                </button>
            </div>
        </>
    );
}

export default Button;