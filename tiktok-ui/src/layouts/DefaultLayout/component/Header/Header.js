import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import images from '~/assets/images';
import config from '~/config';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Search from '~/layouts/DefaultLayout/component/Search';
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from '~/components/icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'ja',
                    title: '日本語',
                },
                {
                    type: 'language',
                    code: 'ko',
                    title: '한국어',
                },
                {
                    type: 'language',
                    code: 'zh',
                    title: '中文',
                },
                {
                    type: 'language',
                    code: 'es',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'fr',
                    title: 'Français',
                },
                {
                    type: 'language',
                    code: 'de',
                    title: 'Deutsch',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italiano',
                },
                {
                    type: 'language',
                    code: 'pt',
                    title: 'Português',
                },
                {
                    type: 'language',
                    code: 'ru',
                    title: 'Русский',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom" interactive={true}>
                                <button className={cx('action-btn')}>
                                    {/* <FontAwesomeIcon icon={faCloudUpload} /> */}
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                    <span className={cx('badge')}>32</span>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/480228976_1716114076008305_8302444234925268316_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=sL1Y2nlpgncQ7kNvgHplfNx&_nc_oc=AdgNqo7uOTTFLPB3wJocK9TcX7Lpcirk6c7ZDo2OrFEqS9hNd_4zaL88y-6NmNblp8nb3-3Pmb9zTv-B_a8N6p4q&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=AEkdvQgl4t9mc7xHw6Dq3Bj&oh=00_AYHSr5wsO7i97Cy3efuZ6kOeAjDtAzI0ZW72ac2faP-C1g&oe=67D0D88B"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
