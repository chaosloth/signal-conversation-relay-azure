import React from "react";

export default function IconAzureFoundry({
  size = 24,
  className = "",
  ...props
}) {
  // Calculate height based on original aspect ratio
  const aspectRatio = 13.989 / 18;
  const height = size * aspectRatio;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={height}
      viewBox="0 0 18 13.989"
      className={className}
      {...props}
    >
      <defs>
        <radialGradient
          id="azure-foundry-gradient-1"
          cx="3.123"
          cy="4.657"
          r="9.718"
          gradientTransform="matrix(0.503, 0.865, -1.218, 0.708, 7.224, -1.34)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#9cebff" />
          <stop offset="0.667" stopColor="#50e6ff" />
          <stop offset="1" stopColor="#32bedd" />
        </radialGradient>
        <radialGradient
          id="azure-foundry-gradient-2"
          cx="1.882"
          cy="4.104"
          r="18.407"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#e7f9ff" />
          <stop offset="0.277" stopColor="#c3f1ff" />
          <stop offset="0.408" stopColor="#c1f1ff" />
          <stop offset="1" stopColor="#9cebff" />
        </radialGradient>
        <linearGradient
          id="azure-foundry-gradient-3"
          x1="15.15"
          y1="4.602"
          x2="3.77"
          y2="17.361"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0078d4" />
          <stop offset="0.712" stopColor="#005ba1" />
          <stop offset="1" stopColor="#003067" />
        </linearGradient>
      </defs>
      <g>
        <path
          d="M5.785,13.079s-1.66-.57.253-2.059a12.017,12.017,0,0,1,5.789-1.994l1.765-3.454a17.1,17.1,0,0,0-7.607.646C2.091,7.573-1.8,11.818.9,14.028A4.391,4.391,0,0,0,5.785,13.079Z"
          transform="translate(0 -2.005)"
          fill="url(#azure-foundry-gradient-1)"
        />
        <path
          d="M8.4,9.79V7.384a.475.475,0,0,1,.475-.475h.316a.862.862,0,1,0,0-.372H8.87a.848.848,0,0,0-.847.847V8.893h-.6a.862.862,0,1,0,0,.372h.6v.661C8.145,9.879,8.269,9.834,8.4,9.79Zm1.632-3.558a.491.491,0,1,1-.49.491A.491.491,0,0,1,10.027,6.232ZM6.582,9.569a.491.491,0,1,1,.491-.49A.491.491,0,0,1,6.582,9.569Z"
          transform="translate(0 -2.005)"
          fill="url(#azure-foundry-gradient-2)"
        />
        <path
          d="M3.324,10.2H.694c-.08.124-.152.248-.219.372H3.324a.848.848,0,0,0,.847-.847V9.518a.863.863,0,1,0-.372,0v.206A.475.475,0,0,1,3.324,10.2Zm.17-1.522a.491.491,0,1,1,.491.491A.492.492,0,0,1,3.494,8.677Z"
          transform="translate(0 -2.005)"
          fill="url(#azure-foundry-gradient-2)"
        />
        <path
          d="M5.119,12.261H4.307a.863.863,0,1,0,0,.372h.9A.642.642,0,0,1,5.119,12.261Zm-1.654.677a.491.491,0,1,1,.491-.491A.491.491,0,0,1,3.465,12.938Z"
          transform="translate(0 -2.005)"
          fill="url(#azure-foundry-gradient-2)"
        />
        <path
          d="M.9,14.028c6.267,3.81,12.347,2.564,16.991-8.016A1.315,1.315,0,0,0,18,5.48V2.336a.331.331,0,0,0-.33-.331H14.657a.708.708,0,0,0-.621.435C10.906,11.283,3.388,15.127.9,14.028Z"
          transform="translate(0 -2.005)"
          fill="url(#azure-foundry-gradient-3)"
        />
      </g>
    </svg>
  );
}
