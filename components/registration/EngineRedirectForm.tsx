import {
  EngineRedirect,
  getEngineRedirectURL,
} from '@atomicleads/ext-satellite-form'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'

const EngineRedirectForm = () => {
  const { query, replace } = useRouter()

  const { token, event: action, provider } = query as Record<string, string>
  const engineURL = process.env.NEXT_PUBLIC_ENGINE_URL as string
  const engine = process.env.NEXT_PUBLIC_ENGINE as
    | 'filesmart.tax'
    | 'e.file-tax.net'
    | 'd.filesmart.tax'
    | 'd.file-tax.net'
  const cookies = parseCookies()

  const url = getEngineRedirectURL({
    token,
    action,
    provider,
    engine: engineURL,
    cookies,
  })

  return (
    <EngineRedirect
      timeout={1000 * 5}
      engine={engine}
      redirect={() => {
        replace(url)
      }}
    />
  )
}

export default EngineRedirectForm
