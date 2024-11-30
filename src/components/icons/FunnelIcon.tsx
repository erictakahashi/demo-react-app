const FunnelIcon = ({
  size = 18,
  color = 'currentColor',
  title = 'Funnel Icon',
  ...rest
}) => (
  <svg
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...rest}
  >
    <title id="funnelIcon">{title}</title>
    <path
      d="M4.5 9.5H13.5M2.25 5H15.75M6.75 14H11.25"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export default FunnelIcon
