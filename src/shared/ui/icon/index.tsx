import type { FC, DOMAttributes } from "react";
import clsx from "clsx";
import { memo, useEffect, useRef } from "react";

// import { EColorType, ETextColor } from "uikit";
// import { formatToStringWithPx } from "uikit/utils";
import type { IconType } from "./iconType";
import { iconTypes } from "./iconType";
// import type { TColor } from "./types";
import styles from "./styles.module.css";

const getIcon = (type: string) => iconTypes.get(type);

interface IProps extends DOMAttributes<HTMLSpanElement> {
  className?: string;
  color?: string;
  dataTestId?: string;
  height?: number;
  size?: number;
  type: IconType;
  width?: number;
}

const Component: FC<IProps> = ({
  className,
//   color = ETextColor.Dark,
  dataTestId = "uikit__icon",
  height,
  width,
  size,
  type,
  ...rest
}) => {
  const iconRef = useRef<HTMLDivElement>(null);
//   const mainStyles = clsx(`${EColorType.Icon}-${color}`);

//   useEffect(() => {
//     if (iconRef.current) {
//       if (size && !height && !width) {
//         iconRef.current.style.setProperty("--icon-height", formatToStringWithPx(size));
//         iconRef.current.style.setProperty("--icon-width", formatToStringWithPx(size));
//       } else if (!size && height && width) {
//         iconRef.current.style.setProperty("--icon-height", formatToStringWithPx(height));
//         iconRef.current.style.setProperty("--icon-width", formatToStringWithPx(width));
//       }
//     }
//   }, [height, size, width]);

  return (
    <div
      className={clsx(styles.icon, className)}
      data-testid={dataTestId}
      ref={iconRef}
      {...rest}
    >
      {getIcon(type)}
    </div>
  );
};

export const Icon = memo(Component);