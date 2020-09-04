import axios from 'axios'

export const BASE_URL = 'http://localhost:8000/api/v1';
export const API_PATH = {
    project: '/project/',
    host: '/host/',
    role: '/role/',
    playbook: '/playbook/',
    config: '/ansible-configuration/',
    command: '/command/'
}
const TIMEOUT = 1000 * 4 * 60;

export const fetchProjects = async () => (
    await axios({ url: `${BASE_URL}${API_PATH.project}`, method: 'get', timeout: TIMEOUT })
);

export const fetchProject = async (params) => (
    await axios({ url: `${BASE_URL}${API_PATH.project}${params.id}/`, method: 'get', timeout: TIMEOUT })
);

export const createProject = async (payload) => (
    await axios({ url: `${BASE_URL}${API_PATH.project}`, method: 'post', timeout: TIMEOUT, data: payload })
);

export const updateProject = async (params, payload) => (
    await axios({ url: `${BASE_URL}${API_PATH.project}${params.id}/`, method: 'put', timeout: TIMEOUT, data: payload })
);

export const deleteProject = async (params) => (
    await axios({ url: `${BASE_URL}${API_PATH.project}${params.id}/`, method: 'delete', timeout: TIMEOUT })
);

export const fetchHosts = async () => (
    await axios({ url: `${BASE_URL}${API_PATH.host}`, method: 'get', timeout: TIMEOUT })
);

export const fetchHost = async (params) => (
    await axios({ url: `${BASE_URL}${API_PATH.host}${params.id}/`, method: 'get', timeout: TIMEOUT })
);

export const createHost = async (payload) => (
    await axios({ url: `${BASE_URL}${API_PATH.host}`, method: 'post', timeout: TIMEOUT, data: payload })
);

export const updateHost = async (params, payload) => (
    await axios({ url: `${BASE_URL}${API_PATH.host}${params.id}/`, method: 'put', timeout: TIMEOUT, data: payload })
);

export const deleteHost = async (params) => (
    await axios({ url: `${BASE_URL}${API_PATH.host}${params.id}/`, method: 'delete', timeout: TIMEOUT })
);

export const fetchRoles = async () => (
    await axios({ url: `${BASE_URL}${API_PATH.role}`, method: 'get', timeout: TIMEOUT })
);

export const fetchRole = async (params) => (
    await axios({ url: `${BASE_URL}${API_PATH.role}${params.id}/`, method: 'get', timeout: TIMEOUT })
);

export const createRole = async (payload) => (
    await axios({ url: `${BASE_URL}${API_PATH.role}`, method: 'post', timeout: TIMEOUT, data: payload })
);

export const updateRole = async (params, payload) => (
    await axios({ url: `${BASE_URL}${API_PATH.role}${params.id}/`, method: 'put', timeout: TIMEOUT, data: payload })
);

export const deleteRole = async (params) => (
    await axios({ url: `${BASE_URL}${API_PATH.role}${params.id}/`, method: 'delete', timeout: TIMEOUT })
);

export const fetchPlaybooks = async () => (
    await axios({ url: `${BASE_URL}${API_PATH.playbook}`, method: 'get', timeout: TIMEOUT })
);

export const fetchPlaybook = async (params) => (
    await axios({ url: `${BASE_URL}${API_PATH.playbook}${params.id}/`, method: 'get', timeout: TIMEOUT })
);

export const createPlaybook = async (payload) => (
    await axios({ url: `${BASE_URL}${API_PATH.playbook}`, method: 'post', timeout: TIMEOUT, data: payload })
);

export const updatePlaybook = async (params, payload) => (
    await axios({ url: `${BASE_URL}${API_PATH.playbook}${params.id}/`, method: 'put', timeout: TIMEOUT, data: payload })
);

export const deletePlaybook = async (params) => (
    await axios({ url: `${BASE_URL}${API_PATH.playbook}${params.id}/`, method: 'delete', timeout: TIMEOUT })
);

export const fetchConfigs = async () => (
    await axios({ url: `${BASE_URL}${API_PATH.config}`, method: 'get', timeout: TIMEOUT })
);

export const fetchConfig = async (params) => (
    await axios({ url: `${BASE_URL}${API_PATH.config}${params.id}/`, method: 'get', timeout: TIMEOUT })
);

export const createConfig = async (payload) => (
    await axios({ url: `${BASE_URL}${API_PATH.config}`, method: 'post', timeout: TIMEOUT, data: payload })
);

export const updateConfig = async (params, payload) => (
    await axios({ url: `${BASE_URL}${API_PATH.config}${params.id}/`, method: 'put', timeout: TIMEOUT, data: payload })
);

export const deleteConfig = async (params) => (
    await axios({ url: `${BASE_URL}${API_PATH.config}${params.id}/`, method: 'delete', timeout: TIMEOUT })
);

export const fetchCommands = async () => (
    await axios({ url: `${BASE_URL}${API_PATH.command}`, method: 'get', timeout: TIMEOUT })
);

export const fetchCommand = async (params) => (
    await axios({ url: `${BASE_URL}${API_PATH.command}${params.id}/`, method: 'get', timeout: TIMEOUT })
);

export const createCommand = async (payload) => (
    await axios({ url: `${BASE_URL}${API_PATH.command}`, method: 'post', timeout: TIMEOUT, data: payload })
);

export const updateCommand = async (params, payload) => (
    await axios({ url: `${BASE_URL}${API_PATH.command}${params.id}/`, method: 'put', timeout: TIMEOUT, data: payload })
);

export const deleteCommand = async (params) => (
    await axios({ url: `${BASE_URL}${API_PATH.command}${params.id}/`, method: 'delete', timeout: TIMEOUT })
);
