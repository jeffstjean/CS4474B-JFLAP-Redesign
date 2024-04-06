import { memo, SVGProps } from 'react';

const Arrow5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 55 75' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M54.0246 74.7835L51.3292 56.4657L39.1522 68.7832L54.0246 74.7835ZM-1.05456 1.06673L45.0645 64.907L47.1737 62.7736L1.05456 -1.06673L-1.05456 1.06673Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow5Icon);
export { Memo as Arrow5Icon };
