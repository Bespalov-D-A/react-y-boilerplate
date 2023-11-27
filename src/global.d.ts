declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.svg' {
  import type React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare module '*.svg?url' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

declare module '*.jpeg' {
  const content: any
  export default content
}

declare module '*.jpg' {
  const content: any
  export default content
}

declare const WEBPACK_IS_DEV: boolean
