import './DropdownList.css'

const DropdownList = (props) => {
  return(
    <div className="dropdaown-list">
      <label>
        {props.label}
      </label>
      <select 
        onChange={evento => props.whenChange(evento.target.value)} 
        required={props.required} 
        value={props.valor}>
        <option value=""></option>

        {props.itens.map(item => {
            return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default DropdownList