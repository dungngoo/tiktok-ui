import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';

import Image from '~/components/Image';
import AccountReview from './AccountReview/AccountReview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountItem({ dataFollowingUser, data }) {
    const renderReview = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <AccountReview data={data} />
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <Tippy interactive delay={[800, 0]} render={renderReview}  offset={[-40, 0]}>
                <div className={cx('account-item')}>
                    <Image
                        id="img"
                        className={cx('avatar')}
                        alt={data.nickname}
                        src={data.avatar}
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />}
                        </p>
                        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
