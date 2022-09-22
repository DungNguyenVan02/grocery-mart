import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Slide from '../components/Slide';
import Footer from '../components/Footer';

import classNames from 'classnames/bind';
import styles from './Defaultlayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <NavBar />
            <Slide />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
