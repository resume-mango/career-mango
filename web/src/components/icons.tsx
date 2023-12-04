import React from "react";
export type IconProps = {
  className?: string;
  fill?: string;
};
const Icons = {
  linkedin: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 50 50"
      {...props}
    >
      <path d="M 8 3.0117188 C 6.3126093 3.0117188 4.8354789 3.4916328 3.7539062 4.3652344 C 2.6723337 5.238836 2.0117188 6.533218 2.0117188 7.9472656 C 2.0117188 10.690836 4.4687078 12.814467 7.7167969 12.941406 A 0.98809878 0.98809878 0 0 0 8 12.988281 C 9.753566 12.988281 11.246191 12.474267 12.3125 11.564453 C 13.378809 10.654639 13.988281 9.3429353 13.988281 7.9472656 A 0.98809878 0.98809878 0 0 0 13.986328 7.8925781 C 13.832307 5.1316834 11.374781 3.0117187 8 3.0117188 z M 8 4.9882812 C 10.60907 4.9882812 11.895883 6.2693448 12.005859 7.9726562 C 11.998759 8.8049335 11.676559 9.5118991 11.03125 10.0625 C 10.378809 10.619186 9.371434 11.011719 8 11.011719 C 5.3980542 11.011719 3.9882813 9.5991704 3.9882812 7.9472656 C 3.9882812 7.1213132 4.3276663 6.4422421 4.9960938 5.9023438 C 5.6645211 5.3624454 6.6873907 4.9882813 8 4.9882812 z M 3 15 A 1.0001 1.0001 0 0 0 2 16 L 2 45 A 1.0001 1.0001 0 0 0 3 46 L 13 46 A 1.0001 1.0001 0 0 0 14 45 L 14 35.664062 L 14 16 A 1.0001 1.0001 0 0 0 13 15 L 3 15 z M 18 15 A 1.0001 1.0001 0 0 0 17 16 L 17 45 A 1.0001 1.0001 0 0 0 18 46 L 28 46 A 1.0001 1.0001 0 0 0 29 45 L 29 29 L 29 28.75 L 29 28.5 C 29 26.555577 30.555577 25 32.5 25 C 34.444423 25 36 26.555577 36 28.5 L 36 45 A 1.0001 1.0001 0 0 0 37 46 L 47 46 A 1.0001 1.0001 0 0 0 48 45 L 48 28 C 48 23.873476 46.787888 20.604454 44.744141 18.375 C 42.700394 16.145546 39.849212 15 36.787109 15 C 32.882872 15 30.521631 16.426076 29 17.601562 L 29 16 A 1.0001 1.0001 0 0 0 28 15 L 18 15 z M 4 17 L 12 17 L 12 35.664062 L 12 44 L 4 44 L 4 17 z M 19 17 L 27 17 L 27 19.638672 A 1.0001 1.0001 0 0 0 28.744141 20.306641 C 28.744141 20.306641 31.709841 17 36.787109 17 C 39.360007 17 41.615528 17.922268 43.269531 19.726562 C 44.923534 21.530858 46 24.261524 46 28 L 46 44 L 38 44 L 38 28.5 A 1.0001 1.0001 0 0 0 37.916016 28.089844 C 37.694061 25.26411 35.38033 23 32.5 23 C 29.474423 23 27 25.474423 27 28.5 L 27 28.75 L 27 29 L 27 44 L 19 44 L 19 17 z"></path>
    </svg>
  ),
  star: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 3L10.088 8.813C9.99015 9.11051 9.82379 9.38088 9.60234 9.60234C9.38088 9.82379 9.11051 9.99015 8.813 10.088L3 12L8.813 13.912C9.11051 14.0099 9.38088 14.1762 9.60234 14.3977C9.82379 14.6191 9.99015 14.8895 10.088 15.187L12 21L13.912 15.187C14.0099 14.8895 14.1762 14.6191 14.3977 14.3977C14.6191 14.1762 14.8895 14.0099 15.187 13.912L21 12L15.187 10.088C14.8895 9.99015 14.6191 9.82379 14.3977 9.60234C14.1762 9.38088 14.0099 9.11051 13.912 8.813L12 3Z"
        stroke="current"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  file: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 2V8H20M14.5 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7.5L14.5 2Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  close: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <path
        d="M9 9.21326L30.2132 30.4265M9 30.2132L30.2132 9"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  arrow: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.16602 9.99996H15.8327M15.8327 9.99996L9.99935 4.16663M15.8327 9.99996L9.99935 15.8333"
        stroke="current"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  mail: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  rocket: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.5 16.4998C3 17.7598 2.5 21.4998 2.5 21.4998C2.5 21.4998 6.24 20.9998 7.5 19.4998C8.21 18.6598 8.2 17.3698 7.41 16.5898C7.02131 16.2188 6.50929 16.0045 5.97223 15.9879C5.43516 15.9712 4.91088 16.1536 4.5 16.4998Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.9998L9 11.9998C9.53214 10.6192 10.2022 9.29582 11 8.04976C12.1652 6.18675 13.7876 4.65281 15.713 3.59385C17.6384 2.53489 19.8027 1.98613 22 1.99976C22 4.71976 21.22 9.49976 16 12.9998C14.7369 13.7985 13.3968 14.4685 12 14.9998Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12H4C4 12 4.55 8.97002 6 8.00002C7.62 6.92002 11 8.00002 11 8.00002"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15V20C12 20 15.03 19.45 16 18C17.08 16.38 16 13 16 13"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  lineChart: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 3V21H21"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 9L14 14L10 10L7 13"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  graduationCap: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 10V16M22 10L12 5L2 10L12 15L22 10Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12V17C9 20 15 20 18 17V12"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  lightBulb: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 18H15"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 22H14"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.09 14C15.27 13.02 15.74 12.26 16.5 11.5C16.9829 11.0555 17.3662 10.5138 17.6247 9.91058C17.8832 9.30734 18.0111 8.65621 18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 9 6.23 10.23 7.5 11.5C8.22405 12.1621 8.718 13.0379 8.91 14"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  calendar: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 2V6"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 2V6"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 10H21"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  layoutDashboard: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 3H3V12H10V3Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 3H14V8H21V3Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12H14V21H21V12Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 16H3V21H10V16Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  headphones: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 14H6C6.53043 14 7.03914 14.2107 7.41421 14.5858C7.78929 14.9609 8 15.4696 8 16V19C8 19.5304 7.78929 20.0391 7.41421 20.4142C7.03914 20.7893 6.53043 21 6 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  search: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.0004 20.9999L16.6504 16.6499"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  bookOpen: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  globe: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12H22"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  edit: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 20H21"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 3.50023C16.8978 3.1024 17.4374 2.87891 18 2.87891C18.2786 2.87891 18.5544 2.93378 18.8118 3.04038C19.0692 3.14699 19.303 3.30324 19.5 3.50023C19.697 3.69721 19.8532 3.93106 19.9598 4.18843C20.0665 4.4458 20.1213 4.72165 20.1213 5.00023C20.1213 5.2788 20.0665 5.55465 19.9598 5.81202C19.8532 6.06939 19.697 6.30324 19.5 6.50023L7 19.0002L3 20.0002L4 16.0002L16.5 3.50023Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  arrowUp: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 8L7 4M7 4L3 8M7 4L7 20"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6V8C15 9.10457 15.8954 10 17 10C18.1046 10 19 9.10457 19 8V6Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 20V14H15"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 20H19"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  brush: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.05957 11.9002L17.1296 3.84016C17.3926 3.56861 17.7071 3.35211 18.0546 3.20327C18.4022 3.05443 18.7759 2.97624 19.1539 2.97323C19.532 2.97023 19.9069 3.04248 20.2568 3.18578C20.6066 3.32907 20.9245 3.54055 21.1918 3.80789C21.4592 4.07523 21.6707 4.39309 21.814 4.74296C21.9572 5.09283 22.0295 5.46772 22.0265 5.84578C22.0235 6.22385 21.9453 6.59754 21.7965 6.94509C21.6476 7.29264 21.4311 7.6071 21.1596 7.87016L13.0996 15.9502"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.07002 14.9399C5.41002 14.9399 4.07002 16.2899 4.07002 17.9599C4.07002 19.2899 1.57002 19.4799 2.07002 19.9799C3.15002 21.0799 4.56002 21.9999 6.07002 21.9999C8.27002 21.9999 10.07 20.1999 10.07 17.9599C10.0713 17.5647 9.99478 17.173 9.84473 16.8073C9.69468 16.4416 9.47407 16.1091 9.19549 15.8286C8.91691 15.5482 8.58583 15.3254 8.22114 15.1729C7.85645 15.0204 7.4653 14.9413 7.07002 14.9399Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  clipboardCheck: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 14L11 16L15 12"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  flame: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 14.5C9.16304 14.5 9.79893 14.2366 10.2678 13.7678C10.7366 13.2989 11 12.663 11 12C11 10.62 10.5 10 10 9C8.928 6.857 9.776 4.946 12 3C12.5 5.5 14 7.9 16 9.5C18 11.1 19 13 19 15C19 15.9193 18.8189 16.8295 18.4672 17.6788C18.1154 18.5281 17.5998 19.2997 16.9497 19.9497C16.2997 20.5998 15.5281 21.1154 14.6788 21.4672C13.8295 21.8189 12.9193 22 12 22C11.0807 22 10.1705 21.8189 9.32122 21.4672C8.47194 21.1154 7.70026 20.5998 7.05025 19.9497C6.40024 19.2997 5.88463 18.5281 5.53284 17.6788C5.18106 16.8295 5 15.9193 5 15C5 13.847 5.433 12.706 6 12C6 12.663 6.26339 13.2989 6.73223 13.7678C7.20107 14.2366 7.83696 14.5 8.5 14.5Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  crosshair: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 12H18"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12H2"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6V2"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22V18"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  crown: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 20H19M2 4L5 16H19L22 4L16 11L12 4L8 11L2 4Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  send: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 2L11 13"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2L15 22L11 13L2 9L22 2Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  download: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10L12 15L17 10"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15V3"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  paperClip: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.4403 11.0502L12.2503 20.2402C11.1244 21.366 9.59747 21.9985 8.00529 21.9985C6.41311 21.9985 4.88613 21.366 3.76029 20.2402C2.63445 19.1143 2.00195 17.5873 2.00195 15.9952C2.00195 14.403 2.63445 12.876 3.76029 11.7502L12.3303 3.18016C13.0809 2.42827 14.0994 2.00533 15.1618 2.0044C16.2241 2.00346 17.2434 2.42459 17.9953 3.17516C18.7472 3.92572 19.1701 4.94423 19.171 6.00662C19.172 7.06901 18.7509 8.08827 18.0003 8.84016L9.41029 17.4102C9.03501 17.7854 8.52602 17.9963 7.99529 17.9963C7.46456 17.9963 6.95557 17.7854 6.58029 17.4102C6.20501 17.0349 5.99418 16.5259 5.99418 15.9952C5.99418 15.4644 6.20501 14.9554 6.58029 14.5802L15.0703 6.10016"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  timer: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 2H14"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14L15 11"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  eye: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  eyeOff: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.87964 9.87988C9.58489 10.1545 9.34848 10.4857 9.18451 10.8537C9.02055 11.2217 8.93238 11.619 8.92527 12.0218C8.91816 12.4246 8.99226 12.8247 9.14315 13.1983C9.29403 13.5718 9.51861 13.9112 9.80348 14.196C10.0884 14.4809 10.4277 14.7055 10.8012 14.8564C11.1748 15.0073 11.5749 15.0814 11.9777 15.0742C12.3805 15.0671 12.7778 14.979 13.1458 14.815C13.5138 14.651 13.845 14.4146 14.1196 14.1199"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7305 5.08C11.1518 5.02751 11.5759 5.00079 12.0005 5C19.0005 5 22.0005 12 22.0005 12C21.5534 12.9571 20.9927 13.8569 20.3305 14.68"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.61 6.60986C4.62125 7.96449 3.02987 9.82512 2 11.9999C2 11.9999 5 18.9999 12 18.9999C13.9159 19.005 15.7908 18.445 17.39 17.3899"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 2L22 22"
        stroke="current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default Icons;
