import { memo, SVGProps } from 'react';

const Arrow3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 87 263' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M87 8.88441e-06L74.067 11.5212L90.5111 16.9609L87 8.88441e-06ZM1.4241 263.471L84.1843 13.288L81.3361 12.3459L-1.4241 262.529L1.4241 263.471Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow3Icon);
export { Memo as Arrow3Icon };
