const DotsHorizontalIcon = ({
  size = 18,
  color = 'currentColor',
  title = 'Dots Horizontal Icon',
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
    <title id="dotsHorizontalIcon">{title}</title>
    <path
      d="M9.99992 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 9.99992 9.16675C9.53968 9.16675 9.16659 9.53984 9.16659 10.0001C9.16659 10.4603 9.53968 10.8334 9.99992 10.8334Z"
      stroke={color}
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.8333 10.8334C16.2935 10.8334 16.6666 10.4603 16.6666 10.0001C16.6666 9.53984 16.2935 9.16675 15.8333 9.16675C15.373 9.16675 14.9999 9.53984 14.9999 10.0001C14.9999 10.4603 15.373 10.8334 15.8333 10.8334Z"
      stroke={color}
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.16659 10.8334C4.62682 10.8334 4.99992 10.4603 4.99992 10.0001C4.99992 9.53984 4.62682 9.16675 4.16659 9.16675C3.70635 9.16675 3.33325 9.53984 3.33325 10.0001C3.33325 10.4603 3.70635 10.8334 4.16659 10.8334Z"
      stroke={color}
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export default DotsHorizontalIcon
