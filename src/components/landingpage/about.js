import React from 'react'
import coffeemug from './images/coffeemug.png'

function About() {
    return (
        <div id='About'>
            <div className='abtmain'>

                <div className='abtcontent'>
                    <h2>Discover the best coffee</h2>
                    <p>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>

                </div>

                <div className='abtimg'>
                   <img className='coffeemug' src={coffeemug} alt='coffeemugs'/>

                </div>
            </div>
        </div>
    )
}

export default About