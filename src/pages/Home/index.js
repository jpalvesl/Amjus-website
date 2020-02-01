import React from 'react';

import styled from 'styled-components';

import pessoal from '../../assets/data/pessoal.json';

const List = styled.ul`
  margin: 0, auto;
  padding: 50px;
  overflow: hidden;
  list-style: none;

  li {
    float: left;
    width: 200px;
    height: 200px;
    margin: 10px;
    border: 5px solid white;
    background-color: white;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, .4);
  }

  li span {
    opacity: 0;
    color: white;
    font-size: 9pt;
    text-shadow: 1px 1px 1px black;
    background-color: rgba(0, 0, 0, .3);
    line-height: 370px;
    padding: 5px;
  }

  li:hover {
    -webkit-transform: scale(1.5);
    -webkit-transition: all 0.35s;
  }

  li:hover span {
    opacity: 1;
  }
`;

function Home() { 
  return(
    <>
      <h1>Quem somos?</h1>
      <p>
          >>
      </p>

      <h2>A lenda dos Amjus</h2>
      <p>
          >>
    </p>

    <List>{pessoal.map((pessoa, id) => (<li key={id}><span>{pessoa.nickname}</span></li>))}</List>
    </>
  )
}

export default Home;