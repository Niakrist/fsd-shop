import IconLogo from "./icons/IconLogo";
import type { IIconProps } from "./Icon.props";
import IconCart from "./icons/IconCart";

const Icon = ({ name, className, ...props }: IIconProps) => {
  const icons = {
    iconLogo: <IconLogo className={className} {...props} />,
    iconCart: <IconCart className={className} {...props} />,
  };

  return icons[name];
};

export default Icon;
