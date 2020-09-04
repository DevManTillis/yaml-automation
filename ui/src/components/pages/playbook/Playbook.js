import React, { Fragment, useEffect, useContext } from 'react';
import { GlobalContext} from 'context/GlobalState';
import List from 'components/elements/List'
import ButtonAdd from 'components/elements/ButtonAdd'
import Heading from 'components/elements/Heading'

const Playbook = ({ history }) => {
    const { playbooks, removePlaybook, getPlaybooks } = useContext(GlobalContext);

    const handleAdd = () => {
        history.push('playbooks/add')
    }
    const handleEdit = (id) => {
        history.push(`playbooks/${id}/edit`)
    }
    const handleDelete = (id) => {
        removePlaybook(id)
    }

    const items = playbooks.map(playbook => ({
        id: playbook.id,
        title: playbook.name,
        description: `#${playbook.id}`
    }))

    useEffect(() => {
        getPlaybooks()
    }, []);

    const headingRight = <ButtonAdd label="Add Playbook" onClick={handleAdd} />

    return (
        <Fragment>
            <Heading label="Playbooks" right={headingRight} />
            <List
                items={items}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </Fragment>
    );
}

export default Playbook
