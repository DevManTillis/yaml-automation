import React, { Fragment, useEffect, useContext } from 'react';
import { GlobalContext} from 'context/GlobalState';
import List from 'components/elements/List'
import ButtonAdd from 'components/elements/ButtonAdd'
import Heading from 'components/elements/Heading'

const Command = ({ history }) => {
    const { commands, removeCommand, getCommands } = useContext(GlobalContext);

    const handleAdd = () => {
        history.push('commands/add')
    }
    const handleEdit = (id) => {
        history.push(`commands/${id}/edit`)
    }
    const handleDelete = (id) => {
        removeCommand(id)
    }

    const items = commands.map(command => {
        const parts = command.url.split('/')
        const id = parts.pop() || parts.pop()
        return {
            id,
            title: command.arguments,
            description: `${command.url}`
        }
    })

    useEffect(() => {
        getCommands()
    }, []);

    const headingRight = <ButtonAdd label="Add Command" onClick={handleAdd} />

    return (
        <Fragment>
            <Heading label="Commands" right={headingRight} />
            <List
                items={items}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </Fragment>
    );
}

export default Command
