To start this app -
• Run `node app` from meaww directory.
• Make sure the sql server is already running.

SQL Server - 
• Should have a DB named `meaww`.
• Should have a table having following DDL - 
    CREATE TABLE users
    (
        id              INT unsigned NOT NULL AUTO_INCREMENT, # Unique ID for the user
        name            VARCHAR(150) NOT NULL,                # Name of the user
        age             VARCHAR(150) NOT NULL,                # Age of the user
        birth           DATE NOT NULL,                        # Birthday of the user
        image           BLOB NOT NULL,                        # Picture of user
        PRIMARY KEY     (id)                                  # Make the id the primary key
    );