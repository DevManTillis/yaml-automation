import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from 'context/GlobalState';
import { useHistory } from "react-router-dom";
import PlaybookForm from 'components/forms/PlaybookForm';

const PlaybookEdit = (route) => {
    let history = useHistory();
    const { playbooks, editPlaybook, getPlaybook } = useContext(GlobalContext);
    const [selectedPlaybook, setSelectedPlaybook] = useState(null);
    const currentId = route.match.params.id;

    useEffect(() => {
        const playbookId = currentId;
        const selectedPlaybook = playbooks.find(playbook => playbook.id === parseInt(playbookId));
        setSelectedPlaybook(selectedPlaybook);

        if (!selectedPlaybook) {
            getPlaybook(playbookId)
                .then((data) => {
                    setSelectedPlaybook(data)
                })
        }
    }, [currentId, playbooks]);

    const handleSubmit = (payload) => {
        editPlaybook({
            ...selectedPlaybook,
            ...payload
        }).then(() => {
            history.push('/playbooks');
        });
    }

    if (!selectedPlaybook || !selectedPlaybook.id) {
        return <div>Playbook not exist</div>
    }

    return (
        <Fragment>
            <PlaybookForm
                form={selectedPlaybook}
                submitLabel="Edit Playbook"
                onSubmit={handleSubmit}
            />
        </Fragment>
    )
}

export default PlaybookEdit
