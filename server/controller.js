module.exports = {
  register: (req, res, next) => {
    const db = req.app.get('db')
    const {username, password} = req.body
    db.register([username, password])
      .then(user => res.status(200).send(user))
      .catch(() => res.sendStatus(500))
  },
  login:  (req, res, next) => {
    const db = req.app.get('db')
    const {username, password} = req.body
    db.login_user([username, password])
      // .then(user => {
      //   res.status(200).send(user[0])
      // .catch(() => res.sendStatus(401))
      // })
      .then( (foundUser) => {
        if(foundUser[0]){
          res.status(200).send(foundUser[0])
        } 
        else {
          res.status(401).send('Login failed. Please try again.')
        }
      })
  }
}