import React from 'react'

const Film = ({ data }) => {
  return (
    <div>
      <h2>Films:</h2>
      {data?.getFilms.map(film => (
        <li>{film.title}</li>
      ))}
    </div>
  )
}

export default Film
