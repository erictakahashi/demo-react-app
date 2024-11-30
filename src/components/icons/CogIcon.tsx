const CogIcon = ({
  size = 18,
  color = 'currentColor',
  title = 'Cog Icon',
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
    <title id="cogIcon">{title}</title>
    <g clip-path="url(#clip0_78_3157)">
      <path
        d="M9.99996 12.5001C11.3807 12.5001 12.5 11.3808 12.5 10.0001C12.5 8.61937 11.3807 7.50008 9.99996 7.50008C8.61925 7.50008 7.49996 8.61937 7.49996 10.0001C7.49996 11.3808 8.61925 12.5001 9.99996 12.5001Z"
        stroke={color}
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.606 12.2728C15.5052 12.5013 15.4751 12.7548 15.5197 13.0005C15.5642 13.2463 15.6814 13.4731 15.856 13.6516L15.9015 13.6971C16.0423 13.8378 16.1541 14.0049 16.2304 14.1888C16.3066 14.3727 16.3458 14.5699 16.3458 14.769C16.3458 14.9681 16.3066 15.1653 16.2304 15.3492C16.1541 15.5332 16.0423 15.7003 15.9015 15.841C15.7608 15.9819 15.5937 16.0936 15.4097 16.1699C15.2258 16.2461 15.0286 16.2854 14.8295 16.2854C14.6304 16.2854 14.4332 16.2461 14.2493 16.1699C14.0654 16.0936 13.8983 15.9819 13.7575 15.841L13.7121 15.7955C13.5335 15.6209 13.3068 15.5037 13.061 15.4592C12.8153 15.4146 12.5618 15.4447 12.3333 15.5455C12.1092 15.6416 11.9181 15.801 11.7835 16.0043C11.6489 16.2075 11.5767 16.4457 11.5757 16.6895V16.8183C11.5757 17.2201 11.4161 17.6055 11.1319 17.8896C10.8478 18.1738 10.4624 18.3334 10.0606 18.3334C9.65872 18.3334 9.27334 18.1738 8.98919 17.8896C8.70505 17.6055 8.54541 17.2201 8.54541 16.8183V16.7501C8.53955 16.4993 8.45838 16.2561 8.31247 16.0521C8.16655 15.8481 7.96264 15.6927 7.72723 15.6061C7.49874 15.5053 7.24527 15.4752 6.99951 15.5198C6.75376 15.5643 6.52699 15.6815 6.34844 15.8561L6.30299 15.9016C6.16227 16.0425 5.99517 16.1542 5.81123 16.2305C5.6273 16.3067 5.43013 16.346 5.23102 16.346C5.03191 16.346 4.83474 16.3067 4.65081 16.2305C4.46687 16.1542 4.29977 16.0425 4.15905 15.9016C4.01818 15.7609 3.90642 15.5938 3.83017 15.4098C3.75392 15.2259 3.71468 15.0287 3.71468 14.8296C3.71468 14.6305 3.75392 14.4334 3.83017 14.2494C3.90642 14.0655 4.01818 13.8984 4.15905 13.7577L4.2045 13.7122C4.37915 13.5337 4.49631 13.3069 4.54087 13.0611C4.58543 12.8154 4.55535 12.5619 4.4545 12.3334C4.35847 12.1093 4.19902 11.9183 3.99577 11.7836C3.79252 11.649 3.55434 11.5768 3.31057 11.5758H3.18178C2.77993 11.5758 2.39455 11.4162 2.1104 11.1321C1.82626 10.8479 1.66663 10.4625 1.66663 10.0607C1.66663 9.65884 1.82626 9.27346 2.1104 8.98931C2.39455 8.70517 2.77993 8.54554 3.18178 8.54554H3.24996C3.50071 8.53967 3.7439 8.45851 3.94791 8.31259C4.15192 8.16667 4.30732 7.96276 4.3939 7.72735C4.49474 7.49886 4.52483 7.24539 4.48027 6.99964C4.43571 6.75388 4.31855 6.52711 4.1439 6.34857L4.09844 6.30311C3.95757 6.1624 3.84581 5.99529 3.76957 5.81135C3.69332 5.62742 3.65407 5.43026 3.65407 5.23114C3.65407 5.03203 3.69332 4.83487 3.76957 4.65093C3.84581 4.46699 3.95757 4.29989 4.09844 4.15917C4.23916 4.0183 4.40627 3.90654 4.5902 3.83029C4.77414 3.75405 4.9713 3.7148 5.17041 3.7148C5.36953 3.7148 5.56669 3.75405 5.75063 3.83029C5.93456 3.90654 6.10167 4.0183 6.24238 4.15917L6.28784 4.20463C6.46638 4.37928 6.69315 4.49643 6.93891 4.54099C7.18466 4.58555 7.43813 4.55547 7.66663 4.45463H7.72723C7.9513 4.35859 8.1424 4.19914 8.277 3.99589C8.4116 3.79264 8.48384 3.55447 8.48481 3.31069V3.1819C8.48481 2.78006 8.64444 2.39467 8.92859 2.11053C9.21273 1.82638 9.59812 1.66675 9.99996 1.66675C10.4018 1.66675 10.7872 1.82638 11.0713 2.11053C11.3555 2.39467 11.5151 2.78006 11.5151 3.1819V3.25008C11.5161 3.49386 11.5883 3.73203 11.7229 3.93528C11.8575 4.13853 12.0486 4.29799 12.2727 4.39402C12.5012 4.49487 12.7547 4.52495 13.0004 4.48039C13.2462 4.43583 13.4729 4.31867 13.6515 4.14402L13.6969 4.09857C13.8376 3.95769 14.0048 3.84594 14.1887 3.76969C14.3726 3.69344 14.5698 3.65419 14.7689 3.65419C14.968 3.65419 15.1652 3.69344 15.3491 3.76969C15.533 3.84594 15.7002 3.95769 15.8409 4.09857C15.9817 4.23928 16.0935 4.40639 16.1697 4.59032C16.246 4.77426 16.2852 4.97142 16.2852 5.17054C16.2852 5.36965 16.246 5.56681 16.1697 5.75075C16.0935 5.93469 15.9817 6.10179 15.8409 6.24251L15.7954 6.28796C15.6208 6.46651 15.5036 6.69328 15.459 6.93903C15.4145 7.18478 15.4446 7.43825 15.5454 7.66675V7.72735C15.6414 7.95142 15.8009 8.14252 16.0042 8.27712C16.2074 8.41172 16.4456 8.48396 16.6894 8.48493H16.8181C17.22 8.48493 17.6054 8.64456 17.8895 8.92871C18.1737 9.21285 18.3333 9.59824 18.3333 10.0001C18.3333 10.4019 18.1737 10.7873 17.8895 11.0715C17.6054 11.3556 17.22 11.5152 16.8181 11.5152H16.75C16.5062 11.5162 16.268 11.5884 16.0648 11.723C15.8615 11.8576 15.7021 12.0487 15.606 12.2728Z"
        stroke={color}
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_78_3157">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default CogIcon
