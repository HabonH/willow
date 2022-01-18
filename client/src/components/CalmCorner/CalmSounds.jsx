import React from 'react'
import Card from '../UI/Card'
import "./CalmSounds.css"
import Audio from './Audio'
import PlayPause from '../UI/PlayPause'

// const soundClass = classNames("sound-container");

function CalmSounds(props) {
  return (
    <Card class="sound-container">
      
<PlayPause></PlayPause>
    </Card>
  )
}

export default CalmSounds
