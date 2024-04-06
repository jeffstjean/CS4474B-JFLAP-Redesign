import { memo, SVGProps } from 'react';

const Arrow2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 85 259' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M-6.56988e-06 259L12.9058 247.448L-3.55113 242.047L-6.56988e-06 259ZM83.5748 -0.467733L2.78438 245.705L5.6348 246.641L86.4252 0.467733L83.5748 -0.467733Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow2Icon);
export { Memo as Arrow2Icon };
