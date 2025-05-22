export default function IconAzureSearch({
  size = 24,
  className = "",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 18 18"
      className={className}
      {...props}
    >
      <defs>
        <radialGradient
          id="search-gradient"
          cx="10.629"
          cy="7.175"
          r="6.675"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.225" stopColor="#32d4f5" />
          <stop offset="0.59" stopColor="#32d2f2" />
          <stop offset="0.825" stopColor="#32caea" />
          <stop offset="1" stopColor="#32bedd" />
        </radialGradient>
      </defs>
      <title>Search Icon</title>
      <g>
        <rect
          x="-0.375"
          y="12.598"
          width="9.73"
          height="2.216"
          rx="1.036"
          transform="translate(-8.376 7.19) rotate(-45)"
          fill="#198ab3"
        />
        <circle cx="10.629" cy="7.175" r="6.675" fill="url(#search-gradient)" />
        <circle cx="10.615" cy="7.056" r="5.243" fill="#fff" />
        <path
          d="M5.535,8.353S6.97,1.171,13.676,2.8a5.14,5.14,0,0,0-6.186.047A5.121,5.121,0,0,0,5.535,8.353Z"
          fill="#c3f1ff"
        />
      </g>
    </svg>
  );
}
