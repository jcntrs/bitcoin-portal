import Link from 'next/link';

const Navigation = () => (
    <nav className="navbar navbar-expand navbar-dark bg-warning">
        <div className="container">
            <Link href="/"><a className="navbar-brand">Portal Bitcoin</a></Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">Inicio</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/aboutUs"><a className="nav-link">Sobre Nosotros</a></Link>
                    </li>
                </ul>
            </div>
        </div>
        <style jsx>{`
            .navbar-dark .navbar-nav .nav-link {
                color: white;
            }
            .navbar-dark .navbar-nav .nav-link:hover {
                color: rgba(255,255,255,0.5);
            }
        `}</style>
    </nav>
);


export default Navigation;