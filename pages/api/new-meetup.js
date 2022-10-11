// /api/new-meetup
// POST /api/new-meetup

import mongoose from 'mongoose';

function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await mongoose.connect(
      'mongodb+srv://bwdave532:TheLordBlessYou532@cluster0.qnkwfxq.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = await db.collection('meetups');

    const result = meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
