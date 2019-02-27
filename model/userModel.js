import pool from './db_connection';

class userModel {
  static createUser(req, res) {
    const { fname, lname, oname, email, phone, passportUrl } = req.body;
    const text = `INSERT INTO users(firstname, lastname, othername, email, phone, passporturl) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const values = [fname, lname, oname, email, phone, passportUrl];

    pool
      .query(text, values)
      .then(result => result.json())
      .then(val => {
        res.status(201).json({
          status: 201,
          data: val
        });
      })
      .catch(err => {
        res.status(500).json({
          status: 500,
          message: err
        });
      });
  }

  static loginUser(req, res) {
    const { email, password } = req.body;
    const text = 'SELECT * FROM parties WHERE email = $1 && password = $2';
    const value = [email, password];

    pool
      .query(text, value)
      .then(result => result.json())
      .then(val => {
        res.status(200).json({
          status: 200,
          data: val
        });
      })
      .catch(err => {
        res.status(500).json({
          status: 500,
          message: err
        });
      });
  }
}

export default userModel;