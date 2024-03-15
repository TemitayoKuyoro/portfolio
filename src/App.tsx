
import './App.css'
import Header from './components/Header'
import ProjectHolder from './components/ProjectHolder'
import { projects } from './projects'

function App() {

  return (
    <>
      <Header />
      <span><p className='hero-text'>Let us build you something nice.</p></span>
      <div className='project-box'>
        <span><h3 className='project-header'>Built projects</h3></span>
        {projects.map((proj) => <ProjectHolder key={proj.projectAddress} projectAddress={proj.projectAddress} projectImage={proj.projectImage} />)}
        <button className='project-selector'>
          <div className='project-selector_icon'>
            <img className="project-icon" src="src/images/chevron-right.svg" width={80} height='auto' />
          </div>
        </button>
      </div>
    </>
  )
}

export default App
