function Select({
    value,
    onChange,
    name,
    genreList
}) {
    return (
        <select className="form-select form-select-sm rounded-pill " value={value} onChange={onChange} name={name} >
            <option disabled value=''>Scegli un Genere</option>
            <option value=''>Nessuna preferenza</option>
            {genreList.map(film => {
                const { id, genre } = film;
                return (
                    <option key={id} value={genre}>{genre}</option>
                )
            })}
        </select>
    )
}
export default Select