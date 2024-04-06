import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './CreateBar.module.css';
import { IconsIcon } from './IconsIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 54:2 */
export const CreateBar: FC<Props> = memo(function CreateBar(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.materialSymbolsRedo}></div>
      <div className={classes.background}></div>
      <div className={classes.icons}>
        <IconsIcon className={classes.icon} />
      </div>
    </div>
  );
});
