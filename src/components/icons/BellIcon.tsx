const BellIcon = ({
  size = 18,
  color = "currentColor",
  title = "Bell Icon",
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
    <title id="bellIcon">{title}</title>
    <path
      d="M7.7952 17.5001C8.38281 18.0187 9.15468 18.3334 10.0001 18.3334C10.8454 18.3334 11.6173 18.0187 12.2049 17.5001M15.0001 6.66675C15.0001 5.34067 14.4733 4.0689 13.5356 3.13121C12.5979 2.19353 11.3261 1.66675 10.0001 1.66675C8.67397 1.66675 7.4022 2.19353 6.46452 3.13121C5.52684 4.0689 5.00006 5.34067 5.00006 6.66675C5.00006 9.2419 4.35045 11.005 3.62478 12.1713C3.01266 13.155 2.7066 13.6468 2.71783 13.784C2.73025 13.936 2.76244 13.9939 2.88487 14.0847C2.99544 14.1667 3.49388 14.1667 4.49077 14.1667H15.5093C16.5062 14.1667 17.0047 14.1667 17.1152 14.0847C17.2377 13.9939 17.2699 13.936 17.2823 13.784C17.2935 13.6468 16.9875 13.155 16.3753 12.1713C15.6497 11.005 15.0001 9.2419 15.0001 6.66675Z"
      stroke={color}
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default BellIcon;
