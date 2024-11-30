const ArchiveIcon = ({
  size = 18,
  color = "currentColor",
  title = "Archive Icon",
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
    <title id="archiveIcon">{title}</title>
    <path
      d="M3.33317 6.66383C3.1965 6.6603 3.09725 6.65239 3.00802 6.63464C2.34687 6.50313 1.83004 5.9863 1.69853 5.32515C1.6665 5.16415 1.6665 4.97055 1.6665 4.58333C1.6665 4.19612 1.6665 4.00251 1.69853 3.84152C1.83004 3.18037 2.34687 2.66354 3.00802 2.53202C3.16902 2.5 3.36262 2.5 3.74984 2.5H16.2498C16.6371 2.5 16.8307 2.5 16.9917 2.53202C17.6528 2.66354 18.1696 3.18037 18.3011 3.84152C18.3332 4.00251 18.3332 4.19612 18.3332 4.58333C18.3332 4.97055 18.3332 5.16415 18.3011 5.32515C18.1696 5.9863 17.6528 6.50313 16.9917 6.63464C16.9024 6.65239 16.8032 6.6603 16.6665 6.66383M8.33317 10.8333H11.6665M3.33317 6.66667H16.6665V13.5C16.6665 14.9001 16.6665 15.6002 16.394 16.135C16.1543 16.6054 15.7719 16.9878 15.3015 17.2275C14.7667 17.5 14.0666 17.5 12.6665 17.5H7.33317C5.93304 17.5 5.23297 17.5 4.69819 17.2275C4.22779 16.9878 3.84534 16.6054 3.60565 16.135C3.33317 15.6002 3.33317 14.9001 3.33317 13.5V6.66667Z"
      stroke={color}
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default ArchiveIcon;
