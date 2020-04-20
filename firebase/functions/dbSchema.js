let db = {
  screams: [
    {
      userHandle: 'user',
      body: 'this is the scream body',
      createdAt: '2020-04-11T12:20:20.002Z',
      likeCount: 5,
      commentCount: 2
    }
  ],
  comments: [
    {
      body: "nice scream!",
      createdAt: "2020-04-18T11:49:33.628Z",
      screamId: " EgJwZZd8oY09rGLSmXYB",
      userHandle: "new"
    }
  ],
  users: [
    {
      userId: "Lzajd5K3k2NmsTwrno3ugMN97Oo1",
      email: "test18@g.com",
      handle: "new",
      createdAt: "2020-04-16T07:15:18.403Z",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/socialape228.appspot.com/o/undefined?alt=media",
      bio: "my bio hello",
      website: "http://oogle.com",
      location: "LA, Ca"
    }
  ],
  userDetails: {
    // Redux data
    credentials: {
      userId: "Lzajd5K3k2NmsTwrno3ugMN97Oo1",
      email: "test18@g.com",
      handle: "new",
      createdAt: "2020-04-16T07:15:18.403Z",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/socialape228.appspot.com/o/undefined?alt=media",
      bio: "my bio hello",
      website: "http://oogle.com",
      location: "LA, Ca"
    },
    likes: []
  }
}