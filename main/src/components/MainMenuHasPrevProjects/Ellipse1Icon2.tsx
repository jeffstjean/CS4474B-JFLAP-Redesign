import { memo, SVGProps } from 'react';

const Ellipse1Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={8.91916} cy={10.5541} rx={8.91916} ry={10.5541} fill='#9B59B6' stroke='black' strokeWidth={1.5} />
  </svg>
);

const Memo = memo(Ellipse1Icon2);
export { Memo as Ellipse1Icon2 };
