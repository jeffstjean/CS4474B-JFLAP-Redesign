import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './FigmaIconsWarningFilledDarkDef.module.css';
import { SvgnodeIcon } from './SvgnodeIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    svgNode?: ReactNode;
  };
}
/* @figmaId 65:547 */
export const FigmaIconsWarningFilledDarkDef: FC<Props> = memo(function FigmaIconsWarningFilledDarkDef(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.svgNode}>{props.swap?.svgNode || <SvgnodeIcon className={classes.icon} />}</div>
    </div>
  );
});
