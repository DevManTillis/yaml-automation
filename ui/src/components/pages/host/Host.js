import React, { Fragment, useEffect, useContext } from 'react';
import { GlobalContext} from 'context/GlobalState';
import List from 'components/elements/List'
import ButtonAdd from 'components/elements/ButtonAdd'
import Heading from 'components/elements/Heading'

const Host = ({ history }) => {
    const { hosts, removeHost, getHosts } = useContext(GlobalContext);

    const handleAdd = () => {
        history.push('hosts/add')
    }
    const handleEdit = (id) => {
        history.push(`hosts/${id}/edit`)
    }
    const handleDelete = (id) => {
        removeHost(id)
    }

    const items = hosts.map(host => ({
        id: host.id,
        title: host.name,
        description: `#${host.id}`
    }))

    useEffect(() => {
        getHosts()
    }, []);

    const headingRight = <ButtonAdd label="Add Host" onClick={handleAdd} />

    return (
        <Fragment>
            <Heading label="Hosts" right={headingRight} />
            <List
                items={items}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </Fragment>
    );
}

export default Host