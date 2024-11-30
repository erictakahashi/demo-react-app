const BadgeIcon = ({
  size = 18,
  color = 'currentColor',
  title = 'Badge Icon',
  ...rest
}) => (
  <svg
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...rest}
  >
    <title id="badgeIcon">{title}</title>
    <circle cx="4" cy="4" r="3" fill={color} />
  </svg>
)

export default BadgeIcon
