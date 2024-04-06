import { memo, SVGProps } from 'react';

const Arrow4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 77 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M76.7048 7.48326e-08L61.4733 -8.06761L61.9594 9.24608L76.7048 7.48326e-08ZM0.0420974 4.51487L63.2573 2.02972L63.1731 -0.969098L-0.0420974 1.51606L0.0420974 4.51487Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow4Icon);
export { Memo as Arrow4Icon };
