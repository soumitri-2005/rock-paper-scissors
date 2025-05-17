import "./App.css";
import rockImg from "./images/rock-img.png";
import paperImg from "./images/paper-img.png";
import scissorImg from "./images/scissor-img.png";

function App() {
  return (
    <>
      <div className="container">
        <h1>ROCK PAPER SCISSORS</h1>

        <div className="score-board">
          <div className="score">
            <p id="user-score">0</p>
            <p>YOU</p>
          </div>
          <div className="score">
            <p id="comp-score">0</p>
            <p>COMPUTER</p>
          </div>
        </div>

        <div className="msg-container">
          <p id="msg">Play your move!</p>
        </div>

        <div className="choices">
          <div className="choice">
            <img src={rockImg} id="rock"/>
          </div>
          <div className="choice">
            <img src={paperImg} id="paper"/>
          </div>
          <div className="choice">
            <img src={scissorImg} id="scissor"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
