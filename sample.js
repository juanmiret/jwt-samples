const jwt = require('jsonwebtoken')
const SECRET_KEY = 'SUPER_SECRET_KEY'

// TOKEN GENERATION, THIS WILL BE IN YOUR END
const generateToken = (userData) => {
  return jwt.sign(userData, SECRET_KEY, { algorithm: 'HS256', expiresIn: '1d' })
}


// TOKEN DECODING AND VERIFICATION, THIS WILL BE IN OUR END
const decodeToken = () => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch(err) {
    // ERROR, INVALID TOKEN OR KEY
  }
}

// LET's DO IT
let userData = {
  facebookId: '238923894392',
  fullName: 'Juan Miret',
  category: 'beverages',
  otherInfo: 'Other information'
}

// YOUR END
let token = generateToken(userData)
console.log('THIS IS OUR GENERATED TOKEN: ', token)
// SEND TOKEN TO OUR API URL LIKE THIS
let url = 'https://example.com/' + token


// OUR END
let decodedToken = decodeToken(token)
console.log('THIS IS THE USER INFO DECODED FROM THE TOKEN: ', decodedToken)