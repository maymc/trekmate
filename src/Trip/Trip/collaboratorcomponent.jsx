import React from 'react';
import "./styles.css"

export const Collaborators = (props) => {
  console.log('PROPS: ', props);

  return props.something.map(collaborators =>
    <div className="user-circle">
        <p>M</p>
    </div>


  )
}



