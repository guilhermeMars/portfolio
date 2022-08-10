import styled from "styled-components";
import Image from "next/image";
import CoursesData from "../courses.json";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = styled.div`
    margin: 70px auto;
`;

const StyledH1 = styled.h1`
    text-align: center;
    font-size: 100px;
    margin: 0;
    margin-bottom: 30px;
    @media only screen and (max-width: 430px) {
        font-size: 80px;
    }
`;

const FlexCourse = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const RelativeDiv = styled.div`
    position: relative;
`;

const CourseDivs = styled.div`
    position: relative;
    overflow: hidden;
    width: 430px;
    margin: 20px;
    @media only screen and (max-width: 600px) {
        width: 390px;
        margin: 20px 0;
    }
`;

const TopCard = styled.i`
    position: absolute;
    color: white;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    top: 40px;
    left: 5px;
    width: 280px;
    height: 50px;
    background-color: #914DFF;
    border-radius: 30px;
    border-bottom-left-radius: 0;
    ::before{
        content: "";
        position: absolute;
        top: 50px;
        left: 0px;
        width: 15px;
        height: 30px;
        background-color: #482680;
        border-radius: 20px 0 0 20px;
        z-index: 2;
    }
    @media only screen and (max-width: 600px) {
        top: 30px;
        left: -14px;
    }
`;

const BlockDiv = styled.div`
    height: 50px;
    background-color: #914DFF;
    position: relative;
    top: 10px;
    width: 15px;
    height: 15px;
    background: #914DFF;
`;

const HoverDiv = styled.div`
    position: absolute;
    background-color: rgba(72, 38, 128, 0.9);
    color: white;
    padding: 20px;
    top: 100%;
    left: 0;
    bottom: 1%;
    right: 0;
    transition: 0.5s;
    ${CourseDivs}:hover & {
        top: 15%;
        display: block;
    }
`;

const StyledH4 = styled.h4`
    font-size: 35px;
    margin: 0;
    @media only screen and (max-width: 600px) {
        font-size: 31px;
    }
`;

const StyledP = styled.p`
    font-size: 18px;
`;

const Centralization = styled.div`
    text-align: center;
`;

const StyledButton = styled.button`
    background-color: #914DFF;
    color: white;
    font-size: 25px;
    font-weight: bold;
    padding: 10px;
    width: 220px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
`;

export default function Course(){

    const imagePerRow = 3;
    const totalImg = CoursesData.length;
    const [nextImg, setNextImg] = useState(imagePerRow);

    function handleMoreImage() {
        setNextImg(nextImg + imagePerRow);
    };

    function handleLessImage(){
        setNextImg(nextImg - imagePerRow);
    }

    useEffect(()=>{
        Aos.init({ duration: 700 })
    }, [])

    return(
        <Main data-aos="fade-up" data-aos-delay="50" id="cursos">
            <StyledH1>Cursos</StyledH1>
            <FlexCourse>
                {CoursesData && CoursesData.slice(0, nextImg).map(course=>{
                    return(
                        <RelativeDiv key={course.id}>
                        <CourseDivs style={{ animationName: `slideDown`, animationDuration: '600ms' }}>
                            <Image
                                src={course.src}
                                alt={course.title}
                                width="640"
                                height="360"
                                />
                            {(course.link !== "") ? (
                                <a href={course.link} target="_blank" rel="noreferrer">
                                    <HoverDiv>
                                        <StyledH4>{course.title}</StyledH4>
                                        <StyledP>{course.description}</StyledP>
                                    </HoverDiv>
                                </a>
                            ) : (
                                <HoverDiv>
                                    <StyledH4>{course.title}</StyledH4>
                                    <StyledP>{course.description}</StyledP>
                                </HoverDiv>
                            )}
                        </CourseDivs>
                        {course.topCard !== "" &&
                            <TopCard>{course.topCard}<BlockDiv/></TopCard>
                        }
                        </RelativeDiv>
                    )
                })}
            </FlexCourse>
            <Centralization>
                {totalImg > nextImg &&
                    <StyledButton onClick={handleMoreImage}>Ver mais <img src="/Arrow.webp" /></StyledButton>
                }
                {totalImg <= nextImg &&
                    <StyledButton onClick={handleLessImage}>Ver menos <img src="/Arrow.webp" style={{ transform: "rotate(180deg)" }}/></StyledButton>
                }
            </Centralization>
        </Main>
    )
}
