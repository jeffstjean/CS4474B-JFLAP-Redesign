import { memo, SVGProps } from 'react';

const Arrow3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 80' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M22.1705 1.64196e-06L10.0676 11.2894L26.1964 17.6029L22.1705 1.64196e-06ZM1.3968 79.8535L19.9327 13.5483L17.139 12.4548L-1.3968 78.7599L1.3968 79.8535Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow3Icon);
export { Memo as Arrow3Icon };
