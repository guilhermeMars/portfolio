import Image from "next/image";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const maxWd = "520px"

const Background = styled.div`
  background: linear-gradient(63.13deg, #482680 51.04%, #c099ff 51.05%);
`;

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 180vh;
  align-items: center;
  padding: 150px 0 70px 0;
  color: white;
  margin: auto;
`;

const Presentation = styled.div`
  max-width: ${maxWd};
  margin-right: 10px;
  flex: 1;
  @media only screen and (max-width: 600px) {
    margin: 0 10px;
  }
`;

const StyledH2 = styled.h2`
  font-size: 25px;
  font-weight: 400;
  margin: 0;
  
`;

const StyledH1 = styled.h1`
  font-size: 55px;
  line-height: 80px;
  margin: 0;
  @media only screen and (max-width: 600px) {
    font-size: 45px;
  }
`;

const StyledP = styled.p`
  font-size: 18px;
  margin: 10px 0;
  font-weight: 400;
`;

const FlexMainImage = styled.div`
  max-width: ${maxWd};
  flex: 1;
`;

const StyledMainImage = styled.div`
  text-align: center;
  margin: auto;
  width: 500px;
  border-radius: 100px;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    width: 350px;
    margin: 60px auto;
  }
`;

const SocialFlex = styled.div`
  max-width: ${maxWd};
  flex: 1;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 560px;
  min-width: 400px;
  max-width: 500px;
  margin: 0 30px;
  background-color: white;
  border-radius: 10px;
  @media only screen and (max-width: 500px) {
    margin: auto;
    min-width: 400px;
    max-width: 400px;
    padding: 0;
  }
`;

const SocialImage = styled.a`
  width: 140px;
  margin: 15px;
  transition: width 0.2s;
  :hover{
    width: 150px;
    cursor: pointer;
  }
`;

const StyledEmail = styled.p`
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  color: black;
  margin: -10px 0 0 0;
  animation: 0.4s slideDown;
`;

export default function Start() {

  const [displayText, setDisplayText] = useState(false);

  useEffect(()=>{
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <>
    <Background id="inicio">
    <Main>
      <Presentation data-aos="fade-right">
        <StyledH2>Guilherme Martins Spiandorin</StyledH2>
        <StyledH1>Desenvolvedor Web Front-end</StyledH1>
        <StyledP>Júnior - Valinhos, Sp - Remoto/Híbrido</StyledP>
      </Presentation>
      
      <FlexMainImage>
        <StyledMainImage>
          <Image
            src="/perfil.webp"
            alt="Minha foto"
            id="photo"
            width="600px"
            height="600px"
          />
        </StyledMainImage>
      </FlexMainImage>

      <SocialFlex>
        <SocialMedia data-aos="fade-left">
          <SocialImage href="https://www.linkedin.com/in/guilherme-martins-216a43207/" target="_blank" rel="noreferrer">
            <Image src="/Linkedin.webp" alt="Linkedin" width="200px" height="200px" />
          </SocialImage>
          <SocialImage href="https://github.com/guilhermeMars" target="_blank" rel="noreferrer">
            <Image src="/Github.webp" alt="Github" width="200px" height="200px" />
          </SocialImage>
          <SocialImage href="https://www.instagram.com/stars_fade/" target="_blank" rel="noreferrer">
            <Image
              src="/Instagram.webp"
              alt="Instagram"
              width="200px"
              height="200px"
            />
          </SocialImage>
          <SocialImage href="https://twitter.com/Stars_Fadee" target="_blank" rel="noreferrer">
            <Image src="/Twitter.webp" alt="Twitter" width="200px" height="200px" />
          </SocialImage>
          <SocialImage>
            <Image src="/Gmail.webp" alt="Gmail" width="280px" height="210px" onClick={()=> (displayText == false) ? setDisplayText(true) : setDisplayText(false)} />
          </SocialImage>
            {displayText && <StyledEmail>guilhermemspiandorin@gmail.com</StyledEmail> }
        </SocialMedia>
      </SocialFlex>
    </Main>
    </Background>
    </>
  );
}
