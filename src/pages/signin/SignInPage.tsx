import { FC } from 'react';
import cn from 'classnames';
import Layout from '@/layouts/Layout';
import { SignInForm } from '@/components/signin/Form';

import IUser from '@/assets/icon/user.svg';

import styles from './sign-in.module.scss';

export const SignInPage: FC = () => {
    return (
        <Layout>
            <div className={cn(styles['signin-page'])}>
                <div className={cn(styles['signin-page__logo-img'])}>
                    <img
                        src={IUser}
                        alt="Icon User"
                    />
                </div>

                <SignInForm />
            </div>
        </Layout>
    );
};
