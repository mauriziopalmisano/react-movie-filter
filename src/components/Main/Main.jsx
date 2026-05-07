import Card from "./Card.jsx";
import Select from "./Select.jsx";

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
        <div className="bg-img-main">
            <main className="container">
                <div className="row justify-content-center hight-200 align-items-center">
                    <div className="">
                        <h3 className="sections-titles">CERCA IL TUO FILM PREFERITO</h3>
                    </div>
                    <div className='col-4'>
                        <Select
                            value={selectedGenre}
                            onChange={changeHandler}
                            name='genre'
                            genreList={genreList}
                        />
                    </div>
                    <div className='col-4 d-flex justify-content-start'>
                        <label htmlFor="title-search" className="movies-title mx-3">Cerca per titolo</label>
                        <input type="text" id='title-search' className="border-3 rounded-pill" value={searchedTitle} onChange={changeHandler} name='title' />
                    </div>
                </div>
                <form className="row justify-content-center align-items-center mb-4" onSubmit={submitHandler}>
                    <div className='col-12 d-flex justify-content-start'>
                        <h3 className="sections-titles">Aggiungi un Film </h3>
                    </div>
                    <div className="col-3 d-flex justify-content-around">
                        <label htmlFor="add-title" className="movies-title">Titolo Film</label>
                        <input type="text" id='add-title' className="border-3 rounded-pill" value={filmOBJ.title} onChange={changeHandler} name='addTitle' required />
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
                        <button type='submit' className=' btn-color rounded-pill border-1 btn-title px-2 py-1'>Aggiungi</button>
                    </div>
                </form>
                <Card
                    filteredFilmsList={filteredFilmsList}
                />
            </main>
        </div>
    )
}
export default Main