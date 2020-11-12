import React from 'react'
import Navbar from './Navbar'
// import About from './About'
// import Shop from './Shop'
 import Hook from './Hook'

const Header = () => {
return (
<div className="banner">
<Navbar /> 
 <Hook />    
{/* <About /> */}
    <div className="banner_content">
        <div className="container">
            <div className="banner-txt">
                <h3>Pizza Delivery</h3>
                <h1>A1-Pizza</h1>
                <p>We Deliver best and fast Pizza in the World,we challenge the order will be in your step door as you order
                    your Pizza.</p>
                    <button className="btn">Delivery Now</button>
            </div>
          
        </div>
    </div>
</div>
)
}

export default Header