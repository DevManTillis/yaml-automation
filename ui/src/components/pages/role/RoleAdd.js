import React, { Fragment, useContext } from 'react';
import { GlobalContext } from 'context/GlobalState';
import { useHistory } from "react-router-dom";
import RoleForm from 'components/forms/RoleForm';

const RoleAdd = () => {
    const { addRole } = useContext(GlobalContext);
    let history = useHistory();

    const handleSubmit = (payload) => {
        addRole(payload)
            .then(() => {
                history.push("/roles");
            })
    }

    return (
        <Fragment>
            <RoleForm
                submitLabel="Add Role"
                onSubmit={handleSubmit}
            />
        </Fragment>
    )
}

export default RoleAdd
