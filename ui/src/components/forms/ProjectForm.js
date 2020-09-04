import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectForm = (props) => {
    const { form, submitLabel, onSubmit } = props
    const [project_name, setName] = useState(form?.project_name || '');

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = { project_name }
        onSubmit(payload)
    }
    return (
        <div className="w-full max-w-sm container mt-20 mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="w-full mb-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                        Project name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                        value={project_name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter name"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        { submitLabel }
                    </button>
                </div>
                <div className="text-center mt-4 text-gray-500"><Link to='/projects'>Cancel</Link></div>
            </form>
        </div>
    )
}

export default ProjectForm
