import userModel from '../../model/userModel';

class users {
  static createUser(req, res) {
    const { fname, lname, oname, email, phone, passportUrl } = req.body;
    if (!fname || trim(fname) === '' || fname <= 3) {
      res.status(400).json({
        status: 400,
        message: 'Enter your firstname'
      });
    }

    if (!lname || trim(lname) === '' || lname <= 3) {
      res.status(400).json({
        status: 400,
        message: 'Enter your lastname'
      });
    }

    if (!oname || trim(oname) === '' || oname <= 3) {
      res.status(400).json({
        status: 400,
        message: 'Enter your othername'
      });
    }

    if (!email || !(/^(@).(com)[^ "]+$/.test(email))) {
      res.status(400).json({
        status: 400,
        message: 'Enter a valid Email'
      });
    }

    if (!phone || trim(phone) === '' || phone.length < 10) {
      res.status(400).json({
        status: 400,
        message: 'Enter a valid phone number of more than 10 digits'
      })
    }

    if (!passportUrl || !(/^(ftp|http|https):\/\/[^ "]+$/.test(passportUrl))) {
      res.status(400).json({
        status: 400,
        message: 'Enter a valid passportUrl'
      });
    }

    userModel.createUser(req, res);
  }

  static authLogin(req, res) {
    const { email, password } = req.body;
    if (!email || !(/^(@).(com)[^ "]+$/.test(email)) || !password || trim(password) === '') {
      res.status(400).json({
        status: 400,
        message: 'Invalid Login details'
      });
    }

    userModel.loginUser(req, res);
  }
}