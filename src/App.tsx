
import './App.css'
import Header from './components/Header'
import ProjectHolder from './components/ProjectHolder'
import { projects } from './projects'

function App() {

  return (
    <>
      <Header />
      <span><p className='hero-text'>Let us build you something nice</p></span>
      <div className='project-box'>
        <span><h3 className='project-header'>Built projects</h3></span>
        <div className='project-holder'>
          {projects.map((proj) => <ProjectHolder key={proj.projectAddress} projectAddress={proj.projectAddress} projectImage={proj.projectImage} />)}
          <button className='project-selector'>
              <img className="project-icon" src="/chevron-right.svg" width='80%' height='auto' />
          </button>
        </div>
      </div>
    </>
  )
}

export default App
