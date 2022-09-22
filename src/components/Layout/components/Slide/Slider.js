import classNames from 'classnames/bind';
import styles from './Slide.module.scss';

const cx = classNames.bind(styles);

function Slider() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>Slider</div>
        </div>
    );
}

export default Slider;
