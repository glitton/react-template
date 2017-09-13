import React from 'react'
import text from './titles.json'
import './stylesheets/hello.css'
import './stylesheets/night.scss'

export const morning = (
  <h1 id='title'
      className='hello'>
      { text.morning }
  </h1>
)

export const night = (
  <h1 id='night'
      className='night'>
      { text.night }
  </h1>
)

