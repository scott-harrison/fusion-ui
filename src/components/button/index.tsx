import React from "react";
import { ButtonStyled, AnchorStyled } from "./button";

const ButtonVariant = ["primary", "outline", "link"];
type VariantType = typeof ButtonVariant[number];
type SizeType = "small" | "medium" | "large" | "full" | undefined;
type targetType = "_blank" | "_self" | "_parent" | "_top" | "framename";

export interface ButtonProps {
  variant?: VariantType;
  href?: string;
  target?: targetType;
  size?: SizeType;
  disabled?: boolean;
  className?: string;
  style?: object;
  children?: React.ReactChild;
  onClick?: () => void;
}

const InternalButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = (props, ref) => {
  const {
    variant,
    href,
    target,
    size,
    disabled,
    className,
    style,
    children,
    onClick,
  } = props;

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    (
      onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    )?.(e);
  };

  if (variant === ButtonVariant[2] && size === "full") {
    throw new Error("You can't use full with the link variant button");
  }

  if (variant === "link" && !href) {
    throw new Error("Link requires a href");
  }

  if (variant === "link") {
    return (
      <AnchorStyled
        href={href}
        className={className}
        target={target}
        style={style}
        variant="link"
        size={size}
      >
        {children}
      </AnchorStyled>
    );
  }

  return (
    <ButtonStyled
      ref={ref}
      className={className}
      style={style}
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </ButtonStyled>
  );
};

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton);

export { Button };
