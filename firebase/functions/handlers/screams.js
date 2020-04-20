const { db } = require('../util/admin');

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
// Fetch one scream
exports.getScream = (req, res) => {
  let screamData = {};
  db
    .doc(`/screams/${req.params.screamId}`)
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: 'Scream not found' })
      }
      screamData = doc.data();
      screamData.screamId = doc.id;
      return db
        .collection('comments')
        .orderBy('createdAt', 'desc')
        .where('screamId', '==', req.params.screamId)
        .get();
    })
    .then(data => {
      screamData.comments = [];
      data.forEach(doc => {
        screamData.comments.push(doc.data())
      });
      return res.json(screamData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.code })
  })
}

exports.postOneScream = (req, res) => {
  const newScream = {
    body: req.body.body,
    userHandle: req.user.handle,
    userImage: req.user.imageUrl,
    createdAt: new Date().toISOString(),
    // createdAt: admin.firestore.Timestamp.fromDate(new Date()),
    likeCount: 0,
    commentCount: 0
  };

  db
  .collection('screams')
    .add(newScream)
    .then(doc => {
      newScream.screamId = doc.id;
      return res.json(newScream);
      // return res.json({ message: `document ${doc.id} created successfully` })
    })
    .catch(err => {
      res.status(500).json({ error: 'something went wrong' })
      console.error(err);
    })
}

// Comment on a scream
exports.commentOnScream = (req, res) => {
  if (req.body.body.trim() === '') return res.status(400).json({ error: 'Must not be empty' });

  const newComment = {
    body: req.body.body,
    createdAt: new Date().toISOString(),
    screamId: req.params.screamId,
    userHandle: req.user.handle,
    userImage: req.user.imageUrl
  };

  return db
    .doc(`/screams/${req.params.screamId}`).get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: 'Scream not found' });
      }
      return db.collection('comments').add(newComment)
    })
    .then(() => res.json(newComment))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong' });
    })
}

exports.likeScream = (req, res) => {}

exports.unlikeScream = (req, res) => {}