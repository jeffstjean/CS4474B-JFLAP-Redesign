import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Header_Property1Default } from '../Header_Property1Default/Header_Property1Default.js';
import classes from './Header.module.css';

interface Props {
  className?: string;
}
/* @figmaId 65:222 */
export const Header: FC<Props> = memo(function Header(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Header_Property1Default className={classes.header} classes={{ menu: classes.menu }} />
    </div>
  );
});
