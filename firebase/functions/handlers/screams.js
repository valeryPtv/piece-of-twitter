const { db } = require('../util/admin');
const admin = require('firebase-admin');

exports.getAllScreams = (req, res) => {
  db
    .collection('screams')
    .orderBy('createdAt', 'desc')
    .get()
    .then(data => {
      return res.json(data.docs.map(doc => ({
        screamId: doc.id,
        body: doc.data().body,
        userHandle: doc.data().userHandle,
        createdAt: new Date().toISOString(),
        commentCount: doc.data().commentCount,
        likeCount: doc.data().likeCount
        // return doc.data();
      })))
    })
    .catch(err => { console.error(err) });
}

exports.getScream = (req, res) => {

}

exports.postOneScream = (req, res) => {
  const newScream = {
    body: req.body.body,
    userHandle: req.user.handle,
    createdAt: admin.firestore.Timestamp.fromDate(new Date())
  };
  db
    .collection('screams')
    .add(newScream)
    .then(doc => res.json({ message: `document ${doc.id} created successfully` }))
    .catch(err => {
      res.status(500).json({ error: 'something went wrong' })
      console.error(err);
    })
}
