import { cookies } from 'next/dist/client/components/headers';

export default function handler(req, res) {
  const { uid } = req.query;
  // console.log('uid: ', uid)
  // const cookies = req.cookies;
  res.status(200).json({ name: `jyoon ${uid}` });
}
