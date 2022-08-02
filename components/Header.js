import { useState } from "react";
import styled from "styled-components";

const Main = styled.header`
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.div`
  width: 700px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 70px;
  padding: 5px 0;
`;

const Name = styled.h2`
  font-size: 35px;
  margin: 0 0 0 20px;
`;

const Nav = styled.ul`
  position: relative;
`;

const Indicator = styled.div`
  position: absolute;
  width: 110px;
  top: 0%;
  height: 35px;
  background: #c099ff;
  border-radius: 50px;
  transition: 0.5s;
  `;

const StyledLi = styled.li`
    position: relative;
    list-style: none;
    display: inline;
    font-size: 23px;
    font-weight: 700;
    margin: 0 20px;
    color: rgba(0, 0, 0, 0.8);
    z-index: 1;
    cursor: pointer;
    :nth-child(1).active ~ ${Indicator}{
      transform: translateX(-8px);
    }
    :nth-child(2).active ~ ${Indicator}{
      transform: translateX(95px);
    }
    :nth-child(3).active ~ ${Indicator}{
      transform: translateX(212px);
    }
    :nth-child(4).active ~ ${Indicator}{
      transform: translateX(333px);
    }
  `;

export default function Header() { 
  const [inicioActive, setInicioActive] = useState(true);
  const [sobreActive, setSobreActive] = useState(false);
  const [projetoActive, setProjetoActive] = useState(false);
  const [cursosActive, setCursosActive] = useState(false);

  function handleInicio(){
    setInicioActive(true);
    setSobreActive(false);
    setProjetoActive(false);
    setCursosActive(false);
  }
  function handleSobre(){
    setInicioActive(false);
    setSobreActive(true);
    setProjetoActive(false);
    setCursosActive(false);
  }
  function handleProjeto(){
    setInicioActive(false);
    setSobreActive(false);
    setProjetoActive(true);
    setCursosActive(false);
  }
  function handleCurso(){
    setInicioActive(false);
    setSobreActive(false);
    setProjetoActive(false);
    setCursosActive(true);
  }

  return (
    <Main>
      <Logo>
        <StyledImg src="marsLogo.png" alt="Guilherme Mars Logo" />
        <Name>GuilhermeMars</Name>
      </Logo>
      <Nav>
        <StyledLi className={inicioActive ? 'active' : ''} onClick={handleInicio}>
          Início
        </StyledLi>
        <StyledLi className={sobreActive ? 'active' : ''} onClick={handleSobre}>Sobre</StyledLi>
        <StyledLi className={projetoActive ? 'active' : ''} onClick={handleProjeto}>Projetos</StyledLi>
        <StyledLi className={cursosActive ? 'active' : ''} onClick={handleCurso}>Cursos</StyledLi>
        <Indicator />
      </Nav>
    </Main>
  );
}
