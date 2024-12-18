const ArrowDownIcon = ({
  size = 18,
  color = 'currentColor',
  title = 'Arrow Down Icon',
  ...rest
}) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...rest}
  >
    <title id="arrowDownIcon">{title}</title>
    <path
      d="M8.00016 3.33325V12.6666M8.00016 12.6666L12.6668 7.99992M8.00016 12.6666L3.3335 7.99992"
      stroke={color}
      stroke-width="1.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export default ArrowDownIcon
