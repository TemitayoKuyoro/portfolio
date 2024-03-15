import './ProjectHolder.css'

function ProjectHolder({
    projectAddress,
    projectImage,
}: {
    projectAddress: string,
    projectImage: string
}) {
    return (
        <a href={projectAddress}><div className="project-holder" style={{
            backgroundImage: projectImage,
        }} /></a>

    )

}

export default ProjectHolder