import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './layout.module.scss';

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={cn(styles['layout-empty'])}>
            { children }
        </div>
    );
};

export default Layout;
