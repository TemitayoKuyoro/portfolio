import './ProjectHolder.css'

function ProjectHolder({
    projectAddress,
    projectImage,
}: {
    projectAddress: string,
    projectImage: string
}) {
    return (
        <a href={projectAddress}><div className='project-display' style={{
            backgroundImage: projectImage,
        }} /></a>

    )

}

export default ProjectHolder