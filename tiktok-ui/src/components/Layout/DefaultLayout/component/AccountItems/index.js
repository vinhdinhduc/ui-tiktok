// import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <>
            <div className={cx('wrapper')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/461427980_1606738470279200_3913859434966008635_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=K7Wfm84scd8Q7kNvgGqBZzA&_nc_oc=AdiI3ooz7LrnpISJ3W1SNrVZZ9bs7Bw_bLQIgFbqncPFXf0aRGrTNleBoNdTTVOoirCjkisuV0XHiI12i3ovU6Rk&_nc_zt=24&_nc_ht=scontent.fhan15-1.fna&_nc_gid=AjavToL3C9eTSnpY_exivvo&oh=00_AYASqFsp-vfvIGN8zjQ32c1MN-pxxNi5PHquaqGZG9POIA&oe=67B7C843"
                    alt="Vình"
                />
            </div>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A </span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </>
    );
}

export default AccountItem;
