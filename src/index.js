import React from 'react';
import ReactDOM from 'react-dom';

class Grid extends React.Component { //represents the connect-4 grid

    constructor(props) {
        super(props);
        this.state = {
          squares: Array(42).fill(null),
          xIsNext: true,
        };
      }


    renderSquare(i) { //method used to set the value of the square as well as trigger handleClick
        return <Square value={this.state.squares[i]}  onClick={() => this.handleClick(i)}/>
    }

    handleClick(i) { //method used to set the state of the square as well as establish the next player's turn
        const squares = this.state.squares.slice();
        if (determineWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'Yellow' : 'Red';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
      }

    render() { //render method

        const winner = determineWinner(this.state.squares); //check if a winner is found
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'Yellow' : 'Red');
        }

        return( //render the 6 x 7 grid
            <div>
                <div className="status">{status}</div>
                <div className="grid-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className="grid-row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                </div>
                <div className="grid-row">
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                    {this.renderSquare(16)}
                    {this.renderSquare(17)}
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}
                    {this.renderSquare(20)}
                </div>
                <div className="grid-row">
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                    {this.renderSquare(23)}
                    {this.renderSquare(24)}
                    {this.renderSquare(25)}
                    {this.renderSquare(26)}
                    {this.renderSquare(27)}
                </div>
                <div className="grid-row">
                    {this.renderSquare(28)}
                    {this.renderSquare(29)}
                    {this.renderSquare(30)}
                    {this.renderSquare(31)}
                    {this.renderSquare(32)}
                    {this.renderSquare(33)}
                    {this.renderSquare(34)}
                </div>
                <div className="grid-row">
                    {this.renderSquare(35)}
                    {this.renderSquare(36)}
                    {this.renderSquare(37)}
                    {this.renderSquare(38)}
                    {this.renderSquare(39)}
                    {this.renderSquare(40)}
                    {this.renderSquare(41)}
                </div>

            </div>
        );
    }
}

class Game extends React.Component { //represents the concept of a game
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Grid />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/*toDO*/}</ol>
                </div>
            </div>
        );
    }
}

function Square(props) { //function component representing a square 
    var bgColour;
    if (props.value == "Yellow") {
            bgColour = 'yellow'

    } else if (props.value == "Red"){
        bgColour = 'red'
    } else {
        bgColour = 'gray'
    }
    return (
        <button className="square" onClick={props.onClick} style={{backgroundColor:bgColour}}>
            &nbsp;&nbsp;  
        </button>
    );
}

function determineWinner(squares){ //function used to determine if a winner is found with all of the winning combinations
    const lines = [
        [0, 1, 2, 3],
        [1, 2, 3, 4],
        [2, 3, 4, 5],
        [3, 4, 5, 6],
        [7, 8, 9, 10],
        [8, 9, 10, 11],
        [9, 10, 11, 12],
        [10, 11, 12, 13],
        [14, 15, 16, 17],
        [15, 16, 17, 18],
        [16, 17, 18, 19],
        [17, 18, 19, 20],
        [21, 22, 23, 24],
        [22, 23, 24, 25],
        [23, 24, 25, 26],
        [24, 25, 26, 27],
        [28, 29, 30, 31],
        [29, 30, 31, 32],
        [30, 31, 32, 33],
        [31, 32, 33, 34],
        [35, 36, 37, 38],
        [36, 37, 38, 39],
        [37, 38, 39, 40],
        [38, 39, 40, 41],
        [0, 7, 14, 21],
        [1, 8, 15, 22],
        [2, 9, 16, 23],
        [3, 10, 17, 24],
        [4, 11, 18, 25],
        [5, 12, 19, 26],
        [6, 13, 20, 27],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 16, 23, 30],
        [10, 17, 24, 31],
        [11, 18, 25, 32],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
        [14, 21, 28, 35],
        [15, 22, 29, 36],
        [16, 23, 30, 37],
        [17, 24, 31, 38],
        [18, 25, 32, 39],
        [19, 26, 33, 40],
        [20, 27, 34, 41],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c, d] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) { //finding four in a row of all of the possible combinations
          return squares[a];
        }
      }
      return null;
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);