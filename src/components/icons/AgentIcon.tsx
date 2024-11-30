const AgentIcon = ({
  size = 18,
  color = "currentColor",
  title = "Agent Icon",
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
    <title id="agentIcon">{title}</title>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.47208 2.48256C8.6319 1.19462 11.324 1.19462 13.4838 2.48256C15.498 3.68365 16.7468 5.82448 16.8197 8.14542C17.3124 8.25232 17.7615 8.53494 18.0716 8.95877C18.405 9.41332 18.5445 9.98154 18.4597 10.5381L18.0459 13.2771C17.9241 14.1235 17.3024 14.812 16.4729 15.0194C16.171 15.0949 15.8634 15.1012 15.5699 15.0454C14.5783 16.2874 13.1838 17.1459 11.6266 17.4713C11.323 18.0768 10.6992 18.4926 9.97796 18.4926C8.95778 18.4926 8.1325 17.6607 8.1325 16.6366C8.1325 15.6124 8.95778 14.7805 9.97796 14.7805C10.8967 14.7805 11.6574 15.4552 11.7996 16.3374C12.8796 16.032 13.8485 15.4179 14.5858 14.5698C14.4677 14.4677 14.3598 14.3514 14.2648 14.2219C13.9321 13.7674 13.7927 13.1997 13.877 12.643L14.2908 9.90453C14.4066 9.09311 14.9821 8.42628 15.76 8.18923C15.7017 6.22394 14.6457 4.41026 12.9406 3.3935C11.1154 2.30511 8.84046 2.30511 7.01529 3.3935C5.31384 4.4081 4.2587 6.21623 4.19632 8.17669C4.99584 8.40201 5.59031 9.07821 5.70764 9.90014L6.12268 12.6428C6.20707 13.1997 6.06768 13.7674 5.73465 14.2223C5.22891 14.9118 4.35636 15.2268 3.52683 15.0194C2.6973 14.812 2.07565 14.1235 1.95443 13.2809L1.53947 10.5388C1.45451 9.98154 1.59402 9.41332 1.92708 8.95923C2.22831 8.54761 2.66025 8.26916 3.13586 8.15535C3.20555 5.83059 4.45503 3.68537 6.47208 2.48256ZM3.63601 9.15831C3.30432 9.15486 2.98455 9.31015 2.78264 9.58605C2.61533 9.81415 2.54532 10.0993 2.58805 10.3795L3.00366 13.1261C3.06408 13.546 3.37251 13.8876 3.78407 13.9905C4.19563 14.0934 4.62853 13.9371 4.87915 13.5954C5.0464 13.367 5.11646 13.0816 5.07403 12.8016L4.65833 10.0544C4.59835 9.63434 4.28998 9.29238 3.87829 9.18946L3.75435 9.1663C3.72668 9.16284 3.69902 9.16051 3.67141 9.15928C3.65952 9.15935 3.64772 9.15902 3.63601 9.15831ZM17.4111 10.3789C17.4537 10.0993 17.3837 9.81415 17.2161 9.58559C16.9655 9.24315 16.5324 9.08654 16.1208 9.18946C15.7091 9.29238 15.4007 9.63434 15.3401 10.0587L14.9257 12.8017C14.8833 13.0816 14.9534 13.367 15.1203 13.595C15.3712 13.9371 15.8041 14.0934 16.2157 13.9905C16.6272 13.8876 16.9357 13.546 16.9966 13.1224L17.4111 10.3789ZM9.97796 15.8411C10.4105 15.8411 10.7628 16.1963 10.7628 16.6366C10.7628 17.0768 10.4105 17.432 9.97796 17.432C9.54545 17.432 9.19311 17.0768 9.19311 16.6366C9.19311 16.1963 9.54545 15.8411 9.97796 15.8411Z"
      fill={color}
    />
  </svg>
);

export default AgentIcon;
