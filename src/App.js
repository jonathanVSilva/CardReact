import { useState } from 'react';
import Banner from './components/Banner'
import Form from './components/Form'
import Category from './components/Category';
import Footer from './components/Footer'

function App() {

  const categorys = [
    {
      name: 'Entreterimento',
      colorPrimary: '#57C278',
      colorSecondary: '#D9F7E9'
    },
    {
      name: 'Futebol',
      colorPrimary: '#82CFFA',
      colorSecondary: '#E8F8FF'
    },
    {
      name: 'Música',
      colorPrimary: '#A6D157',
      colorSecondary: '#F0F8E2'
    },
    {
      name: 'Novela',
      colorPrimary: '#E06B69',
      colorSecondary: '#FDE7E8'
    },
    {
      name: 'Dança',
      colorPrimary: '#DB6EBF',
      colorSecondary: '#FAE9F5'
    },
    {
      name: 'Fotografia',
      colorPrimary: '#FFBA05',
      colorSecondary: '#FFF5D9'
    },
    {
      name: 'Filme',
      colorPrimary: '#FF8A29',
      colorSecondary: '#FFEEDF'
    }
  ]
  const [collaborators, setCollaborators] = useState([])

  const whenNewCollaboratorAdd = (collaborator) =>{
    setCollaborators([...collaborators, collaborator])
  }
  return (
    <div className="App"> 
      <Banner />
      <Form categorys={categorys.map(category => category.name)} registeredCollaborator={collaborator => whenNewCollaboratorAdd(collaborator)} />
      {categorys.map(category => <Category 
        key={category.name} 
        name={category.name} 
        colorPrimary={category.colorPrimary}
        colorSecondary={category.colorSecondary}
        collaborators={collaborators.filter(collaborator => collaborator.category === category.name)}
      />)}
      <Footer />
    </div>
  );
}

export default App;
