import React from 'react'


const Menu = () => {
    return (
        <div className="menu" id="Menu">
           
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                        <div className="menu-txt">
                            <h3>Pizza Menu</h3>
                            <h1>CHICAGO THIN CRUSH</h1>
                            <p>There is also a style of thin-crust pizza found in Chicago and throughout the rest of the Midwest. The crust is thin and firm enough to have a noticeable crunch, unlike a New York-style pizza. This pizza is cut into squares, also known as "tavern-style" or "party cut", as opposed to wedges.
                                Among locals, thin-crust outsells the more widely known deep-dish style.</p>
                            <button className="btn">View More</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="menu_img">
                            <img src="/img/pizza1.jpg" alt="pizza img" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Menu
