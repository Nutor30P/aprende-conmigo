import { useState } from 'react'
import confetti from 'canvas-confetti'
import '../styles/triki.css'
import { Link } from 'react-router-dom'


const TURNS ={
  X: 'X',
  O: 'O'
}


function Triki() {

  const [board, setBoard] =  useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
      if(board[index] || winner) return
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
      const newWinner = checkWinner(newBoard)
      if(newWinner) {
        confetti()
        setWinner(newWinner)
      } else if(checkEndGame(newBoard)) {
        setWinner(false)
      }
  }

  const Square =  ({children, updateBoard, index, isSelect}) => {
    const className = `square ${isSelect ? 'is-selected' : ''}`
    const handleClick = () => {
      updateBoard(index)
    }
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }

  const checkWinner = (boardToCheck) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i]
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    return null
  }


  return (
    <main className='board'>
      <h1>Triki</h1>   
      <section className='game'>
        {
          board.map((square, index) => {
            return(
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
        }
        )
        }
      </section>
      <button onClick={resetGame}>Empezar de Nuevo</button>
      <section className='turn'>
        <Square isSelect={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelect={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2 className='text-winner'>
                {
                winner === false
                  ? 'No winner'
                  : `The winner is ${winner}`
                }
              </h2>
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>
              <footer className='carta'>
                <button className='boton' onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
      <Link to='/aprende-conmigo/' className='link'>
      <h3 style={{
        color: 'white',
        textAlign: 'left',
        marginTop: '20px'
      }}>Home</h3>
      </Link>
    </main>
  )
}

export default Triki
