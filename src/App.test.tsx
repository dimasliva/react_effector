import { render, screen } from '@testing-library/react';
import Filmspage from './pages/Filmspage';
import Filmpage from './pages/Filmpage';
import { BrowserRouter } from 'react-router-dom';
import getFilms from './mock/mock';

describe('works', () => {
  render(
    <BrowserRouter>
    <Filmspage/>
    <Filmpage/>
    </BrowserRouter>
  )
  it('returns the expected value', async () => {
    // const result = await axios.get('')
    expect(10+10).toBe(20);
  });
  test("Получение фильмов с API", async () => {
      const res = await getFilms()
      expect(res.status).toBe(200)
  })
});

