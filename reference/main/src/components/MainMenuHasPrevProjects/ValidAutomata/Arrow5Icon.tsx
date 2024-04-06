import { memo, SVGProps } from 'react';

const Arrow5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 212 248' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M212 248L208.836 230.971L195.67 242.225L212 248ZM-1.14018 0.974672L202.088 238.713L204.368 236.764L1.14018 -0.974672L-1.14018 0.974672Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow5Icon);
export { Memo as Arrow5Icon };
