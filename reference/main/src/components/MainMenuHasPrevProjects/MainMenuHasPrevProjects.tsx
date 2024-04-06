import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
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
import { Frame4 } from './Frame4/Frame4.js';
import classes from './MainMenuHasPrevProjects.module.css';
import { ValidAutomata } from './ValidAutomata/ValidAutomata.js';

interface Props {
  className?: string;
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
/* @figmaId 138:2558 */
export const MainMenuHasPrevProjects: FC<Props> = memo(function MainMenuHasPrevProjects(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.background}></div>
      <div className={classes.header}>
        <div className={classes.header2}>
          <div className={classes.background2}></div>
          <div className={classes.jFLAP}>JFLAP</div>
          <div className={classes.menu}>
            <div className={classes.file}>File</div>
            <div className={classes.edit}>Edit</div>
            <div className={classes.view}>View</div>
            <div className={classes.tools}>Tools</div>
            <div className={classes.help}>Help</div>
          </div>
        </div>
        <div className={classes.line12}></div>
      </div>
      <div className={classes.frame2}>
        <button className={classes.button}>
          <div className={classes.import}>Import...</div>
        </button>
        <button className={classes.button2}>
          <div className={classes.more}>More...</div>
        </button>
        <div className={classes.newProject}>New Project</div>
        <div className={classes.yourProjects}>
          <div className={classes.textBlock}>Your Projects</div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
        </div>
        <div className={classes.frame3}>
          <div className={classes.image6}></div>
          <ValidAutomata
            className={classes.validAutomata}
            swap={{
              ellipse1: <Ellipse1Icon className={classes.icon} />,
              ellipse12: <Ellipse1Icon2 className={classes.icon2} />,
              ellipse13: <Ellipse1Icon3 className={classes.icon3} />,
              ellipse14: <Ellipse1Icon4 className={classes.icon4} />,
              arrow1: <Arrow1Icon className={classes.icon5} />,
              arrow4: <Arrow4Icon className={classes.icon6} />,
              arrow5: <Arrow5Icon className={classes.icon7} />,
              arrow6: <Arrow6Icon className={classes.icon8} />,
              arrow2: <Arrow2Icon className={classes.icon9} />,
              arrow3: <Arrow3Icon className={classes.icon10} />,
            }}
            hide={{
              q1: true,
              q4: true,
              q3: true,
              q2: true,
              a: true,
              d: true,
              e: true,
              f: true,
              c: true,
              b: true,
            }}
          />
        </div>
        <Frame4 />
        <div className={classes.frame5}>
          <div className={classes.image4}></div>
        </div>
        <div className={classes.frame6}>
          <div className={classes.image5}></div>
        </div>
      </div>
    </div>
  );
});
