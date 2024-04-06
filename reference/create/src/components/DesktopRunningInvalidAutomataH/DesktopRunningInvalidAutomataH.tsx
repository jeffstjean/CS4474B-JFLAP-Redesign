import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CreateBar } from './CreateBar/CreateBar.js';
import { DebugBarIcon } from './DebugBarIcon.js';
import classes from './DesktopRunningInvalidAutomataH.module.css';
import { FigmaIconsCrossDarkDefault } from './FigmaIconsCrossDarkDefault/FigmaIconsCrossDarkDefault.js';
import { FigmaIconsWarningFilledDarkDef } from './FigmaIconsWarningFilledDarkDef/FigmaIconsWarningFilledDarkDef.js';
import { Header } from './Header/Header.js';
import { InvalidAuotmata } from './InvalidAuotmata/InvalidAuotmata.js';
import { RunBarErrorMessage } from './RunBarErrorMessage/RunBarErrorMessage.js';
import { StateTransitionTable } from './StateTransitionTable/StateTransitionTable.js';
import { SvgnodeIcon } from './SvgnodeIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 117:1146 */
export const DesktopRunningInvalidAutomataH: FC<Props> = memo(function DesktopRunningInvalidAutomataH(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.bottomLeft}></div>
      <div className={classes.bottomRight}></div>
      <div className={classes.topRight}></div>
      <div className={classes.topLeft}></div>
      <CreateBar className={classes.createBar} />
      <div className={classes.runBar}>
        <div className={classes.debugBar}>
          <DebugBarIcon className={classes.icon2} />
        </div>
        <div className={classes.runAutomaton}>Run Automaton</div>
        <div className={classes.warningLabel}>
          <div className={classes.rectangle4}></div>
          <FigmaIconsWarningFilledDarkDef
            className={classes.figmaIconsWarningFilledDarkDef}
            swap={{
              svgNode: <SvgnodeIcon className={classes.icon} />,
            }}
          />
          <div className={classes.seeWarningsBelow}>See Warnings Below</div>
        </div>
        <StateTransitionTable
          className={classes.stateTransitionTable}
          classes={{
            topHeading: classes.topHeading,
            line1: classes.line1,
            line2: classes.line2,
            line8: classes.line8,
            line9: classes.line9,
            line10: classes.line10,
            line11: classes.line11,
            line3: classes.line3,
            line4: classes.line4,
            line5: classes.line5,
            line6: classes.line6,
            line7: classes.line7,
          }}
        />
        <div className={classes.rectangle42}></div>
        <div className={classes.rectangle5}></div>
        <RunBarErrorMessage />
        <RunBarErrorMessage
          className={classes.runBarErrorMessage}
          text={{
            stateMachineIsMissingAStarting: (
              <div className={classes.stateMachineIsMissingAStarting}>
                {' '}
                State machine is missing a starting node. Right click a node and select “Assign starting node”
              </div>
            ),
          }}
        />
        <div className={classes.rectangle6}></div>
        <div className={classes.q1}>q1</div>
      </div>
      <Header />
      <FigmaIconsCrossDarkDefault />
      <InvalidAuotmata className={classes.invalidAuotmata} />
    </div>
  );
});
