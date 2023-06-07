import TextField from '../TextField'
import './Form.css'
import DropdownList from '../DropdownList'
import Button from '../Button'
import { useState } from 'react'


const Form = (props) => {

  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')

  const whenSave = (evento) => {
    evento.preventDefault()
    props.registeredCollaborator({
      name,
      role,
      image,
      category 
    })
    setName('')
    setRole('')
    setImage('')
    setCategory('')
  }

  return (
    <section className="form-content">
      <form onSubmit={whenSave}>
        <h2>Preencha os dados para criar o card do seu ídolo</h2>
        <TextField 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite seu nome"
          valor={name}
          whenChange={valor => setName(valor)}
        />
        <TextField 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite seu cargo"
          valor={role}
          whenChange={valor => setRole(valor)}
        />
        <TextField 
          label="Imagem" 
          placeholder="Digite o endereço da imagem"
          valor={image}
          whenChange={valor => setImage(valor)}
        />
        <DropdownList 
          obrigatorio={true} 
          label="Categoria" 
          itens={props.categorys}
          valor={category}
          whenChange={valor => setCategory(valor)}
        />
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  )
}

export default Form