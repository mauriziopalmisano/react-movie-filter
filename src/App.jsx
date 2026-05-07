import { useState, useEffect } from 'react'
import filmsArray from './data/filmsArray.js'
import Main from './components/Main/Main.jsx';
import Header from './components/Header/Header.jsx';

const genreList = filmsArray
  .filter((film, index, selfArray) => index === selfArray
    .findIndex(element => element.genre === film.genre));

function App() {
  const emptyfilmOBJ = { title: '', genre: '' };
  const [filmOBJ, setFilmOBJ] = useState(emptyfilmOBJ);
  const [filmsList, setFilmslist] = useState(filmsArray);
  const [filteredFilmsList, setFilteredFilmsList] = useState(filmsList);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [searchedTitle, setSearchedTitle] = useState('');
  const [errorFlag, setErrorFlag] = useState(false);




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
    if (filmOBJ.title.trim() === '') {
      setErrorFlag(true);
    } else {
      setErrorFlag(false);
      const newFilmToAdd = { ...filmOBJ, id: crypto.randomUUID() };
      const newFilmsList = [...filmsList, newFilmToAdd];
      setFilmslist(newFilmsList);
      setFilmOBJ(emptyfilmOBJ);
    }
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
      <Header />
      <Main
        selectedGenre={selectedGenre}
        changeHandler={changeHandler}
        genreList={genreList}
        searchedTitle={searchedTitle}
        submitHandler={submitHandler}
        filmOBJ={filmOBJ}
        errorFlag={errorFlag}
        filteredFilmsList={filteredFilmsList}
      />
    </>
  )
}

export default App
