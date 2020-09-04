export default (state, action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return {
                ...state,
                projects: [...action.payload]
            };
        case 'ADD_PROJECT':
            return {
                ...state,
                projects: [...state.projects, action.payload]
            };
        case 'EDIT_PROJECT':
            const updatedProject = action.payload;
            const updatedProjects = state.projects.map(project => {
                if (project.id === updatedProject.id) {
                    return updatedProject;
                }
                return project;
            });

            return {
                ...state,
                projects: updatedProjects
            };
        case 'REMOVE_PROJECT':
            return {
                ...state,
                projects: state.projects.filter(project => project.id !== action.payload)
            };
        case 'SET_HOSTS':
            return {
                ...state,
                hosts: [...action.payload]
            };
        case 'ADD_HOST':
            return {
                ...state,
                hosts: [...state.hosts, action.payload]
            };
        case 'EDIT_HOST':
            const updatedHost = action.payload;
            const updatedHosts = state.hosts.map(host => {
                if (host.id === updatedHost.id) {
                    return updatedHost;
                }
                return host;
            });

            return {
                ...state,
                hosts: updatedHosts
            };
        case 'REMOVE_HOST':
            return {
                ...state,
                hosts: state.hosts.filter(host => host.id !== action.payload)
            };
        case 'SET_ROLES':
            return {
                ...state,
                roles: [...action.payload]
            };
        case 'ADD_ROLE':
            return {
                ...state,
                roles: [...state.roles, action.payload]
            };
        case 'EDIT_ROLE':
            const updatedRole = action.payload;
            const updatedRoles = state.roles.map(role => {
                if (role.id === updatedRole.id) {
                    return updatedRole;
                }
                return role;
            });

            return {
                ...state,
                roles: updatedRoles
            };
        case 'REMOVE_ROLE':
            return {
                ...state,
                roles: state.roles.filter(role => role.id !== action.payload)
            };
        case 'SET_PLAYBOOKS':
            return {
                ...state,
                playbooks: [...action.payload]
            };
        case 'ADD_PLAYBOOK':
            return {
                ...state,
                playbooks: [...state.playbooks, action.payload]
            };
        case 'EDIT_PLAYBOOK':
            const updatedPlaybook = action.payload;
            const updatedPlaybooks = state.playbooks.map(playbook => {
                if (playbook.id === updatedPlaybook.id) {
                    return updatedPlaybook;
                }
                return playbook;
            });

            return {
                ...state,
                playbooks: updatedPlaybooks
            };
        case 'REMOVE_PLAYBOOK':
            return {
                ...state,
                playbooks: state.playbooks.filter(playbook => playbook.id !== action.payload)
            };
        case 'SET_CONFIGS':
            return {
                ...state,
                configs: [...action.payload]
            };
        case 'ADD_CONFIG':
            return {
                ...state,
                configs: [...state.configs, action.payload]
            };
        case 'EDIT_CONFIG':
            const updatedConfig = action.payload;
            const updatedConfigs = state.configs.map(config => {
                if (config.id === updatedConfig.id) {
                    return updatedConfig;
                }
                return config;
            });

            return {
                ...state,
                configs: updatedConfigs
            };
        case 'REMOVE_CONFIG':
            return {
                ...state,
                configs: state.configs.filter(config => config.id !== action.payload)
            };
        case 'SET_COMMANDS':
            return {
                ...state,
                commands: [...action.payload]
            };
        case 'ADD_COMMAND':
            return {
                ...state,
                commands: [...state.commands, action.payload]
            };
        case 'EDIT_COMMAND':
            const updatedCommand = action.payload;
            const updatedCommands = state.commands.map(config => {
                if (config.id === updatedCommand.id) {
                    return updatedCommand;
                }
                return config;
            });

            return {
                ...state,
                commands: updatedCommands
            };
        case 'REMOVE_COMMAND':
            return {
                ...state,
                commands: state.commands.filter(config => {
                    const parts = config.url.split('/')
                    const id = parts.pop() || parts.pop()
                    return id !== action.payload
                })
            };
        default: return state;
    }
}