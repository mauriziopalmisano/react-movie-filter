import { useState, useEffect } from 'react'
import filmsArray from './data/filmsArray'


function App() {
  const emptyfilmOBJ = { title: '', genre: '' };
  const [filmOBJ, setFilmOBJ] = useState(emptyfilmOBJ);
  const [filmsList, setFilmslist] = useState(filmsArray);
  const [filteredFilmsList, setFilteredFilmsList] = useState(filmsList);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [searchedTitle, setSearchedTitle] = useState('');


  const genreList = filmsList
    .filter((film, index, selfArray) => index === selfArray
      .findIndex(element => element.genre === film.genre));

  const changeHandler = (event) => {
    const target = event.target;
    const targetValue = target.value;
    const targetName = target.name;
    if (targetName === 'genre') {
      setSelectedGenre(targetValue);
    } else if (targetName === 'title') {
      setSearchedTitle(targetValue);
    } else if (targetName === 'addTitle') {
      const newFilmOBJ = { ...filmOBJ, ['title']: targetValue };
      setFilmOBJ(newFilmOBJ);
    } else {
      const newFilmOBJ = { ...filmOBJ, ['genre']: targetValue };
      setFilmOBJ(newFilmOBJ);
      console.log(newFilmOBJ);
      
    }
  }



  const submitHandler = (event) => {
    event.preventDefault();
    const newFilmToAdd = {...filmOBJ, id:crypto.randomUUID()};
    const newFilmsList = [...filmsList, newFilmToAdd];
    setFilmslist(newFilmsList);
    setFilmOBJ(emptyfilmOBJ);
  }





  useEffect(() => {
    let newFilteredFilmsList = filmsList;
    if (selectedGenre !== '') {
      newFilteredFilmsList = filmsList.filter(film => {
        return film.genre === selectedGenre
      });
    }
    if (searchedTitle !== '') {
      newFilteredFilmsList = newFilteredFilmsList.filter(film => {
        return film.title.toLowerCase().includes(searchedTitle.toLowerCase())
      });
    }

    setFilteredFilmsList(newFilteredFilmsList);
  }, [selectedGenre, searchedTitle, filmsList]);


  return (
    <>
      <header className="container">
        <div className="row justify-content-center mb-3">
          <div className='col-3'>
            <h1 className='text-uppercase text-nowrap'>galleria film</h1>
          </div>
        </div>
      </header>
      <main className="container">
        <div className="row justify-content-center">
          <div className='col-6'>
            <select className="form-select" value={selectedGenre} onChange={changeHandler} name='genre' >
              <option selected disabled value=''>Scegli un Genere</option>
              <option value=''>Tutti i generi</option>
              {genreList.map(film => {
                const { id, genre } = film;
                return (
                  <option key={id} value={genre}>{genre}</option>
                )
              })}
            </select>
          </div>
          <div className='col-6'>
            <label htmlFor="title-search">Cerca per titolo</label>
            <input type="text" id='title-search' value={searchedTitle} onChange={changeHandler} name='title' />
          </div>
        </div>
        <form className="row justify-content-center align-items-center" onSubmit={submitHandler}>
          <div className='col-12 d-flex justify-content-center'>
            <h3>Aggiungi un Film </h3>
          </div>
          <div className="col-3">
            <label htmlFor="add-title">Titolo Film</label>
            <input type="text" id='add-title' value={filmOBJ.title} onChange={changeHandler} name='addTitle' required />
          </div>
          <div className="col-3">
            <select className="form-select" value={filmOBJ.genre} onChange={changeHandler} name='addGenre' >
              <option selected disabled value=''>Scegli un Genere</option>
              {genreList.map(film => {
                const { id, genre } = film;
                return (
                  <option key={id} value={genre}>{genre}</option>
                )
              })}
            </select>
          </div>
          <div className='col-3'>
            <button type='submit' className='btn btn-primary'>Aggiungi</button>
          </div>
        </form>
        <div className="row justify-content-center">
          {filteredFilmsList.map(film => {
            const { id, title, genre } = film;
            return (
              <div className='col-3 m-2' key={id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">{title}</h5>
                    <p className="card-text text-capitalize">{genre}</p>
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
