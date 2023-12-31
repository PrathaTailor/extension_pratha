/* eslint-disable @typescript-eslint/no-explicit-any */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handleServerError } from './common'
import axios from 'axios'

const handler = async (req: any, res: any) => {
  const {
    method,
    body: { username, password, source, device_id, engine, funnel },
  } = req

  if (method === 'POST') {
    const payload = {
      username: username,
      password: password,
      source: source === 'localhost' ? 'test.iresextension.online' : source,
      device_id: device_id,
      engine: engine,
      funnel: funnel,
    }

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_ENGINE_URL + '/api/v1/oauth/token',
        payload
      )
      res.statusCode = 200
      if (response.status === 200) {
        const userUid = response.data.profile.id
        const payload = {
          status: true,
          userUid,
          token: response.data.refresh_token,
        }
        res.json(payload)
        return
      }

      res.json({ status: false, error: response.data.detail, token: null })
    } catch (e: any) {
      if (e.response && e.response.data && e.response.data.msg) {
        res.json({ status: false, error: e.response.data.msg, token: null })
        return
      }

      handleServerError(res, e)
    }
    return
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).end(`Method ${method} Not Allowed`)
}

export default handler
