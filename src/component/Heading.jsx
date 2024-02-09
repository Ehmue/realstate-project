import React from 'react'

const Heading = () => {
    return (
        <div className='l-header l-header__top'>
            <div className='l-wrap-inner'>
                <div className="top-bloc">
                    <div className='logo'>
                        <img src="src/image/Dream.png" alt="Logo" />
                    </div>
                    <div className="address-bloc">
                        <p>Email:  metro@dreamspace.com</p>
                        <p>Call Us: +95 9766189813</p>
                        <button className='btn btn--signin'>Sign In</button>
                        <button className='btn btn--signup'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading