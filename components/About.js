import React from "react"
import styled from "styled-components";
import Image from "next/image";
import QualityData from "../quality.json";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = styled.div`
    position: relative;
    background-image: linear-gradient(#785AAB, #241340);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 70px 0;
    justify-content: center;
`;

const WhiteTriangle = styled.div`
    position: absolute;
    background-color: white;
    height: 250px;
    width: 200px;
    bottom: 0; left: 0;
    clip-path: polygon(0 0, 0% 100%, 67% 100%);
    @media only screen and (max-width: 780px) {
        display: none;
    }
`;

const HoverDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 750px;
`;

const Quality = styled.a`
    background-color: #482680;
    border: 3px solid #AD7BFF;
    border-radius: 5px;
    width: 200px;
    height: 280px;
    padding: 20px 10px;
    margin: 20px;
    transition: 0.3s;
    cursor: pointer;
    :hover{
        transform: translateY(-15px);
    }
`;

const ImageAlign = styled.div`
    text-align: center;
`

const StyledH3 = styled.h3`
    font-size: 30px;
    margin: 10px 0;
    text-align: center;
    font-weight: bold;
`;

const Description = styled.p`
    font-size: 16px;
    color: white;
    margin: 10px 0;
    margin: 0;
    font-weight: bold;
`;

const SideDiv = styled.div`
    background-color: white;
    overflow-x: hidden;
    border-radius: 30px;
    width: 600px;
    height: 600px;
    padding: 30px;
    overflow: hidden;
    @media only screen and (max-width: 630px) {
        width: 350px;
        padding: 15px;
        height: 500px;
    }
`;

const StyledH2 = styled.h2`
    font-size: 90px;
    margin: 0;
    margin-top: 20px;
    color: black;
    @media only screen and (max-width: 630px) {
        font-size: 50px;
    }
`;

const BigDash = styled.div`
    background-color: #11C518;
    width: 500px;
    height: 8px;
    @media only screen and (max-width: 630px) {
        width: 300px;
    }
`;

const SmallDash = styled.div`
    background-color: #11C518;
    width: 300px;
    height: 5px;
    margin-top: 10px;
    @media only screen and (max-width: 630px) {
        width: 200px;
    }
`;

const StyledUl = styled.ul`
    margin-top: 30px;
    font-size: 25px;
    li{
        margin: 10px 0;
        font-weight: 400;
    }
    @media only screen and (max-width: 630px) {
        font-size: 20px;
        li {
            margin-top: 10px;
        }
    }
`;

export default function About(){

    const [display, setDisplay] = useState();

    function HandleHover(id){
        setDisplay(id);
    }

    useEffect(()=>{
        Aos.init({ duration: 700, disable: 'mobile' })
    }, [])

    return(
        <Main id="sobre">
            <WhiteTriangle/>
            <HoverDiv data-aos="fade-right">
                {QualityData && QualityData.map( quality =>{
                return(
                    <Quality key={quality.id} onMouseEnter={_=>HandleHover(quality.id)} href="#side">
                        <ImageAlign>
                            <Image
                                src={quality.src}
                                alt={quality.title}
                                width="100px"
                                height="100px"
                            />
                        </ImageAlign>
                        <StyledH3 style={ {color: quality.color} }>{quality.title}</StyledH3>
                        <Description>{quality.content}</Description>
                    </Quality>
                    )
                })}
            </HoverDiv>
            <SideDiv data-aos="fade-left" id="side">
                {QualityData && QualityData.map((quality, key)=>{
                    return(
                        <div key={key}>
                        {(display == undefined) ?
                            <StyledH2 style={{ marginBottom: "400px", textDecoration: "underline" }}>Escolha um tema</StyledH2>
                         : display == quality.id && (
                            <div style={{ animationName: `slideLeft`, animationDuration: '600ms'  }}>
                                <StyledH2 style={ {color: quality.color} }>{quality.title}</StyledH2>
                                <BigDash style={ {backgroundColor: quality.color} }/>
                                <SmallDash style={ {backgroundColor: quality.color} }/>
                                {quality.particular && quality.particular.map((particular, key)=>{
                                    return(
                                        <StyledUl key={key}>
                                            <li>{particular.l1}</li>
                                            <li>{particular.l2}</li>
                                            <li>{particular.l3}</li>
                                            {(particular.l4 !== undefined) && <li>{particular.l4}</li>}
                                            {(particular.l5 !== undefined) && <li>{particular.l5}</li>}
                                        </StyledUl>
                                    )
                                })}
                            </div>
                        )}
                        </div>
                    )
                })} 
            </SideDiv>
        </Main>
    )
}
