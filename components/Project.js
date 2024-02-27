import styled from "styled-components";
import Image from "next/image";
import ProjectData from "../project.json";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = styled.div`
    margin: 70px auto 100px auto;
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

const FlexProject = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ProjectDivs = styled.div`
    position: relative;
    overflow: hidden;
    width: 430px;
    margin: 20px;
    @media only screen and (max-width: 600px) {
        width: 390px;
        margin: 20px 0;
    }
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
    ${ProjectDivs}:hover & {
        top: 15%;
        display: block;
    }
`;

const StyledH4 = styled.h4`
    font-size: 35px;
    margin: 0;
`;

const StyledP = styled.p`
    font-size: 16px;
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

export default function Project(){

    const imagePerRow = 3;
    const totalImg = ProjectData.length;
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
        <Main data-aos="fade-up" data-aos-delay="50">
            <StyledH1 id="projetos">Projetos</StyledH1>
            <FlexProject>
                {ProjectData && ProjectData.slice(0, nextImg).map(project=>{
                    return(
                        <ProjectDivs key={project.id} style={{ animationName: `slideDown`, animationDuration: '600ms' }}>
                            <Image
                                src={project.src}
                                alt={project.title}
                                width="426"
                                height="240"
                            />
                            {(project.link != "") ? 
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <HoverDiv>
                                    <StyledH4>{project.title}</StyledH4>
                                    <StyledP>{project.description}</StyledP>
                                </HoverDiv>
                            </a>
                            :
                            <HoverDiv>
                                <StyledH4>{project.title}</StyledH4>
                                <StyledP>{project.description}</StyledP>
                            </HoverDiv>
                            }
                        </ProjectDivs>
                    )
                })}
            </FlexProject>
            <Centralization>
                {totalImg > nextImg &&
                    <StyledButton onClick={handleMoreImage}>Ver mais <img src="/Arrow.webp" /></StyledButton>
                }
                {totalImg <= nextImg &&
                    <StyledButton onClick={handleLessImage}>Ver menos <img src="/Arrow.webp" style={{ transform: "rotate(180deg)" }} /></StyledButton>
                }
            </Centralization>
        </Main>
    )
}
