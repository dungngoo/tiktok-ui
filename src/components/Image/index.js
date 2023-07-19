import classNames from "classnames";
import { forwardRef, useState } from "react";
import images from "~/assets/images";
import styles from "./Image.module.scss";

const Image = forwardRef(({ src, alt, fallBack: customFallBack = images.noImage, className, ...props }, ref) => {
  const [fallBack, setFallBack] = useState("");

  const handleError = () => {
    setFallBack(customFallBack);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallBack || src}
      alt={alt}
      {...props}
      onError={handleError}
    ></img>
  );
});

export default Image;
