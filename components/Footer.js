import Image from "next/image";
import styled from "styled-components";

const Main = styled.footer`
    width: 100%;
    padding: 5px;
    background-color: #604D80;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    color: white;
`;

const StyledP = styled.p`
    font-size: 18px;
    margin: 5px 0;
    padding: 5px;
`;

const StyledA = styled(StyledP).attrs({
    as: "a",
})`
    border-radius: 3px;
    transition: 0.5s;
    cursor: pointer;
    :hover{
        background-color: #4C3D66;
    }
`

const ImageDiv = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

const StyledImg = styled.a`
    width: 70px;
    transition: 0.25s;
    :hover{
        width: 75px;
    }
`;

export default function Footer(){
    return(
        <Main>
            <div>
                <StyledP><strong>Email: </strong>guilhermemspiandorin@gmail.com</StyledP>
                <StyledA href="https://api.whatsapp.com/send?phone=5519999007601" target="_blank" rel="noreferrer"><strong>Whatsapp: </strong>(19) 99900-7601</StyledA>
            </div>
            <ImageDiv>
                <StyledImg href="https://www.linkedin.com/in/guilherme-martins-216a43207/" target="_blank" rel="noreferrer">
                    <Image src="/Linkedin.webp" alt="Linkedin" width="70" height="70" />
                </StyledImg>
                <StyledImg href="https://github.com/guilhermeMars" target="_blank" rel="noreferrer">
                    <Image src="/Github.webp" alt="Github" width="70" height="70" />
                </StyledImg>
            </ImageDiv>
        </Main>
    )
}
