import Image from "next/image";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Background = styled.div`
  background: linear-gradient(63.13deg, #482680 51.04%, #c099ff 51.05%);
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  max-width: 1800px;
  align-items: center;
  padding: 150px 0 70px 0;
  color: white;
  margin: auto;
`;

const Presentation = styled.div`
  flex: 1 1 0px;
`;

const StyledH2 = styled.h2`
  font-size: 30px;
  font-weight: 400;
  margin: 0;
`;

const StyledH1 = styled.h1`
  font-size: 60px;
  line-height: 80px;
  margin: 0;
`;

const StyledP = styled.p`
  font-size: 20px;
  margin: 10px 0;
  font-weight: 400;
`;

const StyledMainImage = styled.div`
  max-width: 700px;
  flex: 1 1 0px;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 560px;
  width: 524px;
  margin-left: 50px;
  margin-right: 30px;
  background-color: white;
  border-radius: 10px;
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
  font-size: 30px;
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
    <Background>
    <Main>
      <Presentation data-aos="fade-right">
        <StyledH2>Guilherme Martins Spiandorin</StyledH2>
        <StyledH1>Desenvolvedor Web Front-end</StyledH1>
        <StyledP>Júnior - Valinhos, Sp - Remoto/Híbrido</StyledP>
      </Presentation>
      
      <StyledMainImage>
        <Image
          src="/test.png"
          alt="Minha foto"
          id="photo"
          width="600px"
          height="600px"
        />
      </StyledMainImage>

      <SocialMedia data-aos="fade-left">
        <SocialImage href="https://www.linkedin.com/in/guilherme-martins-216a43207/" target="_blank" rel="noreferrer">
          <Image src="/Linkedin.png" alt="Linkedin" width="500px" height="500px" />
        </SocialImage>
        <SocialImage href="https://github.com/guilhermeMars" target="_blank" rel="noreferrer">
          <Image src="/Github.png" alt="Github" width="500px" height="500px" />
        </SocialImage>
        <SocialImage href="https://www.instagram.com/stars_fade/" target="_blank" rel="noreferrer">
          <Image
            src="/Instagram.png"
            alt="Instagram"
            width="500px"
            height="500px"
          />
        </SocialImage>
        <SocialImage href="https://twitter.com/Stars_Fadee" target="_blank" rel="noreferrer">
          <Image src="/Twitter.png" alt="Twitter" width="500px" height="500px" />
        </SocialImage>
        <SocialImage>
          <Image src="/Gmail.png" alt="Gmail" width="280px" height="210px" onClick={()=> (displayText == false) ? setDisplayText(true) : setDisplayText(false)} />
        </SocialImage>
          {displayText && <StyledEmail>guilhermemspiandorin@gmail.com</StyledEmail> }
      </SocialMedia>
    </Main>
    </Background>
    </>
  );
}
