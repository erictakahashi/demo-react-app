const ArrowUpIcon = ({
  size = 18,
  color = 'currentColor',
  title = 'Arrow Up Icon',
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
    <title id="arrowUpIcon">{title}</title>
    <path
      d="M9.99999 15.8334V4.16669M9.99999 4.16669L4.16666 10M9.99999 4.16669L15.8333 10"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export default ArrowUpIcon
