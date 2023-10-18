import {Link} from 'react-router-dom'
import { IFilm } from '../models'
import  '../index.css'
interface FilmProps {
  film: IFilm
}
export function FilmJ(props: FilmProps) {

  return (
        <div className="movie">
          <div className="movie-image"> 
            <img src={props.film.image} alt="" />
          </div>
          <div className="rating">
            {/* <p>RATING</p>
            <div className="stars">
              <div className="stars-in"> </div>
            </div>
            <span className="comments">12</span>  */}
            <h4>{props.film.title}</h4>
            <p>{props.film.description}</p>
          </div>
        </div>


    // Отображение списка фильмов с их названиями, кратким описанием и постерами
  )
}