import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Arrow1Icon } from './Arrow1Icon.js';
import { Arrow2Icon } from './Arrow2Icon.js';
import { Arrow3Icon } from './Arrow3Icon.js';
import { Arrow4Icon } from './Arrow4Icon.js';
import { Arrow5Icon } from './Arrow5Icon.js';
import { Arrow6Icon } from './Arrow6Icon.js';
import { Ellipse1Icon2 } from './Ellipse1Icon2.js';
import { Ellipse1Icon3 } from './Ellipse1Icon3.js';
import { Ellipse1Icon4 } from './Ellipse1Icon4.js';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import classes from './ValidAutomata.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    ellipse1?: ReactNode;
    ellipse12?: ReactNode;
    ellipse13?: ReactNode;
    ellipse14?: ReactNode;
    arrow1?: ReactNode;
    arrow4?: ReactNode;
    arrow5?: ReactNode;
    arrow6?: ReactNode;
    arrow2?: ReactNode;
    arrow3?: ReactNode;
  };
  hide?: {
    q1?: boolean;
    q4?: boolean;
    q3?: boolean;
    q2?: boolean;
    a?: boolean;
    d?: boolean;
    e?: boolean;
    f?: boolean;
    c?: boolean;
    b?: boolean;
  };
}
/* @figmaId 65:329 */
export const ValidAutomata: FC<Props> = memo(function ValidAutomata(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse1}>{props.swap?.ellipse1 || <Ellipse1Icon className={classes.icon} />}</div>
      {!props.hide?.q1 && <div className={classes.q1}>q1</div>}
      <div className={classes.ellipse12}>{props.swap?.ellipse12 || <Ellipse1Icon2 className={classes.icon2} />}</div>
      {!props.hide?.q4 && <div className={classes.q4}>q4</div>}
      <div className={classes.ellipse13}>{props.swap?.ellipse13 || <Ellipse1Icon3 className={classes.icon3} />}</div>
      {!props.hide?.q3 && <div className={classes.q3}>q3</div>}
      <div className={classes.ellipse14}>{props.swap?.ellipse14 || <Ellipse1Icon4 className={classes.icon4} />}</div>
      {!props.hide?.q2 && <div className={classes.q2}>q2</div>}
      <div className={classes.arrow1}>{props.swap?.arrow1 || <Arrow1Icon className={classes.icon5} />}</div>
      {!props.hide?.a && <div className={classes.a}>a</div>}
      {!props.hide?.d && <div className={classes.d}>d</div>}
      <div className={classes.arrow4}>{props.swap?.arrow4 || <Arrow4Icon className={classes.icon6} />}</div>
      {!props.hide?.e && <div className={classes.e}>e</div>}
      <div className={classes.arrow5}>{props.swap?.arrow5 || <Arrow5Icon className={classes.icon7} />}</div>
      {!props.hide?.f && <div className={classes.f}>f</div>}
      <div className={classes.arrow6}>{props.swap?.arrow6 || <Arrow6Icon className={classes.icon8} />}</div>
      {!props.hide?.c && <div className={classes.c}>c</div>}
      <div className={classes.arrow2}>{props.swap?.arrow2 || <Arrow2Icon className={classes.icon9} />}</div>
      {!props.hide?.b && <div className={classes.b}>b</div>}
      <div className={classes.arrow3}>{props.swap?.arrow3 || <Arrow3Icon className={classes.icon10} />}</div>
    </div>
  );
});
