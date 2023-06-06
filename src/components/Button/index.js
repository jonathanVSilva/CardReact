import './Button.css'

const Button = (props) => {
  return(
    <button className="function-button">
      {props.children}
    </button>
  )
}

export default Button