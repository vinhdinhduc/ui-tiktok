import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './AccountPreview.module.scss';

import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/480228976_1716114076008305_8302444234925268316_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=sL1Y2nlpgncQ7kNvgHplfNx&_nc_oc=AdgNqo7uOTTFLPB3wJocK9TcX7Lpcirk6c7ZDo2OrFEqS9hNd_4zaL88y-6NmNblp8nb3-3Pmb9zTv-B_a8N6p4q&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=AEkdvQgl4t9mc7xHw6Dq3Bj&oh=00_AYHSr5wsO7i97Cy3efuZ6kOeAjDtAzI0ZW72ac2faP-C1g&oe=67D0D88B"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>vinhdinhduc</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <p className={cx('full-name')}>Đinh Đức Vình</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>82M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>10.2K</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
