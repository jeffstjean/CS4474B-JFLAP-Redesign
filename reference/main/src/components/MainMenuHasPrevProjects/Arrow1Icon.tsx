import { memo, SVGProps } from 'react';

const Arrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 82 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M81.0369 0L66.0369 -8.66025V8.66025L81.0369 0ZM0 1.5H67.5369V-1.5H0V1.5Z' fill='black' />
  </svg>
);

const Memo = memo(Arrow1Icon);
export { Memo as Arrow1Icon };
