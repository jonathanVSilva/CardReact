import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {
  return(
    (props.collaborators.length > 0) && <section className='team' style={{backgroundColor: props.colorSecondary}}>
       <h3 style={{borderColor: props.colorPrimary}}>{props.name}</h3>
       <div className='collaborators'>
         {props.collaborators.map(collaborator => <Collaborator 
           backgroundColor={props.colorPrimary}
           key={collaborator.name}
           name={collaborator.name} 
           role={collaborator.role} 
           image={collaborator.image}/>)}
       </div>
    </section>
  )
}

export default Team