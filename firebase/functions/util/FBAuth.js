const { db, admin } = require('./admin');

module.exports = (req, res, next) => {
  let idToken;
  const authHeader = req.headers.authorization
  if (authHeader && authHeader.startsWith('Bearer ')) {
    idToken = authHeader.split('Bearer ')[1]
  } else {
    console.error('No token found')
    return req.status(403).json({ error: 'Unauthorized' })
  }

  return admin
    .auth()
    .verifyIdToken(idToken)
    .then(decodedToken => {
      req.user = decodedToken;
      return db
        .collection('users')
        .where('userId', '==', req.user.uid)
        .limit(1)
        .get();
    })
    .then(data => {
      req.user.handle = data.docs[0].data().handle;
      req.user.imageUrl = data.docs[0].data().imageUrl;
      return next();
    })
    .catch(err => {
      console.error('Error while verifying token, ', err);
      return res.status(403).json(err);
    })
}