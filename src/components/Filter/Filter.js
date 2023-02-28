const Filter = ({value, onChange}) => (
    <label>
    <h3>
      Find contacts by name
    </h3>
    <input type="text" value={value} onChange={onChange}/>
    </label>
)

export default Filter