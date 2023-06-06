import { useState } from 'react';
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team';
import Footer from './components/Footer'

function App() {

  const teams = [
    {
      name: 'Progamação',
      colorPrimary: '#57C278',
      colorSecondary: '#D9F7E9'
    },
    {
      name: 'Front-End',
      colorPrimary: '#82CFFA',
      colorSecondary: '#E8F8FF'
    },
    {
      name: 'Data Science',
      colorPrimary: '#A6D157',
      colorSecondary: '#F0F8E2'
    },
    {
      name: 'Devops',
      colorPrimary: '#E06B69',
      colorSecondary: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      colorPrimary: '#DB6EBF',
      colorSecondary: '#FAE9F5'
    },
    {
      name: 'Mobile',
      colorPrimary: '#FFBA05',
      colorSecondary: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      colorPrimary: '#FF8A29',
      colorSecondary: '#FFEEDF'
    }
  ]
  const [collaborators, setCollaborators] = useState([])

  const whenNewCollaboratorAdd = (collaborator) =>{
    debugger
    setCollaborators([...collaborators, collaborator])
  }
  return (
    <div className="App"> 
      <Banner />
      <Form teams={teams.map(team => team.name)} registeredCollaborator={collaborator => whenNewCollaboratorAdd(collaborator)} />
      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        colorPrimary={team.colorPrimary}
        colorSecondary={team.colorSecondary}
        collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
      />)}
      <Footer />
    </div>
  );
}

export default App;
