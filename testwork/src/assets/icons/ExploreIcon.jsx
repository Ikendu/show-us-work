export default function ExploreIcon({ size, changeIcon }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 34.8333C29.0876 34.8333 34.8333 29.0877 34.8333 22C34.8333 14.9123 29.0876 9.16667 22 9.16667C14.9123 9.16667 9.16666 14.9123 9.16666 22C9.16666 29.0877 14.9123 34.8333 22 34.8333ZM22 27.5C25.0376 27.5 27.5 25.0376 27.5 22C27.5 18.9624 25.0376 16.5 22 16.5C18.9624 16.5 16.5 18.9624 16.5 22C16.5 25.0376 18.9624 27.5 22 27.5Z"
        fill={changeIcon == 1 ? `black` : `#494949`}
      />
      <path
        d="M22 9.16667V5.5"
        stroke="#494949"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M34.8333 22L38.5 22"
        stroke="#494949"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M22 38.5L22 34.8333"
        stroke="#101010"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M5.49999 22H9.16666"
        stroke="#101010"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}
