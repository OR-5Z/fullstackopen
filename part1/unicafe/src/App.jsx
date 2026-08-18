import { useState } from 'react'

const Stat = ({name, value, unit=""}) => <p>{name}: {value} {unit}</p>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = (props) => {
  if(props.all == 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <>
      <Stat name={'good'} value={props.good} />
      <Stat name={'neutral'} value={props.neutral} />
      <Stat name={'bad'} value={props.bad} />
      <Stat name={'all'} value={props.all} />
      <Stat name={'average'} value={props.average} />
      <Stat name={'positive'} value={props.positive} unit='%'/>
    </>
  )

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good+bad+neutral

  const average = good-bad/all

  const positive = good/all * 100

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={()=>{setGood(good+1)}} text='Good' />
      <Button onClick={()=>{setBad(bad+1)}} text='Bad' />
      <Button onClick={()=>{setNeutral(neutral+1)}} text='Neutral' />
      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} all={all} neutral={neutral} average={average} positive={positive} />
    </div>
  )
}

export default App