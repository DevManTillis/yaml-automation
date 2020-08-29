#!/usr/bin/env python3
import pyodbc
from SQL import SCHEMA, create_seed_data

db_server="tcp:127.0.0.1"
db_user="sa"
db_password="P@55w0rd!"
database="yautomation"

## Always ensure that you’ve escaped any backslashes in the ODBC string. 
conn = pyodbc.connect(f"DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={db_server};PORT:1433;DATABASE={database};UID=sa;PWD={db_password}")
cursor = conn.cursor()

## Load SCHEMA TSQL statement
cursor.execute(SCHEMA)

## Load Seed Data TSQL statement
create_seed_data(db_connection=conn, cursor=cursor)


#rows = cursor.fetchall()
#if rows:
#    print(rows)
