import { createEffect, createEvent, createStore } from "effector"
import { IFilm } from "../models";

export interface Film {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

export const updateFilm = (films: Film[], id: number, rate: number): Film[] =>
  films.map((Film) => ({
    ...Film,
    rating: {
      rate: Film.id === id ? rate : Film.rating.rate,
      count: Film.rating.count
    },
  }));


export const addFilmToList = (films: Film[], film: Film): Film[] => [
  ...films,
  film,
];

// Effector implementation
export interface Store {
  films: Film[];
  newFilm: IFilm;
}
export const setNewFilm = createEvent<Film>();
export const addFilm = createEvent<void>();
export const update = createEvent<{ id: number; rate: number }>();

export const getFilms = createEffect(async (url: string) => {
  const req = await fetch(url);
  return req.json();
});

export default createStore<Store>({
  films: [],
  newFilm: {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    }
  },
})
  .on(getFilms.doneData, (state, films) => ({ ...state, films }))
  .on(setNewFilm, (state, newFilm):any => ({ ...state, newFilm }))
  .on(addFilm, (state) => ({
    ...state,
    newFilm: state.newFilm,
    films: addFilmToList(state.films, state.newFilm),
  }))
  // .on(addFilm, (state, e) => console.log('state', state, '\ne', e))
  .on(update, (state, { id, rate }) => ({
    ...state,
    films: updateFilm(state.films, id, rate),
  }))