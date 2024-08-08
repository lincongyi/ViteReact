import ReactDOM from 'react-dom/client'
import App from './App'
import {
  legacyLogicalPropertiesTransformer,
  StyleProvider,
} from '@ant-design/cssinjs'
// import 'core-js/es/array/at'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <StyleProvider
    hashPriority="high"
    transformers={[legacyLogicalPropertiesTransformer]}
  >
    <App />
  </StyleProvider>
  // </React.StrictMode>
)
