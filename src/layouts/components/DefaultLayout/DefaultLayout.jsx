import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
    return (
        <>
            <Header />

            <div>{children}</div>

            <Footer />
        </>
    );
}

export default DefaultLayout;
