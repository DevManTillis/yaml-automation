import React, { Fragment, useContext } from 'react';
import { GlobalContext } from 'context/GlobalState';
import { useHistory } from "react-router-dom";
import CommandForm from 'components/forms/CommandForm';

const CommandAdd = () => {
    const { addCommand } = useContext(GlobalContext);
    let history = useHistory();

    const handleSubmit = (payload) => {
        addCommand(payload)
            .then(() => {
                history.push("/commands");
            })
    }

    return (
        <Fragment>
            <CommandForm
                submitLabel="Add Command"
                onSubmit={handleSubmit}
            />
        </Fragment>
    )
}

export default CommandAdd
