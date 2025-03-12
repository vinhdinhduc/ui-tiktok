import Home from '~/Page/Home';
import Following from '~/Page/Following';
import Profile from '~/Page/Profile';
import Search from '~/Page/Search';
import Upload from '~/Page/Upload';
import { HeaderOnly } from '~/layouts/';
import config from '../config';
import Live from '~/Page/Live';
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    { path: config.routes.Live, component: Live },
];

const privateRoute = [];
export { privateRoute, publicRoutes };
