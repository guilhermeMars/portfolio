import styled from "styled-components";
import Image from "next/image";
import QualityData from "../quality.json";
import { useState } from "react";

const Main = styled.div`
    position: relative;
    background-image: linear-gradient(#785AAB, #241340);
    display: flex;
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
`;

const HoverDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 1000px;
`;

const Quality = styled.a`
    background-color: #482680;
    border: 3px solid #AD7BFF;
    border-radius: 5px;
    width: 230px;
    height: 300px;
    padding: 15px;
    margin: 20px;
    transition: 0.3s;
    cursor: pointer;
    :hover{
        transform: translateY(-15px);
    }
`;

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
    border-radius: 30px;
    margin-right: 100px;
    width: 700px;
    height: 600px;
    padding: 30px;
    overflow: hidden;
`;

const StyledH2 = styled.h2`
    font-size: 90px;
    margin: 0;
    margin-top: 20px;
    color: #11C518;
`;

const BigDash = styled.div`
    background-color: #11C518;
    width: 500px;
    height: 8px;
`;

const SmallDash = styled.div`
    background-color: #11C518;
    width: 300px;
    height: 5px;
    margin-top: 10px;
`;

const StyledUl = styled.ul`
    margin-top: 30px;
    font-size: 25px;
`;

export default function About(){

    const [display, setDisplay] = useState();

    function HandleHover(id){
        setDisplay(id);
    }

    return(
        <Main>
            <WhiteTriangle/>
            <HoverDiv>
                {QualityData && QualityData.map( quality =>{
                return(
                    <Quality id={quality.id} key={quality.id} onMouseEnter={_=>HandleHover(quality.id)}>
                        <Image
                            src="/test.png"
                            alt="Foto"
                            width="110px"
                            height="110px"
                        />
                        <StyledH3 style={ {color: quality.color} }>{quality.title}</StyledH3>
                        <Description>{quality.content}</Description>
                    </Quality>
                    )
                })}
            </HoverDiv>
            <SideDiv>
                {QualityData && QualityData.map((quality, key)=>{
                    return(
                        <div key={key}>
                        {display == quality.id && (
                            <div style={{ animationName: `slideUp`, animationDuration: '600ms'  }}>
                                <StyledH2 style={ {color: quality.color} }>{quality.title}</StyledH2>
                                <BigDash style={ {backgroundColor: quality.color} }/>
                                <SmallDash style={ {backgroundColor: quality.color} }/>
                                {quality.particular && quality.particular.map((particular, key)=>{
                                    return(
                                        <StyledUl key={key}>
                                            <li>{particular.l1}</li>
                                            <li>{particular.l2}</li>
                                            <li>{particular.l3}</li>
                                            <li>{particular.l4}</li>
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
