export default function handler(req, res) {
  const { uid } = req.query
  console.log('uid: ', uid)
  res.status(200).json({ name: `jyoon ${uid}` })
}
