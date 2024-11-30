const PlusIcon = ({
  size = 18,
  color = "currentColor",
  title = "Plus Icon",
  ...rest
}) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...rest}
  >
    <title id="plusIcon">{title}</title>
    <path
      d="M9.99996 4.16663V15.8333M4.16663 9.99996H15.8333"
      stroke={color}
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default PlusIcon;
