import React, { Component } from 'react';
import './App.scss';
import Search from './components/search/index'
import Action from './components/action/index'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header>
          <h1 className="title">Pokedex App</h1>
          <Search />
        </header>
        <main>
          <div className="poke-info">
            <div className="evo-chain">
              <div className="evo-sprite main-sprite">
                <img 
                  alt="Bulbasaur front-sprite"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                />
              </div>
              <div className="evo-sprite">
                <img 
                  alt="Bulbasaur front-sprite"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
                />
              </div>
              <div className="evo-sprite">
                <img 
                  alt="Bulbasaur front-sprite"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
                />
              </div>
            </div>
            <div className="info">
              <div className="info-specify">
                <div className="poke-name">#1 Bulbasaur</div>
                <div className="measures">
                  <div>Height: 0.7m</div>
                  <div>Weight: 6.9kg</div>
                </div>
                <div className="poke-type">
                  <div className="poke-type-one">Grass</div>
                  <div className="poke-type-two">Poison</div>
                </div>
              </div>
            </div>
            <div className="abilities">
              <div>Abilities</div>
              <ul>
                <li>Chlorophyll <em>(Hidden)</em></li>
                <li>Overgrow</li>
              </ul>
            </div>
            <div className="stats">
              <div className="stats-name">
                <ul>
                  <li>HP:</li>
                  <li>Attack:</li>
                  <li>Defense:</li>
                  <li>Sp. Atk:</li>
                  <li>Sp. Def:</li>
                  <li>Speed:</li>
                </ul>
              </div>
              <div className="stats-value">
              <ul>
                  <li>45</li>
                  <li>49</li>
                  <li>49</li>
                  <li>65</li>
                  <li>65</li>
                  <li>45</li>
                </ul>
              </div>
              <div className="stats-bar">
              <ul>
                  <li><div id="hp"></div></li>
                  <li><div id="atk"></div></li>
                  <li><div id="def"></div></li>
                  <li><div id="spAtk"></div></li>
                  <li><div id="spDef"></div></li>
                  <li><div id="speed"></div></li>
                </ul>
              </div>
            </div>
            <div className="more">
              <Action elemId={"moves"} title={"MOVES"} />
              <Action elemId={"gameVersions"} title={"GAME VER."} />
            </div>
          </div>
        </main>
        <footer>
          <div className="pagination">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>...</li>
              <li>962</li>
              <li>963</li>
              <li>964</li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
