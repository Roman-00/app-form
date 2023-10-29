import React, { FC } from 'react';
import cn from 'classnames';

import IEmail from '@/assets/icon/email.svg';
import IPassword from '@/assets/icon/password.svg';
import IEye from '@/assets/icon/eye.svg';
import IEyeOff from '@/assets/icon/eye-off.svg';

import styles from './form.module.scss';

export const SignInForm: FC = () => {
    const [isShow, setIsShow] = React.useState(false);

    /**
     * Показать/скрыть пароль
     */
    const toggleShowPassword = () => {
        setIsShow(!isShow);
    };

    return (
        <form className={cn(styles['signin-form'])}>
            <h3 className={cn(styles['signin-form__title'])}>
                Sign In
            </h3>

            <p className={cn(styles['signin-form__desc'])}>
                Enter you credentials to access your account.
            </p>

            <div className={cn(styles['signin-form__inp-group'])}>
                <input
                    type="text"
                    className={cn(styles['signin-form__inp'])}
                    placeholder="Enter your Email"
                />

                <div className={cn(styles['signin-form__inp-img'])}>
                    <img
                        src={IEmail}
                        alt="Icon Email"
                    />
                </div>
            </div>

            <div className={cn(styles['signin-form__inp-group'])}>
                <input
                    type={isShow ? 'text' : 'password'}
                    className={cn(styles['signin-form__inp'])}
                    placeholder="Enter your Password"
                />

                <div className={cn(styles['signin-form__inp-img'])}>
                    <img
                        src={IPassword}
                        alt="Icon Password"
                    />
                </div>

                <div
                    className={cn(styles['signin-form__inp-img-eye'])}
                    onClick={toggleShowPassword}
                >
                    <img
                        src={isShow ? IEyeOff : IEye}
                        alt="Icon Eye"
                    />
                </div>
            </div>

            <button
                type="submit"
                className={cn(styles['signin-form__btn-submit'])}
            >
                Sign In
            </button>
        </form>
    );
};
