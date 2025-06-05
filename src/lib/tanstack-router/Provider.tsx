import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'

export default function TanstackRouterProvider() {
  return <RouterProvider router={router} />
}
