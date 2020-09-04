import React, { Fragment, useEffect, useContext } from 'react';
import { GlobalContext} from 'context/GlobalState';
import List from 'components/elements/List'
import ButtonAdd from 'components/elements/ButtonAdd'
import Heading from 'components/elements/Heading'

const Role = ({ history }) => {
    const { roles, removeRole, getRoles } = useContext(GlobalContext);

    const handleAdd = () => {
        history.push('roles/add')
    }
    const handleEdit = (id) => {
        history.push(`roles/${id}/edit`)
    }
    const handleDelete = (id) => {
        removeRole(id)
    }

    const items = roles.map(role => ({
        id: role.id,
        title: role.name,
        description: `#${role.id}`
    }))

    useEffect(() => {
        getRoles()
    }, []);

    const headingRight = <ButtonAdd label="Add Role" onClick={handleAdd} />

    return (
        <Fragment>
            <Heading label="Roles" right={headingRight} />
            <List
                items={items}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </Fragment>
    );
}

export default Role