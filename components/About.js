import styled from "styled-components";
import Image from "next/image";
import QualityData from "../quality.json";
import { useEffect, useState } from "react";

const Main = styled.div`
    background-image: linear-gradient(#785AAB, #241340);
    display: flex;
    align-items: center;
    padding: 60px 0;
    justify-content: center;
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

    return(
        <Main>
            {QualityData && QualityData.map( quality =>{
                return(
                <>
                <HoverDiv>
                            <Quality id={quality.id} key={quality.id}>
                                
                                <Image
                                    src="/test.png"
                                    alt="Foto"
                                    id="photo"
                                    width="110px"
                                    height="110px"
                                />
                                <StyledH3 style={ {color: quality.color} }>{quality.title}</StyledH3>
                                <Description>{quality.content}</Description>
                            </Quality>
                </HoverDiv>
                <SideDiv>
                    <StyledH2 style={ {color: quality.color} }>{quality.title}</StyledH2>
                    <BigDash style={ {backgroundColor: quality.color} }/>
                    <SmallDash style={ {backgroundColor: quality.color} }/>
                    {quality.particular && quality.particular.map(particular=>{
                        return(
                            <StyledUl>
                                <li>{particular.l1}</li>
                                <li>{particular.l2}</li>
                                <li>{particular.l3}</li>
                                <li>{particular.l4}</li>
                            </StyledUl>
                        )
                    })}
                </SideDiv>
                </>
                )
            })}
        </Main>
    )
}