import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from 'context/GlobalState';
import { useHistory } from "react-router-dom";
import CommandForm from 'components/forms/CommandForm';

const CommandEdit = (route) => {
    let history = useHistory();
    const { commands, editCommand, getCommand } = useContext(GlobalContext);
    const [selectedCommand, setSelectedCommand] = useState(null);
    const currentId = route.match.params.id;

    useEffect(() => {
        const commandId = currentId;
        const selectedCommand = commands.find(command => {
            const parts = command.url.split('/')
            const id = parts.pop() || parts.pop()
            return id === parseInt(commandId)
        });
        setSelectedCommand(selectedCommand);

        if (!selectedCommand) {
            getCommand(commandId)
                .then((data) => {
                    setSelectedCommand(data)
                })
        }
    }, [currentId, commands]);

    const handleSubmit = (payload) => {
        const parts = selectedCommand.url.split('/')
        const id = parts.pop() || parts.pop()

        editCommand({
            ...selectedCommand,
            ...payload,
            id
        }).then(() => {
            history.push('/commands');
        });
    }

    if (!selectedCommand || !selectedCommand.url) {
        return <div>Command not exist</div>
    }

    return (
        <Fragment>
            <CommandForm
                form={selectedCommand}
                submitLabel="Edit Command"
                onSubmit={handleSubmit}
            />
        </Fragment>
    )
}

export default CommandEdit
