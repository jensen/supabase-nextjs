import classnames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: true;
  size?: "sm" | "md" | "lg";
}

export default function Button({
  className,
  primary,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={classnames(
        "flex items-center h-8 px-3 rounded-md border transition-colors duration-300",
        {
          "bg-white text-black border-white hover:bg-black hover:text-white":
            primary,
          "bg-black text-neutral-500 border-neutral-700 hover:text-white hover:border-white":
            primary === undefined,
        },
        {
          "h-8": size === "sm",
          "h-10": size === "md",
        },
        className
      )}
    >
      <span className="text-sm font-semibold leading-5 inline-block">
        {props.children}
      </span>
    </button>
  );
}

Button.defaultProps = {
  size: "md",
};
