SCHEMA=r'''
CREATE TABLE Project
(
  project_id CHAR(45) NOT NULL,
  name CHAR(25) NOT NULL,
  PRIMARY KEY (project_id)
);

CREATE TABLE Command
(
  cmd_id CHAR(45) NOT NULL,
  arguments CHAR(45) NOT NULL,
  project_id CHAR(45) NOT NULL,
  PRIMARY KEY (cmd_id),
  FOREIGN KEY (project_id) REFERENCES Project(project_id)
);

CREATE TABLE Playbook
(
  playbook_id CHAR(45) NOT NULL,
  name CHAR(25) NOT NULL,
  json_playbook CHAR(4000) NOT NULL,
  project_id CHAR(45) NOT NULL,
  PRIMARY KEY (playbook_id),
  FOREIGN KEY (project_id) REFERENCES Project(project_id)
);

CREATE TABLE AnsibleConfiguration
(
  config_id CHAR(45) NOT NULL,
  json_config CHAR(1000) NOT NULL,
  project_id CHAR(45) NOT NULL,
  PRIMARY KEY (config_id),
  FOREIGN KEY (project_id) REFERENCES Project(project_id)
);

CREATE TABLE Host
(
  host_id CHAR(45) NOT NULL,
  name CHAR(25) NOT NULL,
  project_id CHAR(45) NOT NULL,
  PRIMARY KEY (host_id),
  FOREIGN KEY (project_id) REFERENCES Project(project_id)
);

CREATE TABLE Role
(
  role_id CHAR(45) NOT NULL,
  role_url CHAR(200) NOT NULL,
  project_id CHAR(45) NOT NULL,
  name CHAR(25) NOT NULL,
  PRIMARY KEY (role_id),
  FOREIGN KEY (project_id) REFERENCES Project(project_id)
);

CREATE TABLE Output
(
  output_id CHAR(45) NOT NULL,
  json_output CHAR(5000) NOT NULL,
  start_time CHAR(25) NOT NULL,
  end_time CHAR(25) NOT NULL,
  status CHAR(7) NOT NULL,
  project_id CHAR(45) NOT NULL,
  PRIMARY KEY (output_id),
  FOREIGN KEY (project_id) REFERENCES Project(project_id)
);
'''

def create_seed_data(db_connection=None, cursor=None):
    projects_seed_data = list()
    with open("seed_data/Projects_seed_data.csv", "r") as data:
        projects_seed_data = data.readlines()
    for row in projects_seed_data:
        columns = row.split(',')
        cursor.execute(f"""
        INSERT INTO Project (project_id, name) 
        VALUES ('{columns[0]}', '{columns[1]}');
        """)
        
    db_connection.commit()
