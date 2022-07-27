import React from 'react';
import Card from './Card';
import './Services.css';
import Tv from '../img/tv.png'
import Mobile from '../img/mobile.png'
import Device from '../img/device.png'
import Children from '../img/children.png'

const Services = () => {
    return (
        <>
            <div class="gap"></div>
            <div class="services">
                <Card
                    heading={"Enjoy on your TV"}
                    detail={"Watch on smart TVs PlayStation Xbox Chromecast Apple TV Blu-ray players and more"}
                    image={Tv}
                />
                <div class="gap"></div>
                <div style={{flexDirection:"row-reverse",direction:"rtl"}}>
                <Card 
                    heading={"Download your shows to watch offline"}
                    detail={"Save your favourites easily and always have something to watch"}
                    image={Mobile}
                />
                </div>
                <div class="gap"></div>
                <Card
                    heading={"Watch everywhere"}
                    detail={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV"}
                    image={Device}
                />
                <div class="gap"></div>
                <div style={{flexDirection:"row-reverse",direction:"rtl"}}>
                <Card
                    heading={".Create profiles for children"}
                    detail={"Send children on adventures with their favourite characters in a space made just for them—free with your membership"}
                    image={Children}
                />
                </div>
                <div class="gap"></div>
                
            </div>
        </>
    );
};

export default Services;