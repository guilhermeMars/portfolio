import styled from "styled-components";
import Image from "next/image";
import ProjectData from "../project.json";
import { useState } from "react";

const Main = styled.div`
    margin: 70px auto 100px auto;
`;

const StyledH1 = styled.h1`
    text-align: center;
    font-size: 110px;
    margin: 0;
    margin-bottom: 30px;
`;

const FlexProject = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ProjectDivs = styled.div`
    position: relative;
    overflow: hidden;
    width: 500px;
    margin: 20px;
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
    font-size: 40px;
    margin: 0;
`;

const StyledP = styled.p`
    font-size: 20px;
`;

const Centralization = styled.div`
    text-align: center;
`;

const StyledButton = styled.button`
    background-color: #914DFF;
    color: white;
    font-size: 30px;
    font-weight: bold;
    padding: 10px;
    width: 250px;
    border: none;
    border-radius: 20px;
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

    return(
        <Main>
            <StyledH1>Projetos</StyledH1>
            <FlexProject>
                {ProjectData && ProjectData.slice(0, nextImg).map(project=>{
                    return(
                        <ProjectDivs key={project.id} style={{ animationName: `slideDown`, animationDuration: '600ms' }}>
                            <Image
                                src={project.src}
                                alt={project.title}
                                width="640"
                                height="360"
                            />
                            {(project.link != "") ? 
                            <a href={project.link} target="_blank">
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
                    <StyledButton onClick={handleMoreImage}>Ver mais</StyledButton>
                }
                {totalImg <= nextImg &&
                    <StyledButton onClick={handleLessImage}>Ver menos</StyledButton>
                }
            </Centralization>
        </Main>
    )
}
