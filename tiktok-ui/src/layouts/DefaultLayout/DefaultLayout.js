import PropTypes from 'prop-types';
import Header from './component/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
DefaultLayout.prototype = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
