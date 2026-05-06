function Card({
    filteredFilmsList
}) {


    return (
        <div className="row justify-content-center">
            {filteredFilmsList.map(film => {
                const { id, title, genre } = film;
                return (
                    <div className='col-3 m-2' key={id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-capitalize movies-title">{title}</h5>
                                <p className="card-text text-capitalize">{genre}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Card