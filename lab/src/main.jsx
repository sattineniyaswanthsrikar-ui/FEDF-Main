import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BuggyTimer from './BuggyTimer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BuggyTimer/>
  </StrictMode>,
)

