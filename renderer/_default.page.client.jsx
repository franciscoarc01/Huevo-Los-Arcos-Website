import ReactDOM from 'react-dom/client'
import '../App.css'
import '../index.css'

export { render }

function render(pageContext) {
    const { Page } = pageContext
    const root = document.getElementById('root')
    ReactDOM.hydrateRoot(root, <Page />)
}