import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Report_fill0_wght400_grad0_ops } from './Report_fill0_wght400_grad0_ops.js';
import classes from './RunBarErrorMessage.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    stateMachineIsMissingAStarting?: ReactNode;
  };
}
/* @figmaId 86:955 */
export const RunBarErrorMessage: FC<Props> = memo(function RunBarErrorMessage(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.report_FILL0_wght400_GRAD0_ops}>
        <Report_fill0_wght400_grad0_ops className={classes.icon} />
      </div>
      {props.text?.stateMachineIsMissingAStarting != null ? (
        props.text?.stateMachineIsMissingAStarting
      ) : (
        <div className={classes.stateMachineIsMissingAStarting}>
          {' '}
          State machine is missing a starting node. Right click a node and select “Assign starting node”
        </div>
      )}
    </div>
  );
});
