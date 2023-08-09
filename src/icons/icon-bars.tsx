export interface IconProps {
  className?: string;
}

const BarsIcon = ({ className }: IconProps) => {
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
        d="M5.7 8H26.3C26.6866 8 27 8.3134 27 8.7C27 9.0866 26.6866 9.4 26.3 9.4H5.7C5.3134 9.4 5 9.0866 5 8.7C5 8.3134 5.3134 8 5.7 8ZM5.7 15H26.3C26.6866 15 27 15.3134 27 15.7C27 16.0866 26.6866 16.4 26.3 16.4H5.7C5.3134 16.4 5 16.0866 5 15.7C5 15.3134 5.3134 15 5.7 15ZM5.7 22H26.3C26.6866 22 27 22.3134 27 22.7C27 23.0866 26.6866 23.4 26.3 23.4H5.7C5.3134 23.4 5 23.0866 5 22.7C5 22.3134 5.3134 22 5.7 22Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BarsIcon;
