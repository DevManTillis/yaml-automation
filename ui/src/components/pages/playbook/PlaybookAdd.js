import React, { Fragment, useContext } from 'react';
import { GlobalContext } from 'context/GlobalState';
import { useHistory } from "react-router-dom";
import PlaybookForm from 'components/forms/PlaybookForm';

const PlaybookAdd = () => {
    const { addPlaybook } = useContext(GlobalContext);
    let history = useHistory();

    const handleSubmit = (payload) => {
        addPlaybook(payload)
            .then(() => {
                history.push("/playbooks");
            })
    }

    return (
        <Fragment>
            <PlaybookForm
                submitLabel="Add Playbook"
                onSubmit={handleSubmit}
            />
        </Fragment>
    )
}

export default PlaybookAdd
