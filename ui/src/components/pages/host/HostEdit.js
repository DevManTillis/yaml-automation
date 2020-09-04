import React, { Fragment, useState, useContext, useEffect } from 'react';
import HostForm from 'components/forms/HostForm';
import { GlobalContext } from 'context/GlobalState';
import { useHistory } from "react-router-dom";

const HostEdit = (route) => {
    let history = useHistory();
    const { hosts, editHost, getHost } = useContext(GlobalContext);
    const [selectedHost, setSelectedHost] = useState({ id: null, name: '' });
    const currentId = route.match.params.id;

    useEffect(() => {
        const hostId = currentId;
        const selectedHost = hosts.find(host => host.id === parseInt(hostId));
        setSelectedHost(selectedHost);

        if (!selectedHost) {
            getHost(hostId)
                .then((data) => {
                    setSelectedHost(data)
                })
        }
    }, [currentId, hosts]);

    const handleSubmit = (payload) => {
        editHost({
            ...selectedHost,
            ...payload
        }).then(() => {
            history.push('/hosts');
        });
    }

    if (!selectedHost || !selectedHost.id) {
        return <div>Hosts not exist</div>
    }

    return (
        <Fragment>
            <HostForm
                form={selectedHost}
                submitLabel="Edit Host"
                onSubmit={handleSubmit}
            />
        </Fragment>
    )
}

export default HostEdit
