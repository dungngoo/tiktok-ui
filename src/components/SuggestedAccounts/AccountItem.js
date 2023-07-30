import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import Tippy from '@tippyjs/react/headless';
import styles from './SuggestedAccounts.module.scss';
import AccountReview from './AccountReview/AccountReview';

const cx = classNames.bind(styles);
function AccountItem() {
    const renderReview = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <AccountReview />
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <Tippy  interactive delay={[800, 0]} render={renderReview} placement="bottom-end" offset={[-40,0]}>
                <div className={cx('account-item')}>
                    <img
                        id="img"
                        className={cx('avatar')}
                        draggable="false"
                        alt="Hình ảnh đại diện"
                        height="32"
                        width="32"
                        src="https://yt3.ggpht.com/yti/AOXPAcX3uTT6esimoBkZtcz4KUHAY8LdfYMMYhYfeA=s88-c-k-c0x00ffffff-no-rj"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>quocnguyenphu</strong>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                        </p>
                        <p className={cx('name')}>Quốc Nguyễn Phú</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
