import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="content">
                <NavBar />
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
