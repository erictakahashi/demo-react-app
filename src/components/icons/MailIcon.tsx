const MailIcon = ({
  size = 18,
  color = "currentColor",
  title = "Mail Icon",
  ...rest
}) => (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...rest}
  >
    <title id="mailIcon">{title}</title>
    <path
      d="M8.01739 1.53631L12.4087 4.39068C12.5639 4.49154 12.6415 4.54197 12.6977 4.60924C12.7475 4.66878 12.7848 4.73766 12.8076 4.81183C12.8334 4.89562 12.8334 4.98816 12.8334 5.17323V9.45005C12.8334 10.4301 12.8334 10.9202 12.6427 11.2945C12.4749 11.6238 12.2072 11.8915 11.8779 12.0593C11.5036 12.2501 11.0135 12.2501 10.0334 12.2501H3.96675C2.98666 12.2501 2.49661 12.2501 2.12226 12.0593C1.79298 11.8915 1.52527 11.6238 1.35749 11.2945C1.16675 10.9202 1.16675 10.4301 1.16675 9.45005V5.17323C1.16675 4.98816 1.16675 4.89562 1.19251 4.81183C1.21532 4.73766 1.2527 4.66878 1.30246 4.60924C1.35867 4.54197 1.43626 4.49154 1.59143 4.39068L5.98277 1.53631M8.01739 1.53631C7.64917 1.29696 7.46506 1.17729 7.26668 1.13072C7.09133 1.08956 6.90883 1.08956 6.73348 1.13072C6.53511 1.17729 6.351 1.29696 5.98277 1.53631M8.01739 1.53631L11.6295 3.88417C12.0307 4.14498 12.2314 4.27539 12.3008 4.44076C12.3616 4.58528 12.3616 4.74816 12.3008 4.89268C12.2314 5.05805 12.0307 5.18846 11.6295 5.44927L8.01739 7.79713C7.64917 8.03648 7.46505 8.15615 7.26668 8.20272C7.09133 8.24388 6.90883 8.24388 6.73348 8.20272C6.53511 8.15615 6.351 8.03648 5.98277 7.79713L2.37067 5.44927C1.96942 5.18846 1.7688 5.05805 1.69932 4.89268C1.63859 4.74816 1.63859 4.58528 1.69932 4.44076C1.7688 4.27539 1.96942 4.14498 2.37067 3.88417L5.98277 1.53631M12.5417 11.0834L8.66677 7.58339M5.33339 7.58339L1.45841 11.0834"
      stroke={color}
      stroke-width="1.16667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default MailIcon;