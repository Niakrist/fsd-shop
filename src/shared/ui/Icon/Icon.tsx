import IconLogo from "./icons/IconLogo";
import IconCart from "./icons/IconCart";
import IconWhatsapp from "./icons/IconWhatsapp";
import IconInstagram from "./icons/IconInstagram";
import type { IIconProps } from "./Icon.props";
import IconChevron from "./icons/IconChevron";

const Icon = ({ name, className, ...props }: IIconProps) => {
  const icons = {
    iconLogo: <IconLogo className={className} {...props} />,
    iconCart: <IconCart className={className} {...props} />,
    iconWhatsapp: <IconWhatsapp className={className} {...props} />,
    iconInstagram: <IconInstagram className={className} {...props} />,
    iconChevron: <IconChevron className={className} {...props} />,
  };

  return icons[name];
};

export default Icon;
