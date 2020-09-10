# Knowledge Base Articles/Links

## How to use mssql express container
https://hub.docker.com/_/microsoft-mssql-server

## Install Docker-CE
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04

## Database ERD Tool
https://erdplus.com/

## Setup pyodbc for python3
https://docs.microsoft.com/en-us/sql/connect/odbc/linux-mac/installing-the-microsoft-odbc-driver-for-sql-server?view=sql-server-ver15#ubuntu17

## Setup pyodbc driver for ubuntu 20.04
https://www.osradar.com/how-to-install-odbc-on-ubuntu-20-04/

## Online UUID Generator
https://www.uuidgenerator.net/version4

## Reference Project ID for relations
277c3e51-7f39-4a95-8e23-e0287c91d046


# Sprint 1 Tasks
- [x] 8.29.2020 Automate docker container MSSQL server build
- [x] 8.29.2020 Create seed data
  - [x] Playbook
  - [x] Role
  - [x] Host
  - [x] Ansible Config
  - [x] Project
  - [x] Command
- [x] 8.30.2020 Load seed data successfully
- [x] 8.30.2020 Build Python3 CRUD Rest APIs for each table
- [x] 9.03.2020 Build UI/UX for CRUD
- [x] 9.10.2020 Add search filters to API
- [ ] Integrate MSSQL docker container with CRUD API model

# How to Load Seed Data
1. Ensure Python3 3.8.2 is install on local ubuntu system
2. Install Docker-CE locally
3. Install pyodbc locally for python3
4. Run mssql_server/build_mssql_container.sh
5. Run mssql_server/zseed_mssql_database.py

# How to start API
1. pip3 install virtualenv
2. virtualenv venv
3. . venv/bin/activate
4. pip3 -r install api/requirements.txt
5. cd api/
6. ./setup.sh
7. ./run.sh

# How to start the UI
1. Start the API with API directions ^
2. cd ui/
3. yarn install
4. yarn start


