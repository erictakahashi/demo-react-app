const ColumnsIcon = ({
  size = 18,
  color = "currentColor",
  title = "Columns Icon",
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
    <title id="columnsIcon">{title}</title>
    <path
      d="M6.75 2.75V16.25M11.25 2.75V16.25M5.85 2.75H12.15C13.4101 2.75 14.0402 2.75 14.5215 2.99524C14.9448 3.21095 15.289 3.55516 15.5048 3.97852C15.75 4.45982 15.75 5.08988 15.75 6.35V12.65C15.75 13.9101 15.75 14.5402 15.5048 15.0215C15.289 15.4448 14.9448 15.789 14.5215 16.0048C14.0402 16.25 13.4101 16.25 12.15 16.25H5.85C4.58988 16.25 3.95982 16.25 3.47852 16.0048C3.05516 15.789 2.71095 15.4448 2.49524 15.0215C2.25 14.5402 2.25 13.9101 2.25 12.65V6.35C2.25 5.08988 2.25 4.45982 2.49524 3.97852C2.71095 3.55516 3.05516 3.21095 3.47852 2.99524C3.95982 2.75 4.58988 2.75 5.85 2.75Z"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default ColumnsIcon;
