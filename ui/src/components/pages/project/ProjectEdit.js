import React, { Fragment, useState, useContext, useEffect } from 'react';
import ProjectForm from 'components/forms/ProjectForm';
import { GlobalContext } from 'context/GlobalState';
import { useHistory } from "react-router-dom";

const ProjectEdit = (route) => {
    let history = useHistory();
    const { projects, editProject, getProject } = useContext(GlobalContext);
    const [selectedProject, setSelectedProject] = useState({ id: null, project_name: '' });
    const currentId = route.match.params.id;

    useEffect(() => {
        const projectId = currentId;
        const selectedProject = projects.find(project => project.id === parseInt(projectId));
        setSelectedProject(selectedProject);

        if (!selectedProject) {
            getProject(projectId)
                .then((data) => {
                    setSelectedProject(data)
                })
        }
    }, [currentId, projects]);

    const handleSubmit = (payload) => {
        editProject({
            ...selectedProject,
            ...payload
        })
            .then(() => {
                history.push('/');
            });
    }

    if (!selectedProject || !selectedProject.id) {
        return <div>Project not exist</div>
    }

    return (
        <Fragment>
            <ProjectForm
                form={selectedProject}
                submitLabel="Edit Project"
                onSubmit={handleSubmit}
            />
        </Fragment>
    )
}

export default ProjectEdit
