import React, { useState } from 'react';

import Card from "./Card";
import Prev from "../image/left.svg"
import Next from "../image/right.svg"
import "../style/Carousel.css"

const Carousel = ({itms}) => {
    const items = [
        {
            name: '1 Aya Bouchiha',
            description: 'Full Stack Web Developer',
            imageUrl: "https://clipart-best.com/img/mario/mario-clip-art-5.png"
        },
        {
            name: '2 AAA BBB',
            description: 'Author',
            imageUrl: "https://clipart-best.com/img/mario/mario-clip-art-5.png"

        },
        {
            name: '3 AAA BBB',
            description: 'Author',
            imageUrl: "https://clipart-best.com/img/mario/mario-clip-art-5.png"

        },
        {
            name: '4 VV CCCC',
            description: 'Author',
            imageUrl: "https://i.stack.imgur.com/ILTQq.png"

        },
        {
            name: '5 DDDD AAAAA',
            description: 'Author',
            imageUrl: "https://clipart-best.com/img/mario/mario-clip-art-5.png"

        },
        {
            name: '6 RRRRR Doe',
            description: 'Author',
            imageUrl: "https://clipart-best.com/img/mario/mario-clip-art-5.png"

        },
        {
            name: '7 Pitsu Coma',
            description: 'Math Student',
            imageUrl: "https://clipart-best.com/img/mario/mario-clip-art-5.png"

        },
    ];
    const [index, setIndex] = useState(0);
    const prevAction = () =>{
        if(index > 0)
            setIndex(index-1);
    }

    const nextAction = () =>{
        if(index < items.length-3)
            setIndex(index+1);
    }
    

    return (
        <div className="carousel-body">
            <div className="prev-card" onClick={prevAction}>
                <img src={Prev}  alt="prev"/>
            </div>
            {
                items.map((e, i)=>{
                     if(i >= index && i <= index+2){
                        return <Card key={i} {...e} />
                    }
                    return null;
                })
            }
            <div className="next-card" onClick={nextAction}>
                <img src={Next} alt="next"/>
            </div>

        </div>)
}

export default Carousel;