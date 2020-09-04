import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from 'context/GlobalState';
import { useHistory } from "react-router-dom";
import ConfigForm from 'components/forms/ConfigForm';

const ConfigEdit = (route) => {
    let history = useHistory();
    const { configs, editConfig, getConfig } = useContext(GlobalContext);
    const [selectedConfig, setSelectedConfig] = useState(null);
    const currentId = route.match.params.id;

    useEffect(() => {
        const configId = currentId;
        const selectedConfig = configs.find(config => config.id === parseInt(configId));
        setSelectedConfig(selectedConfig);

        if (!selectedConfig) {
            getConfig(configId)
                .then((data) => {
                    setSelectedConfig(data)
                })
        }
    }, [currentId, configs]);

    const handleSubmit = (payload) => {
        editConfig({
            ...selectedConfig,
            ...payload
        }).then(() => {
            history.push('/configs');
        });
    }

    if (!selectedConfig || !selectedConfig.id) {
        return <div>Config not exist</div>
    }

    return (
        <Fragment>
            <ConfigForm
                form={selectedConfig}
                submitLabel="Edit Config"
                onSubmit={handleSubmit}
            />
        </Fragment>
    )
}

export default ConfigEdit
