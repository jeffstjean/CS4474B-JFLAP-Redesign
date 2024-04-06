import { memo, SVGProps } from 'react';

const Arrow4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 301 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M301 -6.02205e-07L285.721 -8.15742L286.296 9.15354L301 -6.02205e-07ZM0.0498064 11.4992L287.557 1.94743L287.458 -1.05092L-0.0498064 8.50083L0.0498064 11.4992Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow4Icon);
export { Memo as Arrow4Icon };
