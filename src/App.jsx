import { useState, useEffect } from 'react'
import filmsArray from './data/filmsArray'


function App() {
  //const emptyfilmOBJ = { title: '', genre: '' };
  //const [filmOBJ, setFilmOBJ] = useState(emptyfilmOBJ);
  const [filmsList, setFilmslist] = useState(filmsArray);
  const [filteredFilmsList, setFilteredFilmsList] = useState(filmsArray);
  const [selectedGenre, setSelectedGenre] = useState('');


  const genreList = filmsList
  .filter((film, index, selfArray) => index === selfArray
  .findIndex(element => element.genre === film.genre));

  const changeHandler = (event) => {
    const target = event.target;
    const targetValue = target.value;
    setSelectedGenre(targetValue);
  }


  useEffect(() => {
    if(selectedGenre === ''){
      setFilteredFilmsList(filmsList);
    } else {
      const newFilteredFilmsList = filmsList.filter(film => {
        return film.genre === selectedGenre
      });
      setFilteredFilmsList(newFilteredFilmsList);
    }
  },[selectedGenre, filmsList]);


  return (
    <>
      <header className="container">
        <div className="row justify-content-center mb-3">
          <div className='col-3'>
            <h1 className='text-uppercase text-nowrap'>galleria film</h1>
          </div>
        </div>
      </header>
      <main className="container-fluid">
        <div className="row justify-content-center">
          <div className='col-6'>
            <select class="form-select" value={selectedGenre} onChange={changeHandler} >
              <option selected disabled value=''>Scegli un Genere</option>
              <option value=''>Tutti i generi</option>
              {genreList.map(film => {
                const { id, genre} = film;
                return (
                    <option key={id} value={genre}>{genre}</option>
                )
              })}
            </select>
          </div>
        </div>
        <div className="row justify-content-center">
          {filteredFilmsList.map(film => {
            const { id,title, genre } = film;
            return (
              <div className='col-3 m-2' key={id}>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{genre}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default App
