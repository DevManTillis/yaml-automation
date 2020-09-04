import React, { Fragment, useContext } from 'react';
import { GlobalContext } from 'context/GlobalState';
import { useHistory } from "react-router-dom";
import ConfigForm from 'components/forms/ConfigForm';

const ConfigAdd = () => {
    const { addConfig } = useContext(GlobalContext);
    let history = useHistory();

    const handleSubmit = (payload) => {
        addConfig(payload)
            .then(() => {
                history.push("/configs");
            })
    }

    return (
        <Fragment>
            <ConfigForm
                submitLabel="Add Config"
                onSubmit={handleSubmit}
            />
        </Fragment>
    )
}

export default ConfigAdd
