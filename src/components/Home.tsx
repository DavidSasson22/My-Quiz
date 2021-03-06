import React from 'react'
import { Link } from 'react-router-dom'
import { HomePage } from '../style/Home.style'
import { Difficulty } from '../API';



type Props = {
  setQuiz: (
    value: {
      totalQuestions: number, category: number, difficulty: Difficulty
    } | ((
      prevVar: {
        totalQuestions: number, category: number, difficulty: Difficulty
      }) => {
        totalQuestions: number, category: number, difficulty: Difficulty
      })) => void
}

let difficulty: Difficulty;
let category: number;
let number: number;

const Home: React.FC<Props> = ({ setQuiz }) => {

  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    setQuiz({
      difficulty: difficulty ? difficulty : Difficulty.EASY,
      category: category ? category : 10,
      totalQuestions: number ? number : 10
    })
  }


  const difficultyHandler = (e: string) => {
    switch (e) {
      case 'easy':
        difficulty = Difficulty.EASY;
        break;
      case 'medium':
        difficulty = Difficulty.MEDIUM;
        break;
      case 'hard':
        difficulty = Difficulty.HARD;
        break;
    }
  }


  return (
    <>
      <HomePage>
        <header>
          <h1>react quiz</h1>
          <h2>TypeScript & Styled-Components</h2>
        </header>
        <form onSubmit={(e) => { e.preventDefault() }}>
          <div className="field">
            <label htmlFor="category">Choose Category:</label>
            <select id="category" name="category" defaultValue="10" onChange={(e) => category = Number(e.target.value)} required>
              <option value="10">Books</option>
              <option value="11">Film</option>
              <option value="12">Music</option>
              <option value="23">History</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="difficulty">Choose Difficulty:</label>
            <select id="difficulty" name="difficulty" defaultValue={Difficulty.EASY}
              onChange={(e) => difficultyHandler(e.target.value)} required>
              <option value={Difficulty.EASY}>Easy</option>
              <option value={Difficulty.MEDIUM}>Medium</option>
              <option value={Difficulty.HARD}>Hard</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="questionsN">Choose Number of Questions (max 50):</label>
            <input type="number" defaultValue="10" id="questionsN" name="questionsN" min="1" max="50" onChange={(e) => number = Number(e.target.value)} required />
          </div>
          <div>
            <Link to="/play">
              <button type="submit" onClick={(e) => submit(e)}>Submit</button>
            </Link>
          </div>
        </form>
      </HomePage>
    </>
  )
}


export default Home;
