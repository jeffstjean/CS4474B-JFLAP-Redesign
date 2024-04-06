import { memo, SVGProps } from 'react';

const SvgnodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 73 73' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M43.1455 40.6549L59.5132 24.2876L62.004 26.7784L45.6363 43.1457L62.004 59.5134L59.5132 62.0042L43.1455 45.6369L26.7781 62.0042L24.2873 59.5134L40.6547 43.1457L24.2873 26.7787L26.7781 24.2879L43.1455 40.6549Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(SvgnodeIcon);
export { Memo as SvgnodeIcon };
