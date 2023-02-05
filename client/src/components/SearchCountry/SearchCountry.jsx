import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchCountry } from "../../redux/actions/actions"

const SearchCountry = () => {
    const dispatch = useDispatch()

const [searchName, setSearchName] = useState("")


const handleSearch = (e) => {
    setSearchName(e.target.value);
  };

  const handleClick = () => {
    dispatch(searchCountry(searchName));
  };
    return(
        <div>
            <h1>Buscando Country</h1>
            <input type="text" value={searchName} onChange={handleSearch} />
<button onClick={handleClick}>Search</button>
        </div>
    )
}

export default SearchCountry