import { useEffect, useRef } from 'react'
import { FilmJ } from '../components/Film'
import { Link } from 'react-router-dom'
import {useStore} from 'effector-react'
import { addFilm, setNewFilm } from '../store/store'
import $store from "../store/store";

import { IFilm } from '../models'
import getFilms from '../mock/mock'

function FilmListItems() {
  const initialized = useRef(false)
  const store = useStore($store);
   const getFilm = async () => {

    if(store.films.length === 0) {
      let res = await getFilms()
      console.log('res', res)
      await res.json().then(films => {
        films.forEach((val:IFilm) => {
          setNewFilm(val)
          addFilm()
        })
      })
  
      
    }

  }



  useEffect(() => {
    if(!initialized.current) {
      initialized.current = true
      getFilm()
    }
    console.log('useEffect')
  })
  return (
    <>
    <div id="content">
      <h1 style={{fontSize: '20px'}}><Link to={'/create'}>Создать фильм</Link></h1>
    <div className="box">
    {store.films.map((film, i) => (
      <Link className='item' to={`/film/${i}`} key={i}>
        <FilmJ film={film} key={i}/>
      </Link>
      ))}
    </div>
  </div>

    </>
  );
}

function TodoList() {
  return (
    <>
      <FilmListItems />
    </>
  );
}

export default TodoList;