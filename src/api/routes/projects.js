import express from 'express';
import projectsModel from '../models/projects';

const router = express.Router();

router.get('/', (req, res) => {
  projectsModel.find().then(projects => res.json({projects}));
});

router.get('/1', (req, res) => {
  projectsModel.findOne({title: 'Project 1'}).then(project => res.json({project}));
});

export default router;