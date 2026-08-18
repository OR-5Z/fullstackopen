import { useState } from 'react'

const StatisticLine = ({name, value, unit=""}) => 
    <tr>
      <td>
        {name}
      </td>
      <td>{value} {unit}</td>
    </tr>


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
    <div>
      <table>
        <tbody>
          <StatisticLine name={'good'} value={props.good} />
          <StatisticLine name={'neutral'} value={props.neutral} />
          <StatisticLine name={'bad'} value={props.bad} />
          <StatisticLine name={'all'} value={props.all} />
          <StatisticLine name={'average'} value={props.average} />
          <StatisticLine name={'positive'} value={props.positive} unit='%'/>
        </tbody>
      </table>
    </div>
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