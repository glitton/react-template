import React from 'react'
import { render } from 'react-dom'
import { morning, night } from './lib'


render(
  <div>
    {morning}
    {night}
  </div>,
  document.getElementById('react-container')
)
