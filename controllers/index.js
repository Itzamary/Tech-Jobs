const router = require('express').Router();
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes.js');
const addJobsRoutes = require('./addJob-routes');
const searchJobRoutes = require('./searchJob-routes');

router.use('/job-search', searchJobRoutes);

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
const apiRoutes = require('./api');

router.use('/addJob', addJobsRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;