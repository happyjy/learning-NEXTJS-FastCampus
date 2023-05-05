import { cookies } from 'next/dist/client/components/headers';

export default function handler(req, res) {
  const { uid } = req.query;
  console.log('uid: ', uid);
  const cookies = req.cookies;
  console.log('cookies: ', cookies);
  res
    // 1. status: 200
    // .status(200)
    // .json({ name: `jyoon ${uid}`, cookies: JSON.stringify(cookies) });

    // 2. status: 404
    // .status(404)
    // .send({ erro: 'error' })

    // 3. status: 307
    .redirect(307, '/api/user');
}
