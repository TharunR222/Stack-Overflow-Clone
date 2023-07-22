import React from 'react'
import './HomeMainbar.css'
import QuestionsList from './QuestionsList'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const HomeMainbar = () => {

  const user = 1;
  const navigate = useNavigate()

  const checkAuth = () => {
    if(user === null){
      alert('Login or Signup to ask a question')
      navigate('/Auth')
    }else{
      navigate('/AskQuestion')
    }
  }

  // var questionsList = [{id:0,votes:3,noOfAnswers:2,questionTitle:"What is a function?", questionBody:"It meant to be", questionTags:['java', 'node js','react js'],userPosted:"mano",askedOn:"jan 1"}]

  const location = useLocation()

  const questionsList = useSelector(state => state.questionsReducer)
  // console.log(questionsList)

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1> :
          <>
            <p>{ questionsList.data.length } questions</p>
            <QuestionsList questionsList = {questionsList.data} />
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
