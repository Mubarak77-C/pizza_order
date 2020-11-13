import React from 'react'


const About = () => {
    return (
        <div className="about" id="about us">

            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                        <div className="banner-txt">
                            <h3>About Us</h3>
                            <h1>Welcome to A1-Pizza</h1>
                            <p>LIn Italy, pizza served in formal settings, such as at a restaurant,
                            is presented unsliced, and is eaten with the use of a knife and fork.
                            In casual settings, however, it is cut into wedges to be eaten while held in the hand.
                            Foods similar to pizza have been made since the Neolithic Age.[18] Records of people adding other ingredients to bread to make it more flavorful can be found throughout ancient history.
                            In the 6th century BC, the Persian soldiers of Achaemenid Empire during the rule King
                            </p>

                            <button className="btn">Read More</button>


                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about_img">
                            <img src="../img/pizza2.jpg" alt="pizza img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
