import party from './datastore/partyDB';
import pool from './db_connection';

class PartyModel {
  static createParty(req, res) {
    const { name, hqAddress, logoUrl } = req.body;
    const text = 'INSERT INTO parties (name, hqAddress, logoUrl) VALUES ($1, $2, $3)';
    const values = [name, hqAddress, logoUrl];

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

  static getAllParty(res) {
    const text = 'SELECT * FROM parties';
    pool
      .query(text)
      .then(result => result.json())
      .then(value => {
        res.status(200).json({
          status: 200,
          data: value
        });
      })
      .catch(err => {
        res.status(500).json({
          status: 500,
          message: err
        });
      });
  }

  static getOne(id, res) {
    const text = 'SELECT * FROM parties WHERE id = $1';
    const val = [id];

    pool
      .query(text, val)
      .then(result => { result.json(); })
      .then(value => {
        res.status(200).json({
          status: 200,
          data: value
        });
      })
      .catch(err => {
        res.status(500).json({
          status: 500,
          message: err
        });
      });
  }

  static deleteParty(id, res) {
    const text = 'DELETE * FROM parties WHERE id = $1';
    const val = [id];

    pool
      .query(text, val)
      .then(result => { result.json(); })
      .then(value => {
        res.status(200).json({
          status: 200,
          data: value
        });
      })
      .catch(err => {
        res.status(500).json({
          status: 500,
          message: err
        });
      });
  }

  static patchParty(id, name, res) {
    const text = 'UPDATE parties SET name = $1 WHERE id = $2';
    const val = [id, name];
    pool
      .query(text, val)
      .then(result => result.json())
      .then(value => {
        res.status(200).json({
          status: 200,
          data: value
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

export default PartyModel;
