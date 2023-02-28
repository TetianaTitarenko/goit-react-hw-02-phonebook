import Find from "./Filter.styled"

const Filter = ({value, onChange}) => (
    <label>
    <h3>
      Find contacts by name
    </h3>
    <Find type="text" value={value} onChange={onChange}/>
    </label>
)

export default Filter