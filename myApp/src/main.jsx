import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Para from './Paragraph.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <Header name="Rahul" />
  <Para />
  <button>Good Bye!</button>
  </>
)