import  '../create.css'
import { Link } from 'react-router-dom'
import $store, { setNewFilm, addFilm } from "../store/store";
import { useStore } from 'effector-react';

export default function AddFilm() {
  const store = useStore($store);

  return (
<div className="login-form">
  <Link to={'/'}>Назад к фильмам</Link>
  <div className="form-input-material">
    <input 
    type="text" 
    name="title" 
    id="title" 
    value={store.newFilm.title}
    onChange={(evt) => setNewFilm({...store.newFilm, title:evt.target.value})}
    placeholder=" " className="form-control-material" required />
    <label htmlFor="title">Название</label>
  </div>
  <div className="form-input-material">
    <input type="text" name="description" id="description" 
    value={store.newFilm.description}
    onChange={(evt) => setNewFilm({...store.newFilm, description:evt.target.value})}
    placeholder=" " className="form-control-material" required />
    <label htmlFor="description">Описаине</label>
  </div>
  <div className="form-input-material">
    <input type="number" name="price" id="price" placeholder=" " 
    value={store.newFilm.price}
    onChange={(evt) => setNewFilm({...store.newFilm, price: Number(evt.target.value.replace(/\D/,''))})}
    className="form-control-material" required />
    <label htmlFor="price">Длительность</label>
  </div>
  <div className="form-input-material">
    <input type="text" name="image" id="image" placeholder=" " 
    value={store.newFilm.image}
    onChange={(evt) => setNewFilm({...store.newFilm, image:evt.target.value})}
    className="form-control-material" required />
    <label htmlFor="image">Ссылка на фото</label>
  </div>
  <div className="form-input-material">
    <input type="text" name="category" id="category" placeholder=" " 
    value={store.newFilm.category}
    onChange={(evt) => setNewFilm({...store.newFilm, category:evt.target.value})}
    className="form-control-material" required />
    <label htmlFor="category">Категория</label>
  </div>
  <button onClick={() => addFilm()} className="btn btn-primary btn-ghost">Создать</button>
</div>
  );
}