import { useState } from "react";
import styled from "styled-components";

const Spacing = styled.div`
  padding: 0 15vw;
  height: 74px;
`;

const StyledNavBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 1;
  top: 0;
  bottom: 0;
  width: 15em;
  padding: 0 2vw;
  background-color: white;
  animation: slideRight 0.5s;
`;

const StyledH1 = styled.h1`
  font-size: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledContentBar = styled.a`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.8);
  margin: 5px 10px;
  background-color: rgb(237, 232, 232);
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  &:hover{
    background-color: #C9A4DE;
  }
`;

const Main = styled.header`
  position: fixed;
  box-shadow: rgb(0 0 0 / 40%) 0px 1px 4px 0;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  @media only screen and (max-width: 850px) {
    justify-content: space-evenly;
  }
`;

const StyledMenu = styled.img`
  display: none;
  width: 60px;
  @media only screen and (max-width: 850px) {
    display: block;
  }
`;

const Logo = styled.div`
  width: 700px;
  height: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 850px) {
    width: 350px;
  }
`;

const StyledImg = styled.img`
  width: 70px;
  padding: 5px 0;
  @media only screen and (max-width: 850px) {
    width: 60px;
  }
`;

const Name = styled.h2`
  font-size: 35px;
  margin: 0 0 0 20px;
  @media only screen and (max-width: 850px) {
    font-size: 30px;
  }
`;

const Nav = styled.ul`
  position: relative;
  @media only screen and (max-width: 850px) {
    display: none;
  }
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
    &:nth-child(1).active ~ ${Indicator}{
      transform: translateX(-8px);
    }
    &:nth-child(2).active ~ ${Indicator}{
      transform: translateX(95px);
    }
    &:nth-child(3).active ~ ${Indicator}{
      transform: translateX(212px);
    }
    &:nth-child(4).active ~ ${Indicator}{
      transform: translateX(333px);
    }
  `;

export default function Header() { 
  const [inicioActive, setInicioActive] = useState(true);
  const [sobreActive, setSobreActive] = useState(false);
  const [projetoActive, setProjetoActive] = useState(false);
  const [cursosActive, setCursosActive] = useState(false);

  const [menu, setMenu] = useState(false);

  function handleMenu(){
    if(menu === false){
      setMenu(true);
    } else{
      setMenu(false);
    }
  }

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
    <>
    {menu && (
      <StyledNavBar>
        <Spacing/>
        <StyledH1>Menu</StyledH1>
          <StyledContentBar onClick={handleMenu} href="#inicio">Inicio</StyledContentBar>
          <StyledContentBar onClick={handleMenu} href="#sobre">Sobre</StyledContentBar>
          <StyledContentBar onClick={handleMenu} href="#projetos">Projetos</StyledContentBar>
          <StyledContentBar onClick={handleMenu} href="#cursos">Cursos</StyledContentBar>
      </StyledNavBar>
    )}
    <Main>
      <StyledMenu src="/Menu.webp" alt="Menu" onClick={handleMenu}/>
      <Logo>
        <StyledImg src="marsLogo.webp" alt="Guilherme Mars Logo" />
        <Name>GuilhermeMars</Name>
      </Logo>
      <Nav>
        <StyledLi className={inicioActive ? 'active' : ''} onClick={handleInicio}><a href="#inicio">Início</a></StyledLi>
        <StyledLi className={sobreActive ? 'active' : ''} onClick={handleSobre}><a href="#sobre">Sobre</a></StyledLi>
        <StyledLi className={projetoActive ? 'active' : ''} onClick={handleProjeto}><a href="#projetos">Projetos</a></StyledLi>
        <StyledLi className={cursosActive ? 'active' : ''} onClick={handleCurso}><a href="#cursos">Cursos</a></StyledLi>
        <Indicator />
      </Nav>
    </Main>
    </>
  );
}
