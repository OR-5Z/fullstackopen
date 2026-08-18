import { useState } from 'react'

const Stat = ({name, value, unit=""}) => <p>{name}: {value}{unit}</p>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good+bad+neutral

  const average = () => {
    if(all == 0) {
      return "Add ratings to get an average."
    }
    return good-bad/all

  }

  const positive = good/all * 100

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={()=>{setGood(good+1)}} text='Good' />
      <Button onClick={()=>{setBad(bad+1)}} text='Bad' />
      <Button onClick={()=>{setNeutral(neutral+1)}} text='Neutral' />
      <h2>Statistics</h2>
      <Stat name={'good'} value={good} />
      <Stat name={'neutral'} value={neutral} />
      <Stat name={'bad'} value={bad} />
      <Stat name={'all'} value={all} />
      <Stat name={'average'} value={average()} />
      <Stat name={'positive'} value={positive} unit='%'/>
    </div>
  )
}

export default App