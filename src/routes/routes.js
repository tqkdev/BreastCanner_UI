import config from '../config';

// Layouts

// Pages

import Home from '../pages/Home/Home';
import Predict from '../pages/Predict/Predict';
import BreastCanner from '../pages/BreastCanner/BreastCanner';
import Technology from '../pages/Technology/Technology';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.predict, component: Predict },
    { path: config.routes.breastcanner, component: BreastCanner },
    { path: config.routes.technology, component: Technology },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
