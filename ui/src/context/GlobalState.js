import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import { fetchProjects, fetchProject, createProject, updateProject, deleteProject,
    fetchHosts, fetchHost, createHost, updateHost, deleteHost,
    fetchRoles, fetchRole, createRole, updateRole, deleteRole,
    fetchPlaybooks, fetchPlaybook, createPlaybook, updatePlaybook, deletePlaybook,
    fetchConfigs, fetchConfig, createConfig, updateConfig, deleteConfig,
    fetchCommands, fetchCommand, createCommand, updateCommand, deleteCommand,
} from 'services'

const initialState = {
    projects: [],
    hosts: [],
    roles: [],
    playbooks: [],
    configs: [],
    commands: []
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function getProjects() {
        fetchProjects()
            .then(({ data }) => {
                dispatch({
                    type: 'SET_PROJECTS',
                    payload: data
                })
            })
            .catch(err => console.log('err', err));
    }

    function getProject(id) {
        return new Promise((resolve, reject) => {
            const params = { id }

            fetchProject(params)
                .then(({ data }) => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    function addProject(project) {
        return createProject(project)
            .then(({ data }) => {
                dispatch({
                    type: 'ADD_PROJECT',
                    payload: data
                });
            })
            .catch(err => console.log('err', err));
    };

    function editProject(project) {
        const params = { id: project.id }

        return updateProject(params, project)
            .then(({ data }) => {
                dispatch({
                    type: 'EDIT_PROJECT',
                    payload: data
                });
            })
            .catch(err => console.log('err', err));
    };

    function removeProject(id) {
        const params = { id }
        return deleteProject(params)
            .then(({ data }) => {
                dispatch({
                    type: 'REMOVE_PROJECT',
                    payload: id
                });
            })
            .catch(err => console.log('err', err));
    };

    function getHosts() {
        fetchHosts()
            .then(({ data }) => {
                dispatch({
                    type: 'SET_HOSTS',
                    payload: data
                })
            })
            .catch(err => console.log('err', err));
    }

    function getHost(id) {
        return new Promise((resolve, reject) => {
            const params = { id }

            fetchHost(params)
                .then(({ data }) => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    function addHost(host) {
        return createHost(host)
            .then(({ data }) => {
                dispatch({
                    type: 'ADD_HOST',
                    payload: data
                });
            })
            .catch(err => console.log('err', err));
    };

    function editHost(host) {
        const params = { id: host.id }

        return updateHost(params, host)
            .then(({ data }) => {
                dispatch({
                    type: 'EDIT_HOST',
                    payload: data
                });
            })
            .catch(err => console.log('err', err));
    };

    function removeHost(id) {
        const params = { id }
        return deleteHost(params)
            .then(({ data }) => {
                dispatch({
                    type: 'REMOVE_HOST',
                    payload: id
                });
            })
            .catch(err => console.log('err', err));
    };
    
    function getRoles() {
        fetchRoles()
            .then(({ data }) => {
                dispatch({
                    type: 'SET_ROLES',
                    payload: data
                })
            })
            .catch(err => console.log('err', err));
    }

    function getRole(id) {
        return new Promise((resolve, reject) => {
            const params = { id }

            fetchRole(params)
                .then(({ data }) => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    function addRole(role) {
        return createRole(role)
            .then(({ data }) => {
                dispatch({
                    type: 'ADD_ROLE',
                    payload: data
                });
            })
            .catch(err => console.log('err', err));
    };

    function editRole(role) {
        const params = { id: role.id }

        return updateRole(params, role)
            .then(({ data }) => {
                dispatch({
                    type: 'EDIT_ROLE',
                    payload: data
                });
            })
            .catch(err => console.log('err', err));
    };

    function removeRole(id) {
        const params = { id }
        return deleteRole(params)
            .then(({ data }) => {
                dispatch({
                    type: 'REMOVE_ROLE',
                    payload: id
                });
            })
            .catch(err => console.log('err', err));
    };

    function getPlaybooks() {
        fetchPlaybooks()
            .then(({ data }) => {
                dispatch({
                    type: 'SET_PLAYBOOKS',
                    payload: data
                })
            })
            .catch(err => console.log('err', err));
    }

    function getPlaybook(id) {
        return new Promise((resolve, reject) => {
            const params = { id }

            fetchPlaybook(params)
                .then(({ data }) => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    function addPlaybook(role) {
        return createPlaybook(role)
            .then(({ data }) => {
                dispatch({
                    type: 'ADD_PLAYBOOK',
                    payload: data
                });
            })
            .catch(err => console.log('err', err));
    };

    function editPlaybook(role) {
        const params = { id: role.id }

        return updatePlaybook(params, role)
            .then(({ data }) => {
                dispatch({
                    type: 'EDIT_PLAYBOOK',
                    payload: data
                });
            })
            .catch(err => console.log('err', err));
    };

    function removePlaybook(id) {
        const params = { id }
        return deletePlaybook(params)
            .then(({ data }) => {
                dispatch({
                    type: 'REMOVE_PLAYBOOK',
                    payload: id
                });
            })
            .catch(err => console.log('err', err));
    };

    function getConfigs() {
        fetchConfigs()
            .then(({ data }) => {
                dispatch({
                    type: 'SET_CONFIGS',
                    payload: data
                })
            })
            .catch(err => console.log('err', err));
    }

    function getConfig(id) {
        return new Promise((resolve, reject) => {
            const params = { id }

            fetchConfig(params)
                .then(({ data }) => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    function addConfig(config) {
        return createConfig(config)
            .then(({ data }) => {
                dispatch({
                    type: 'ADD_CONFIG',
                    payload: data
                });
            })
            .catch(err => console.log('err', err));
    };

    function editConfig(config) {
        const params = { id: config.id }

        return updateConfig(params, config)
            .then(({ data }) => {
                dispatch({
                    type: 'EDIT_CONFIG',
                    payload: data
                });
            })
            .catch(err => console.log('err', err));
    };

    function removeConfig(id) {
        const params = { id }
        return deleteConfig(params)
            .then(({ data }) => {
                dispatch({
                    type: 'REMOVE_CONFIG',
                    payload: id
                });
            })
            .catch(err => console.log('err', err));
    };

    function getCommands() {
        fetchCommands()
            .then(({ data }) => {
                dispatch({
                    type: 'SET_COMMANDS',
                    payload: data
                })
            })
            .catch(err => console.log('err', err));
    }

    function getCommand(id) {
        return new Promise((resolve, reject) => {
            const params = { id }

            fetchCommand(params)
                .then(({ data }) => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    function addCommand(command) {
        return createCommand(command)
            .then(({ data }) => {
                dispatch({
                    type: 'ADD_COMMAND',
                    payload: data
                });
            })
            .catch(err => console.log('err', err));
    };

    function editCommand(payload) {
        const params = { id: payload.id }
        return updateCommand(params, payload)
            .then(({ data }) => {
                dispatch({
                    type: 'EDIT_COMMAND',
                    payload: data
                });
            })
            .catch(err => console.log('err', err));
    };

    function removeCommand(id) {
        const params = { id }
        return deleteCommand(params)
            .then(({ data }) => {
                dispatch({
                    type: 'REMOVE_COMMAND',
                    payload: id
                });
            })
            .catch(err => console.log('err', err));
    };

    return (
      <GlobalContext.Provider value={{
            projects: state.projects,
            getProjects,
            getProject,
            addProject,
            editProject,
            removeProject,
            hosts: state.hosts,
            getHosts,
            getHost,
            addHost,
            editHost,
            removeHost,
            roles: state.roles,
            getRoles,
            getRole,
            addRole,
            editRole,
            removeRole,
            playbooks: state.playbooks,
            getPlaybooks,
            getPlaybook,
            addPlaybook,
            editPlaybook,
            removePlaybook,
            configs: state.configs,
            getConfigs,
            getConfig,
            addConfig,
            editConfig,
            removeConfig,
            commands: state.commands,
            getCommands,
            getCommand,
            addCommand,
            editCommand,
            removeCommand,
      }}>
        {children}
      </GlobalContext.Provider>
    );
}