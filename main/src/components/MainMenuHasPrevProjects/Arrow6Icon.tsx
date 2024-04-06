import { memo, SVGProps } from 'react';

const Arrow6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 72' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M26.7577 -1.73561e-06L13.8408 10.0477L29.1953 18.0626L26.7577 -1.73561e-06ZM1.32974 72.4707L23.3717 13.3437L20.7123 11.9555L-1.32974 71.0824L1.32974 72.4707Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow6Icon);
export { Memo as Arrow6Icon };
