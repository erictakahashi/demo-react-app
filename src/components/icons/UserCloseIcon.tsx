const UserCloseIcon = ({
  size = 18,
  color = 'currentColor',
  title = 'User Close Icon',
  ...rest
}) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...rest}
  >
    <title id="userCloseIcon">{title}</title>
    <path
      d="M8.25 8L10.75 10.5M10.75 8L8.25 10.5M6 7.75H3.75C3.05222 7.75 2.70333 7.75 2.41943 7.83612C1.78023 8.03002 1.28002 8.53023 1.08612 9.16943C1 9.45333 1 9.80222 1 10.5M7.25 3.75C7.25 4.99264 6.24264 6 5 6C3.75736 6 2.75 4.99264 2.75 3.75C2.75 2.50736 3.75736 1.5 5 1.5C6.24264 1.5 7.25 2.50736 7.25 3.75Z"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export default UserCloseIcon
