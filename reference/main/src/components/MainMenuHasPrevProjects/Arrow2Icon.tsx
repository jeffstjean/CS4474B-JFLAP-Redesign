import { memo, SVGProps } from 'react';

const Arrow2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 79' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M-2.24782e-06 78.1005L12.0817 66.7812L-4.06403 60.5111L-2.24782e-06 78.1005ZM20.2625 -0.54301L2.2097 64.5486L5.00623 65.6346L23.0591 0.543008L20.2625 -0.54301Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow2Icon);
export { Memo as Arrow2Icon };
