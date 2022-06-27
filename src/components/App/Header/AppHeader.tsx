import './AppHeader.css'

function AppHeader() {
    return (
        <header className="page-header">
            <nav className="primary-navigation">
                <ul>
                    <li className="navigation-item">
                        <a href="/">Getting started</a></li>
                    <li className="navigation-item">
                        <a href="/">Documentation</a>
                    </li>
                    <li className="navigation-item">
                        <a href="/">Components</a>
                    </li>
                    <li className="navigation-item">
                        <a href="/">Contribute</a>
                    </li>
                </ul>
            </nav>
        </header>
  )
}

export default AppHeader
