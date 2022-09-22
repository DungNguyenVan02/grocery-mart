import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function NavBar() {
    return (
        <nav className={cx('wrapper')}>
            <ul className={cx('list-menu')}>
                <li className={cx('menu-item')}>Home</li>
            </ul>
        </nav>
    );
}

export default NavBar;
