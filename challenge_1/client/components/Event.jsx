import React from 'react';

// import styles from '../../styles/Event.css';

const Event = ({
  date,
  description,
}) => (
  <div>
    <p>date: {date}</p>
    <p>description: {description}</p>
    <p></p>
  </div>
);

export default Event;
