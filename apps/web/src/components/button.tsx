import { Slot } from "@radix-ui/react-slot";
import classNames from "classnames";
import * as React from "react";
import { unreachable } from "../utils/unreachable";

type Appearance = "white" | "gradient";
type Size = "1" | "2" | "3" | "4";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  asChild?: boolean;
  appearance?: Appearance;
  size?: Size;
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  Readonly<ButtonProps>
>(
  (
    {
      asChild,
      appearance = "white",
      className,
      children,
      size = "2",
      ...props
    },
    forwardedRef,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={classNames(
          getSize(size),
          getAppearance(appearance),
          "inline-flex items-center justify-center border font-medium",
          className,
        )}
        ref={forwardedRef}
        type="button"
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Button.displayName = "Button";

const getAppearance = (appearance: Appearance) => {
  switch (appearance) {
    case "white":
      return [
        "bg-white text-black",
        "hover:bg-white/90",
        "focus:ring-2 focus:ring-white/20 focus:outline-none focus:bg-white/90",
      ];
    case "gradient":
      return [
        "bg-gradient backdrop-blur-[20px] border-[#34343A]",
        "hover:bg-gradientHover",
        "focus:ring-2 focus:ring-white/20 focus:outline-none focus:bg-gradientHover",
      ];
    default:
      unreachable(appearance);
  }
};

const getSize = (size: Size) => {
  switch (size) {
    case "1":
      return "";
    case "2":
      return "text-[14px] h-8 px-3 rounded-md gap-2";
    case "3":
      return "text-[14px] h-10 px-4 rounded-md gap-2";
    case "4":
      return "text-base h-11 px-4 rounded-md gap-2";
    default:
      unreachable(size);
  }
};
