import React from 'react'
import { MOVIE_POSTAR_URL } from '../utils/constants'

const MovieCard = ({postarPath}) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card"
      src={MOVIE_POSTAR_URL+postarPath}/>
    </div>
  )
}

export default MovieCard
