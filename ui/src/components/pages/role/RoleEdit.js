import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from 'context/GlobalState';
import { useHistory } from "react-router-dom";
import RoleForm from 'components/forms/RoleForm';

const RoleEdit = (route) => {
    let history = useHistory();
    const { roles, editRole, getRole } = useContext(GlobalContext);
    const [selectedRole, setSelectedRole] = useState(null);
    const currentId = route.match.params.id;

    useEffect(() => {
        const roleId = currentId;
        const selectedRole = roles.find(role => role.id === parseInt(roleId));
        setSelectedRole(selectedRole);

        if (!selectedRole) {
            getRole(roleId)
                .then((data) => {
                    setSelectedRole(data)
                })
        }
    }, [currentId, roles]);

    const handleSubmit = (payload) => {
        editRole({
            ...selectedRole,
            ...payload
        }).then(() => {
            history.push('/roles');
        });
    }

    if (!selectedRole || !selectedRole.id) {
        return <div>Role not exist</div>
    }

    return (
        <Fragment>
            <RoleForm
                form={selectedRole}
                submitLabel="Edit Role"
                onSubmit={handleSubmit}
            />
        </Fragment>
    )
}

export default RoleEdit
