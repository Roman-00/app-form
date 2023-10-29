import { createBrowserRouter } from 'react-router-dom';

import { SignInPage } from '@/pages/signin/SignInPage';

const router = createBrowserRouter([
    {
        path:    '/',
        element: <SignInPage />,
    }
]);

export default router;
