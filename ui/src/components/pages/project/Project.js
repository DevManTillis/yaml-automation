import React, { Fragment, useEffect, useContext } from 'react';
import { GlobalContext} from 'context/GlobalState';
import List from 'components/elements/List'
import ButtonAdd from 'components/elements/ButtonAdd'
import Heading from 'components/elements/Heading'

const Project = ({ history }) => {
    const { projects, removeProject, getProjects } = useContext(GlobalContext);

    const handleAdd = () => {
        history.push('projects/add')
    }
    const handleEdit = (id) => {
        history.push(`projects/${id}/edit`)
    }
    const handleDelete = (id) => {
        removeProject(id)
    }

    const items = projects.map(project => ({
        id: project.id,
        title: project.project_name,
        description: `#${project.id}`
    }))

    useEffect(() => {
        getProjects()
    }, []);

    const headingRight = <ButtonAdd label="Add Project" onClick={handleAdd} />

    return (
        <Fragment>
            <Heading label="Projects" right={headingRight} />
            <List
                items={items}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </Fragment>
    );
}

export default Project