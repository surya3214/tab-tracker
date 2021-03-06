const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      ),
      name: Joi.string()
    }
    
    const {error, value} = Joi.validate(req.body, schema)
    
    if (error) {
      switch(error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Email validation failed'
          })
          break
        case 'password':
          res.status(400).send({
            error: `Password validation failed
              <br>
              Didn't follow the rules`
          })
          break
        default:
          res.status(400).send({
            error: 'Unknown error occurred during validation'
          })
      }
    } else {
      next()
    }
  }
}