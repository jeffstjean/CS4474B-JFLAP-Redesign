import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame4.module.css';

interface Props {
  className?: string;
}
/* @figmaId 160:1448 */
export const Frame4: FC<Props> = memo(function Frame4(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.image3}></div>
    </div>
  );
});
