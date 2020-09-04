import React, { Fragment, useContext } from 'react';
import HostForm from 'components/forms/HostForm';
import { GlobalContext } from 'context/GlobalState';
import { useHistory } from "react-router-dom";

const HostAdd = () => {
    const { addHost } = useContext(GlobalContext);
    let history = useHistory();

    const handleSubmit = (payload) => {
        addHost(payload)
            .then(() => {
                history.push("/hosts");
            })
    }

    return (
        <Fragment>
            <HostForm
                submitLabel="Add Host"
                onSubmit={handleSubmit}
            />
        </Fragment>
    )
}

export default HostAdd
