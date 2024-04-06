import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Arrow1Icon } from './Arrow1Icon.js';
import { Arrow2Icon } from './Arrow2Icon.js';
import { Arrow3Icon } from './Arrow3Icon.js';
import { Arrow4Icon } from './Arrow4Icon.js';
import { Arrow6Icon } from './Arrow6Icon.js';
import { Ellipse1Icon2 } from './Ellipse1Icon2.js';
import { Ellipse1Icon3 } from './Ellipse1Icon3.js';
import { Ellipse1Icon4 } from './Ellipse1Icon4.js';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import classes from './InvalidAuotmata.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 65:330 */
export const InvalidAuotmata: FC<Props> = memo(function InvalidAuotmata(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon} />
      </div>
      <div className={classes.q1}>q1</div>
      <div className={classes.ellipse12}>
        <Ellipse1Icon2 className={classes.icon2} />
      </div>
      <div className={classes.q4}>q4</div>
      <div className={classes.ellipse13}>
        <Ellipse1Icon3 className={classes.icon3} />
      </div>
      <div className={classes.q3}>q3</div>
      <div className={classes.ellipse14}>
        <Ellipse1Icon4 className={classes.icon4} />
      </div>
      <div className={classes.q2}>q2</div>
      <div className={classes.arrow1}>
        <Arrow1Icon className={classes.icon5} />
      </div>
      <div className={classes.a}>a</div>
      <div className={classes.d}>d</div>
      <div className={classes.arrow4}>
        <Arrow4Icon className={classes.icon6} />
      </div>
      <div className={classes.f}>f</div>
      <div className={classes.arrow6}>
        <Arrow6Icon className={classes.icon7} />
      </div>
      <div className={classes.c}>c</div>
      <div className={classes.arrow2}>
        <Arrow2Icon className={classes.icon8} />
      </div>
      <div className={classes.b}>b</div>
      <div className={classes.arrow3}>
        <Arrow3Icon className={classes.icon9} />
      </div>
    </div>
  );
});
