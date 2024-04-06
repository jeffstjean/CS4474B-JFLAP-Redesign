import { memo, SVGProps } from 'react';

const Ellipse1Icon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={35} cy={35} r={35} fill='#9B59B6' stroke='black' strokeWidth={1.5} />
  </svg>
);

const Memo = memo(Ellipse1Icon3);
export { Memo as Ellipse1Icon3 };
