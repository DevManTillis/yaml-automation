SCHEMA=r'''
CREATE TABLE Project
(
  project_id CHAR(36) NOT NULL UNIQUE,
  name VARCHAR(25) NOT NULL UNIQUE,
  PRIMARY KEY (project_id)
);

CREATE TABLE AnsibleConfiguration
(
  config_id CHAR(36) NOT NULL UNIQUE,
  json_config VARCHAR(1000) NOT NULL,
  project_id CHAR(36) NOT NULL,
  PRIMARY KEY (config_id),
  FOREIGN KEY (project_id) REFERENCES Project(project_id) ON DELETE CASCADE
);

CREATE TABLE Command
(
  cmd_id CHAR(36) NOT NULL UNIQUE,
  arguments VARCHAR(36) NOT NULL,
  project_id CHAR(36) NOT NULL,
  PRIMARY KEY (cmd_id),
  FOREIGN KEY (project_id) REFERENCES Project(project_id) ON DELETE CASCADE
);

CREATE TABLE Playbook
(
  playbook_id CHAR(36) NOT NULL UNIQUE,
  playbook_name VARCHAR(25) NOT NULL,
  playbook_url VARCHAR(200) NOT NULL,
  project_id CHAR(36) NOT NULL,
  PRIMARY KEY (playbook_id),
  FOREIGN KEY (project_id) REFERENCES Project(project_id) ON DELETE CASCADE
);

CREATE TABLE Host
(
  host_id CHAR(36) NOT NULL UNIQUE,
  host_name VARCHAR(25) NOT NULL UNIQUE,
  project_id CHAR(36) NOT NULL,
  PRIMARY KEY (host_id),
  FOREIGN KEY (project_id) REFERENCES Project(project_id) ON DELETE CASCADE
);

CREATE TABLE Role
(
  role_id CHAR(36) NOT NULL UNIQUE,
  role_url VARCHAR(200) NOT NULL,
  role_name VARCHAR(25) NOT NULL UNIQUE,
  project_id CHAR(36) NOT NULL,
  PRIMARY KEY (role_id),
  FOREIGN KEY (project_id) REFERENCES Project(project_id) ON DELETE CASCADE
);

CREATE TABLE Output
(
  output_id CHAR(36) NOT NULL UNIQUE,
  json_output VARCHAR(8000) NOT NULL,
  start_time VARCHAR(25) NOT NULL,
  end_time VARCHAR(25) NOT NULL,
  status CHAR(7) NOT NULL,
  project_id CHAR(36) NOT NULL,
  PRIMARY KEY (output_id),
  FOREIGN KEY (project_id) REFERENCES Project(project_id) ON DELETE CASCADE
);
'''
