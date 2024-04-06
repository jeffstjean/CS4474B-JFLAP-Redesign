import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Header_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    menu?: string;
    root?: string;
  };
}
/* @figmaId 55:31 */
export const Header_Property1Default: FC<Props> = memo(function Header_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.background}></div>
      <div className={classes.myProject}>My Project</div>
      <div className={classes.saved}>Saved</div>
      <div className={`${props.classes?.menu || ''} ${classes.menu}`}>
        <div className={classes.file}>File</div>
        <div className={classes.edit}>Edit</div>
        <div className={classes.view}>View</div>
        <div className={classes.tools}>Tools</div>
        <div className={classes.help}>Help</div>
      </div>
    </div>
  );
});
