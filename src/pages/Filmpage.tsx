import {useStore, useList} from 'effector-react'
import { Link, useParams } from 'react-router-dom'
import $store, { update, Store } from "../store/store";

function TodoList() {
  const store = useStore<Store>($store);

  const {id} = useParams()
  const ID = Number(id)
  let film = store.films[ID]
  console.log()
  console.log('film', film)
  console.log()


  return (
    <>
      <main>
    <article>
      <section className="movie-detail">
        <div className="container">
          <figure className="movie-detail-banner">

            <img src={film?.image} alt="Free guy movie poster"/>

            <button className="play-btn">
            </button>

          </figure>
          <div className="movie-detail-content">

            <Link to={'/'} className="detail-subtitle">Назад к фильмам</Link>

            <h1 className="h1 detail-title">
              {film?.title}
            </h1>

            <div className="meta-wrapper">

              <div className="badge-wrapper">
                Оценка: 
                <form className="star-wrapper">
                  <button type='button' onClick={() => update({id: film.id,rate: 5 })} style={{color: film?.rating.rate <= 5 ? 'gold' : ''}} className="fas fa-star"/>
                  <button type='button' onClick={() => update({id: film.id,rate: 4 })} style={{color: film?.rating.rate <= 4 ? 'gold' : ''}} className="fas fa-star"/>
                  <button type='button' onClick={() => update({id: film.id,rate: 3 })} style={{color: film?.rating.rate <= 3 ? 'gold' : ''}} className="fas fa-star"/>
                  <button type='button' onClick={() => update({id: film.id,rate: 2 })} style={{color: film?.rating.rate <= 2 ? 'gold' : ''}} className="fas fa-star"/>
                  <button type='button' onClick={() => update({id: film.id,rate: 1 })} style={{color: film?.rating.rate <= 1 ? 'gold' : ''}} className="fas fa-star"/>
                </form>
              </div>

              <div className="ganre-wrapper">
                Категория:
                <a href="#">{film?.category}</a>
              </div>
              <div className="ganre-wrapper">
                Длительность:
                <a href="#">{film?.rating.count} мин</a>
              </div>
            </div>

            <p className="storyline">
              {film?.description}
            </p>


          </div>

        </div>
      </section>
      </article>
    </main>
    </>
  )
}


export default function Filmpage() {
  return (
    <>
      <TodoList
      />
    </>
  )
}
