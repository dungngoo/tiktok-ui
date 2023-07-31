import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
function SuggestedAccounts({ label, data = [], dataFollowingUser = [] }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data && data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}
              {dataFollowingUser && dataFollowingUser.map((account) => (
                <AccountItem key={account.id} dataFollowingUser={account} />
            ))}
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggestedAccounts;
