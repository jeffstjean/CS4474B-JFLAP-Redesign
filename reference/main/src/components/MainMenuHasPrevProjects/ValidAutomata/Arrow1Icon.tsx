import { memo, SVGProps } from 'react';

const Arrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 318 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M318 0L303 -8.66025V8.66025L318 0ZM0 1.5H304.5V-1.5H0V1.5Z' fill='black' />
  </svg>
);

const Memo = memo(Arrow1Icon);
export { Memo as Arrow1Icon };
