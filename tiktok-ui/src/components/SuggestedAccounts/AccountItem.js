import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (atrrs) => {
        return (
            <div tabIndex="-1" {...atrrs}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/480228976_1716114076008305_8302444234925268316_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=sL1Y2nlpgncQ7kNvgHplfNx&_nc_oc=AdgNqo7uOTTFLPB3wJocK9TcX7Lpcirk6c7ZDo2OrFEqS9hNd_4zaL88y-6NmNblp8nb3-3Pmb9zTv-B_a8N6p4q&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=AEkdvQgl4t9mc7xHw6Dq3Bj&oh=00_AYHSr5wsO7i97Cy3efuZ6kOeAjDtAzI0ZW72ac2faP-C1g&oe=67D0D88B"
                        alt="avatar"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>vinhdinhduc</strong>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                        </p>
                        <p className={cx('name')}>Đinh Đức Vình</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
