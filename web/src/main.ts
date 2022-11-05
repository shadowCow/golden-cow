import { render } from './App'

const appRoot = document.getElementById('root')
if (appRoot) {
    render(appRoot)
} else {
    console.error('document is missing #root element')
}
