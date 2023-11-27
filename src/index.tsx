import ReactDOM from 'react-dom'
import '@app/styles/index.scss'
import { Routing } from '@app/providers/Router'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './../node_modules/flag-icons/css/flag-icons.min.css' // or cdn: https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/css/flag-icons.min.css

const rootElement = document.getElementById('root')

ReactDOM.render(<Routing />, rootElement)
