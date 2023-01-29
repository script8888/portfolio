export default function ArrowSide(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
  ) {
    return (
      <svg
        width={23}
        height={23}
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M20.567 2.217L2 20.783M20.567 2.217V16.72m0-14.503H6.063"
          stroke="#C3C3C3"
          strokeWidth={3.25539}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }