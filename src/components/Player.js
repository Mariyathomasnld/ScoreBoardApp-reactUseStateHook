import React from 'react';

export default function Player(props) {
  return (

<li className ="player">
{props.name}
{props.score}
</li>
  )
}
