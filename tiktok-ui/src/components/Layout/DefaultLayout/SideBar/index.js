import React from 'react';
import classNames from 'classnames';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Side Bar </h2>
        </aside>
    );
}

export default SideBar;
