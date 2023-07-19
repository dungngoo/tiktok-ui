import { useEffect, useState, useRef } from "react";
import { useDebouce } from "~/hooks";

import styles from "./Search.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import axios from "axios";
import * as searchServices from "~/apiServices/searchServices";

const cx = classNames.bind(styles);
function Search() {
  const [isTippyVisible, setIsTippyVisible] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebouce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchApi = async () => {
      setLoading(true);
      const result = await searchServices.search(debounced);
      setSearchResult(result);

      setLoading(false);
    };
    fetchApi();
    setLoading(true);
  }, [debounced]);

  const handleClear = () => {
    setSearchResult([]);
    setSearchValue("");
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };
  useEffect(() => {
    // Xác định xem có hiển thị Tippy hay không
    const shouldShowTippy = showResult && searchResult.length > 0;

    // Nếu giá trị của biến trung gian khác với giá trị mới, cập nhật biến trung gian
    if (isTippyVisible !== shouldShowTippy) {
      setIsTippyVisible(shouldShowTippy);
    }
  }, [showResult, searchResult, isTippyVisible]);
  return (
    <HeadlessTippy
      interactive
      visible={isTippyVisible}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          type="text"
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck="false"
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {loading && <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />}

        <Tippy>
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            {/* Search */}
          </button>
        </Tippy>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
