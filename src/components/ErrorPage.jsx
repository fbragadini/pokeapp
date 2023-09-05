import { useRouteError } from 'react-router-dom'

export function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  return (
    <h3>
      Oops! Not Found! <span>{error.statusText || error.message}</span>
    </h3>
  )
}
