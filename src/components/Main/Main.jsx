import Card from "./Card";
import Select from "./Select";

function Main({
    selectedGenre,
    changeHandler,
    genreList,
    searchedTitle,
    submitHandler,
    filmOBJ,
    errorFlag,
    filteredFilmsList
}) {



    return (
        <main className="container">
            <div className="row justify-content-center">
                <div className='col-6'>
                    <Select
                        value={selectedGenre}
                        onChange={changeHandler}
                        name='genre'
                        genreList={genreList}
                    />
                </div>
                <div className='col-6'>
                    <label htmlFor="title-search">Cerca per titolo</label>
                    <input type="text" id='title-search' value={searchedTitle} onChange={changeHandler} name='title' />
                </div>
            </div>
            <form className="row justify-content-center align-items-center mb-4" onSubmit={submitHandler}>
                <div className='col-12 d-flex justify-content-center'>
                    <h3>Aggiungi un Film </h3>
                </div>
                <div className="col-3 d-flex flex-column">
                    <label htmlFor="add-title">Titolo Film</label>
                    <input type="text" id='add-title' value={filmOBJ.title} onChange={changeHandler} name='addTitle' required />
                    {errorFlag && <span className='text-danger fw-bold'> NON PUOI INSERIRE UN TITOLO VUOTO</span>}
                </div>
                <div className="col-3">
                    <Select
                        value={filmOBJ.genre}
                        onChange={changeHandler}
                        name='addGenre'
                        genreList={genreList}
                    />
                </div>
                <div className='col-3'>
                    <button type='submit' className='btn btn-primary'>Aggiungi</button>
                </div>
            </form>
            <Card
                filteredFilmsList={filteredFilmsList}
            />
        </main>
    )
}
export default Main