import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './StateTransitionTable.module.css';

interface Props {
  className?: string;
  classes?: {
    topHeading?: string;
    line1?: string;
    line2?: string;
    line8?: string;
    line9?: string;
    line10?: string;
    line11?: string;
    line3?: string;
    line4?: string;
    line5?: string;
    line6?: string;
    line7?: string;
    root?: string;
  };
}
/* @figmaId 86:724 */
export const StateTransitionTable: FC<Props> = memo(function StateTransitionTable(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.background}></div>
      <div className={classes.sideHeading}></div>
      <div className={`${props.classes?.topHeading || ''} ${classes.topHeading}`}></div>
      <div className={classes.unnamed}>δ</div>
      <div className={classes.q1}>q1</div>
      <div className={classes.q12}>q1</div>
      <div className={classes.q13}>q1</div>
      <div className={classes.q2}>q2</div>
      <div className={classes.q22}>q2</div>
      <div className={classes.q23}>q2</div>
      <div className={classes.unnamed2}>-</div>
      <div className={classes.unnamed3}>-</div>
      <div className={classes.unnamed4}>-</div>
      <div className={classes.unnamed5}>-</div>
      <div className={classes.unnamed6}>-</div>
      <div className={classes.unnamed7}>-</div>
      <div className={classes.unnamed8}>-</div>
      <div className={classes.unnamed9}>-</div>
      <div className={classes.unnamed10}>-</div>
      <div className={classes.unnamed11}>-</div>
      <div className={classes.unnamed12}>-</div>
      <div className={classes.unnamed13}>-</div>
      <div className={classes.unnamed14}>-</div>
      <div className={classes.unnamed15}>-</div>
      <div className={classes.unnamed16}>-</div>
      <div className={classes.unnamed17}>-</div>
      <div className={classes.unnamed18}>-</div>
      <div className={classes.unnamed19}>-</div>
      <div className={classes.q3}>q3</div>
      <div className={classes.q32}>q3</div>
      <div className={classes.q33}>q3</div>
      <div className={classes.q4}>q4</div>
      <div className={classes.q42}>q4</div>
      <div className={classes.a}>a</div>
      <div className={classes.b}>b</div>
      <div className={classes.c}>c</div>
      <div className={classes.d}>d</div>
      <div className={classes.e}>e</div>
      <div className={classes.f}>f</div>
      <div className={`${props.classes?.line1 || ''} ${classes.line1}`}></div>
      <div className={`${props.classes?.line2 || ''} ${classes.line2}`}></div>
      <div className={`${props.classes?.line8 || ''} ${classes.line8}`}></div>
      <div className={`${props.classes?.line9 || ''} ${classes.line9}`}></div>
      <div className={`${props.classes?.line10 || ''} ${classes.line10}`}></div>
      <div className={`${props.classes?.line11 || ''} ${classes.line11}`}></div>
      <div className={`${props.classes?.line3 || ''} ${classes.line3}`}></div>
      <div className={`${props.classes?.line4 || ''} ${classes.line4}`}></div>
      <div className={`${props.classes?.line5 || ''} ${classes.line5}`}></div>
      <div className={`${props.classes?.line6 || ''} ${classes.line6}`}></div>
      <div className={`${props.classes?.line7 || ''} ${classes.line7}`}></div>
    </div>
  );
});
