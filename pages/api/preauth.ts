/* eslint-disable @typescript-eslint/no-explicit-any */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handleServerError } from './common'
import axios from 'axios'

const handler = async (req: any, res: any) => {
  const {
    method,
    body: { email },
  } = req

  if (method === 'POST') {
    const payload = {
      email,
    }

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_ENGINE_URL + '/api/v1/oauth/pre-auth',
        payload
      )
      res.statusCode = 200
      if (response.status === 200) {
        const firstName = response.data.firstName
        const auth_modes = response.data.auth_modes
        const payload = {
          status: true,
          firstName,
          auth_modes,
        }
        res.json(payload)
        return
      }

      res.json({ status: false, error: response.data.detail })
    } catch (e: any) {
      if (e.response && e.response.data && e.response.data.msg) {
        res.json({ status: false, error: e.response.data.msg })
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
