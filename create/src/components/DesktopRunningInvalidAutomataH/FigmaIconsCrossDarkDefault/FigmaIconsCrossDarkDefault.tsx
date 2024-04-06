import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './FigmaIconsCrossDarkDefault.module.css';
import { SvgnodeIcon } from './SvgnodeIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 58:39 */
export const FigmaIconsCrossDarkDefault: FC<Props> = memo(function FigmaIconsCrossDarkDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.svgNode}>
        <SvgnodeIcon className={classes.icon} />
      </div>
    </div>
  );
});
