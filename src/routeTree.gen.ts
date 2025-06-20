/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as DemoTanstackQueryImport } from './routes/demo.tanstack-query'
import { Route as DemoTableImport } from './routes/demo.table'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DemoTanstackQueryRoute = DemoTanstackQueryImport.update({
  id: '/demo/tanstack-query',
  path: '/demo/tanstack-query',
  getParentRoute: () => rootRoute,
} as any)

const DemoTableRoute = DemoTableImport.update({
  id: '/demo/table',
  path: '/demo/table',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/demo/table': {
      id: '/demo/table'
      path: '/demo/table'
      fullPath: '/demo/table'
      preLoaderRoute: typeof DemoTableImport
      parentRoute: typeof rootRoute
    }
    '/demo/tanstack-query': {
      id: '/demo/tanstack-query'
      path: '/demo/tanstack-query'
      fullPath: '/demo/tanstack-query'
      preLoaderRoute: typeof DemoTanstackQueryImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/demo/table': typeof DemoTableRoute
  '/demo/tanstack-query': typeof DemoTanstackQueryRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/demo/table': typeof DemoTableRoute
  '/demo/tanstack-query': typeof DemoTanstackQueryRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/demo/table': typeof DemoTableRoute
  '/demo/tanstack-query': typeof DemoTanstackQueryRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/demo/table' | '/demo/tanstack-query'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/demo/table' | '/demo/tanstack-query'
  id: '__root__' | '/' | '/demo/table' | '/demo/tanstack-query'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DemoTableRoute: typeof DemoTableRoute
  DemoTanstackQueryRoute: typeof DemoTanstackQueryRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DemoTableRoute: DemoTableRoute,
  DemoTanstackQueryRoute: DemoTanstackQueryRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/demo/table",
        "/demo/tanstack-query"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/demo/table": {
      "filePath": "demo.table.tsx"
    },
    "/demo/tanstack-query": {
      "filePath": "demo.tanstack-query.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
