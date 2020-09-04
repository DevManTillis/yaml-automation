import React, { useEffect, useContext } from 'react';
import { GlobalContext} from 'context/GlobalState';
import { BASE_URL, API_PATH } from 'services'

const SelectProject = ({ value, onChange }) => {
    const { projects, getProjects } = useContext(GlobalContext);

    useEffect(() => {
        getProjects()
    }, []);

    return (
        <select onChange={onChange} value={value}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600">
            <option value={null}>Select project</option>
            {projects && projects.map((project, idx) => (
                <option value={`${BASE_URL}${API_PATH.project}${project.id}/`}
                    selected={value === `${BASE_URL}${API_PATH.project}${project.id}/`}
                >{project.project_name}</option>
            ))}
        </select>
    )
}
export default SelectProject
