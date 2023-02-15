import { useState } from 'react'
import React from 'react'
import './Form.scss'

const Form = (props) => {

  const [input, setInput] =useState("")

  //const {text} = props

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id:Math.floor(Math.random()*100),
      text:input
    })

    setInput('')
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add your task here...'
        value={input}
        name='text'
        className='form__input'
        onChange={handleChange}/>
      <button className='form__button'>+</button>
    </form>
  )
}

export default Form