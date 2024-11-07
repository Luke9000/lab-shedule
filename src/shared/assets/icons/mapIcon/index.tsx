import { memo } from "react";
import type { FC } from "react";
 import type { IconProps } from "../types.ts";

const Component: FC<IconProps> = ({ height = 24, width = 24, ...props }) => (
  <svg
    height={height}
    width={width}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 26.39 26.39"
    enableBackground="new 0 0 26.39 26.39"
    {...props}
  >
    <path
      d="M18.3641 4.63606C20.0164 6.28819 20.9614 8.51817 20.9993 10.8545C21.0372 13.1908 20.1649 15.4502 18.5671 17.1551L18.3641 17.3651L14.1211 21.6071C13.5827 22.1451 12.8599 22.4584 12.0992 22.4834C11.3385 22.5085 10.5967 22.2435 10.0241 21.7421L9.88006 21.6071L5.63606 17.3641C3.94822 15.6762 3 13.387 3 11.0001C3 8.61309 3.94822 6.32389 5.63606 4.63606C7.32389 2.94822 9.61309 2 12.0001 2C14.387 2 16.6762 2.94822 18.3641 4.63606ZM12.0001 8.00006C11.6061 8.00006 11.216 8.07765 10.852 8.22842C10.488 8.37918 10.1573 8.60016 9.87873 8.87873C9.60016 9.15731 9.37918 9.48803 9.22842 9.85201C9.07765 10.216 9.00006 10.6061 9.00006 11.0001C9.00006 11.394 9.07765 11.7841 9.22842 12.1481C9.37918 12.5121 9.60016 12.8428 9.87873 13.1214C10.1573 13.4 10.488 13.6209 10.852 13.7717C11.216 13.9225 11.6061 14.0001 12.0001 14.0001C12.7957 14.0001 13.5588 13.684 14.1214 13.1214C14.684 12.5588 15.0001 11.7957 15.0001 11.0001C15.0001 10.2044 14.684 9.44134 14.1214 8.87873C13.5588 8.31613 12.7957 8.00006 12.0001 8.00006Z"
      
    />
  </svg>
);

export const MapIcon = memo(Component);