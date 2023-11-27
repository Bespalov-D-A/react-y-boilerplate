import { BoundaryErrorPage } from 'src/3-pages/BoundaryError'
import { Suspense, type ErrorInfo, type ReactNode } from 'react'
import React from 'react'

interface IErrorBoundaryState {
  hasError: boolean
}
interface IErrorBoundaryProps {
  children: ReactNode
}

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    if (error) {
      return { hasError: true }
    } else {
      return { hasError: true }
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo.componentStack)
  }

  render(): ReactNode {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <BoundaryErrorPage />
        </Suspense>
      )
    }

    return children
  }
}

export default ErrorBoundary
