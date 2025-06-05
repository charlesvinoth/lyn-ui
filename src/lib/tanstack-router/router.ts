import { createRouter } from '@tanstack/react-router'
import { routeTree } from '../../routeTree.gen'
import { queryClient } from '../tanstack-query/queryClient'

export const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})
