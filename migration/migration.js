import pool from '../model/db_connection';

const createOfficeTable = () => {
  const tables = `CREATE TABLE IF NOT EXISTS offices(
    id SERIAL PRIMARY KEY,
    type VARCHAR(12) NOT NULL,
    name VARCHAR(50) NOT NULL
  )`;
  
  pool
    .query(tables)
    .then(res => {
      console.log(res);
      createPartyTable();
    })
    .catch(err => {
      console.log(err);
    });
}

const createPartyTable = () => {
  const table = `CREATE TABLE IF NOT EXISTS parties(
    id SERIAL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    hqAddress VARCHAR(100) NOT NULL,
    logoUrl VARCHAR(100) NOT NULL
  )`;

  pool
    .query(table)
    .then(res => {
      console.log(res);
      createCandidateTable();
    })
    .catch(err => {
      console.log(err);
    });
}

const createCandidateTable = () => {
  const table = `CREATE TABLE IF NOT EXISTS candidates(
    id SERIAL PRIMARY KEY,
    office INT(10) FOREIGN KEY REFERENCES offices(id),
    party INT(10) FOREIGN KEY REFERENCES parties(id),
    candidate INT(10) FOREIGN KEY REFERENCES users(id)
  )`;

  pool
    .query(table)
    .then(res => {
      console.log(res);
      createVotingTable();
    })
    .catch(err => {
      console.log(err);
    });
}

const createVotingTable = () => {
  const table = `CREATE TABLE IF NOT EXISTS candidate(
    id SERIAL PRIMARY KEY,
    createdon CURRENT DATE,
    createdby INT(10) FOREIGN KEY REFERENCES users(id),
    office INT(10) FOREIGN KEY REFERENCES offices(id),
    candidate INT(10) FOREIGN KEY REFERENCES candidates(candidate)
  )`;

  pool
    .query(table)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

const createUserTable = () => {
  const table = `CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    othername VARCHAR(30) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    passporturl VARCHAR(200) NOT NULL,
    isadmin BOOLEAN DEFAULT false
  )`;

  pool
    .query(table)
    .then(res => {
      console.log(res);
      const adminUser = `INSERT INTO users(firstname, lastname, othername, email, phone, passporturl, isadmin) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
      const values = ['prince', 'michael', 'ifeanyi', 'princewillifeanyi1999@gmail.com', '08080727629', 'http://google.com/michael', true];

      pool
        .query(adminUser, values)
        .then(res => {
          console.log(res);
          createOfficeTable();
        })
        .catch(() => {
          // if user exists
          createOfficeTable();
        });
    })
    .catch(err => {
      console.log(err);
    });
}

createUserTable();
