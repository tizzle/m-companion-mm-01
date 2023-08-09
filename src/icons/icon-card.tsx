export interface IconProps {
  className?: string;
}

const CardIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.65 8.3C4.90442 8.3 4.3 8.90442 4.3 9.65V23.35C4.3 24.0956 4.90442 24.7 5.65 24.7H26.35C27.0956 24.7 27.7 24.0956 27.7 23.35V9.65C27.7 8.90442 27.0956 8.3 26.35 8.3H5.65ZM3 9.65C3 8.18645 4.18645 7 5.65 7H26.35C27.8136 7 29 8.18645 29 9.65V23.35C29 24.8136 27.8136 26 26.35 26H5.65C4.18645 26 3 24.8136 3 23.35V9.65Z"
        fill="currentColor"
      />
      <path
        d="M11 16C12.1046 16 13 15.1046 13 14C13 12.8954 12.1046 12 11 12C9.89543 12 9 12.8954 9 14C9 15.1046 9.89543 16 11 16Z"
        fill="currentColor"
      />
      <path
        d="M15 21.0217H7V19.4489C7 18.2467 8.24812 17.2686 9.78224 17.2686H12.2178C13.7519 17.2686 15 18.2467 15 19.4489V21.0217Z"
        fill="currentColor"
      />
      <path d="M18 13H25V14.4H18V13Z" fill="currentColor" />
      <path d="M18 17H25V18.4H18V17Z" fill="currentColor" />
    </svg>
  );
};

export default CardIcon;
