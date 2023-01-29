export default function SolidityIco(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
  ) {
    return (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M20.477 2l-4.5 8h-9l4.5-8z" opacity={0.45} />
        <path d="M15.975 10h9l-4.5-8h-9z" opacity={0.6} />
        <path d="M11.477 18l4.5-8-4.5-8-4.5 8z" opacity={0.8} />
        <path d="M11.52 30l4.5-8h9l-4.5 8z" opacity={0.45} />
        <path d="M16.022 22h-9l4.5 8h9z" opacity={0.6} />
        <path d="M20.52 14l-4.5 8 4.5 8 4.5-8z" opacity={0.8} />
      </svg>
    );
  }