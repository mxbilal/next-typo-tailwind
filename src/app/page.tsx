'use client'
import { useState } from 'react'

const generateBoard = (size: number) => {
  let board: Array<number[]> = []
  for (let i: number = 0; i < size; i++) {
    board.push([...Array(size)])
  }
  return board
}
type cell = string | number
export default function Home() {
  const [board, setBoard] = useState<cell[][]>(generateBoard(3)),
    [player, setPlayer] = useState<string>('x'),
    handleClick = (r: number, c: number) => {
      let current = board[r][c]
      if (current === undefined) {
        board[r][c] = player
        setBoard([...board])
        setPlayer(player === 'x' ? 'y' : 'x') 
      }
    }
  return (
    <div className='container bg-slate-800' style={{ height: '100vh' }}>
      <h1 className='text-xl font-semibold text-stone-100 text-center font-mono'>Tic Tac Toe</h1>
      <div className='flex justify-center py-8 items-center'>
        {board.map((row, r) =>
          <div >
            {row.map((cell, c) =>
              <div className='border-stone-100 w-14 h-14 border-2 text-stone-50 text-center' onClick={() => handleClick(r, c)}>{cell}</div>
            )}
          </div>
        )}
      </div>
    </div >
  )
}
