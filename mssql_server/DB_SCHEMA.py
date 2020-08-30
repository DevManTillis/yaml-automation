SCHEMA=r'''
CREATE TABLE Project
(
  project_id CHAR(36) NOT NULL,
  name VARCHAR(25) NOT NULL,
  PRIMARY KEY (project_id)
);

CREATE TABLE AnsibleConfiguration
(
  config_id CHAR(36) NOT NULL,
  json_config VARCHAR(1000) NOT NULL,
  project_id CHAR(36) NOT NULL,
  PRIMARY KEY (config_id),
  FOREIGN KEY (project_id) REFERENCES Project(project_id)
);

CREATE TABLE Command
(
  cmd_id CHAR(36) NOT NULL,
  arguments VARCHAR(36) NOT NULL,
  project_id CHAR(36) NOT NULL,
  PRIMARY KEY (cmd_id),
  FOREIGN KEY (project_id) REFERENCES Project(project_id)
);

CREATE TABLE Playbook
(
  playbook_id CHAR(36) NOT NULL,
  playbook_name VARCHAR(25) NOT NULL,
  json_playbook VARCHAR(4000) NOT NULL,
  project_id CHAR(36) NOT NULL,
  PRIMARY KEY (playbook_id),
  FOREIGN KEY (project_id) REFERENCES Project(project_id)
);

CREATE TABLE Host
(
  host_id CHAR(36) NOT NULL,
  host_name VARCHAR(25) NOT NULL,
  project_id CHAR(36) NOT NULL,
  PRIMARY KEY (host_id),
  FOREIGN KEY (project_id) REFERENCES Project(project_id)
);

CREATE TABLE Role
(
  role_id CHAR(36) NOT NULL,
  role_url VARCHAR(200) NOT NULL,
  project_id CHAR(36) NOT NULL,
  role_name VARCHAR(25) NOT NULL,
  PRIMARY KEY (role_id),
  FOREIGN KEY (project_id) REFERENCES Project(project_id)
);

CREATE TABLE Output
(
  output_id CHAR(36) NOT NULL,
  json_output VARCHAR(5000) NOT NULL,
  start_time VARCHAR(25) NOT NULL,
  end_time VARCHAR(25) NOT NULL,
  status CHAR(7) NOT NULL,
  project_id CHAR(36) NOT NULL,
  PRIMARY KEY (output_id),
  FOREIGN KEY (project_id) REFERENCES Project(project_id)
);
'''
