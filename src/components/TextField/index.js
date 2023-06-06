import './TextField.css'

const TextField = (props) => {
  const placeholderModificada = `${props.placeholder}...`

  const whenType = (evento) => {
    props.whenChange(evento.target.value)
  }
  return (
    <div className="text-field">
        <label>
          {props.label}
        </label>
        <input 
          value={props.valor} 
          onChange={whenType} 
          required={props.obrigatorio} 
          placeholder={placeholderModificada} 
        />
    </div>
  )
}

export default TextField