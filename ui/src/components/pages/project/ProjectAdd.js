import React, { Fragment, useContext } from 'react';
import ProjectForm from 'components/forms/ProjectForm';
import { GlobalContext } from 'context/GlobalState';
import { useHistory } from "react-router-dom";

const ProjectAdd = () => {
    const { addProject } = useContext(GlobalContext);
    let history = useHistory();

    const handleSubmit = (payload) => {
        addProject(payload)
            .then(() => {
                history.push("/projects");
            });
    }

    return (
        <Fragment>
            <ProjectForm
                submitLabel="Add Project"
                onSubmit={handleSubmit}
            />
        </Fragment>
    )
}

export default ProjectAdd
