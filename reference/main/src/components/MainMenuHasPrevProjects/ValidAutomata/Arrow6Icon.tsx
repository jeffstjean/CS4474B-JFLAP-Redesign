import { memo, SVGProps } from 'react';

const Arrow6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 105 239' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M105.001 -1.3022e-05L91.0232 10.2287L106.87 17.2193L105.001 -1.3022e-05ZM1.3724 238.634L100.925 12.957L98.1798 11.7462L-1.3724 237.423L1.3724 238.634Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow6Icon);
export { Memo as Arrow6Icon };
