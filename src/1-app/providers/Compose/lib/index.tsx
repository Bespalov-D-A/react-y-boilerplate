import { ErrorBoundary } from '@app/providers/ErrorBoundary'
import compose from 'compose-function'
import React from 'react'

// композируем все необходимые для приложения провайдеры
export const allProviders = compose((component: React.ReactNode) => (
  <ErrorBoundary>{component}</ErrorBoundary>
))
