import React from 'react';
import NavBar from './NavBar';


const randomStyles = {
    height:'50vh',
     display:'flex',
     justifyContent: 'center',  
     alignItems: 'center',
     border: '2px solid black'
}

var HomePage = () => {
    return(
        <div>
            <NavBar />
            {/* //domy data */}
            {/* // section is targeted through id  */}
            <section id='home'>
            <div style={randomStyles}>
                <h1>Home</h1>
            </div>
            </section>
            <section id='whatWeDo'>
            <div style={randomStyles}>
                <h1>What We Do</h1>
            </div>
            </section>
            <section id='howItWorks'>
            <div style={randomStyles}>
                <h1>How It Works</h1>
            </div>
            </section>
            <section id='benefits'>
            <div style={randomStyles}>
                <h1>Benefits</h1>
            </div>
            </section>
            <section id='aboutus'>
            <div style={randomStyles}>
                <h1>About Us</h1>
            </div>
            </section>
        </div>
    )
}

export default HomePage;