import { lazy } from 'react'

export const RootPageAsync = lazy(async () => await import('./index'))
