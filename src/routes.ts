import express from "express";
import PagesController from './controllers/PagesController';
import PostsController from './controllers/PostsController';

const routes = express.Router();
const pagesController = new PagesController();
const postsController = new PostsController();

routes.get("/pages", pagesController.index);
routes.post("/posts", postsController.index);

export default routes;