const CloseIcon = ({
  size = 18,
  color = 'currentColor',
  title = 'Close Icon',
  ...rest
}) => (
  <svg
    viewBox="0 0 31 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...rest}
  >
    <title id="closeIcon">{title}</title>
    <path
      d="M21.9582 9.54175L9.0415 22.4584M9.0415 9.54175L21.9582 22.4584"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export default CloseIcon
