import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { useState, useEffect } from 'react';

import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    DiscoveryActiveIcon,
    DiscoveryIcon,
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';
import * as userService from '~/services/userService';
import * as meFollowingService from '~/services/meFollowingService';

const cx = classNames.bind(styles);

// const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
    const [suggestedUser, setSuggestedUser] = useState([]);
    const [followingUser, setFollowingUser] = useState([]);

    const getUserSuggested = () => {
        userService
            .getSuggested({ page: 1, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUser((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((err) => console.log(err));
    };

    const getUserFollowing = () => {
        meFollowingService
            .getUserFollowing({ page: 1 })
            .then((data) => setFollowingUser(data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getUserSuggested();
        getUserFollowing();
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Discovery"
                    to={config.routes.discovery}
                    icon={<DiscoveryIcon />}
                    activeIcon={<DiscoveryActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts label="Suggested Accounts" data={suggestedUser} />
            <SuggestedAccounts label="Following Accounts" data={followingUser} />
        </aside>
    );
}

export default Sidebar;
