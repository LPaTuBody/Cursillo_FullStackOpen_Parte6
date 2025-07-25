import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

const Filter = () => {
  const dispatch = useDispatch()
  const style = {
    marginBottom: '20px',
    
  }

  return (
    <div style={style}>
      <label htmlFor="filter">filter</label>
      <input
        id="filter"
        onChange={(e) => dispatch(filterChange(e.target.value))}
        style={{ marginLeft: '5px', width: '350px' }}
      />
    </div>
  )
}

export default Filter