import React from 'react';
import classNames from 'classnames';
import styles from './SideBar.module.scss';
import Menu, { MenuItems } from './Menu';
// import { HomeIcon } from '~/icons';
import config from '~/config';
import { HomeActiveIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon, HomeIcon } from '../icons';
import AccountItem from '../SuggestedAccounts/AccountItem';
import SuggestedAccounts from '../SuggestedAccounts';
const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItems
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItems
                    title="Following "
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItems title="LIVE" to={config.routes.Live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                <SuggestedAccounts label="Suggested accounts" />
                <SuggestedAccounts label="Following accounts" />
            </Menu>
        </aside>
    );
}

export default SideBar;
