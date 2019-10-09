
import { GetRecentPosts } from "./GetRecentPosts";
import { postRepo, memberRepo } from "../../../repos";
import { GetRecentPostsController } from "./GetRecentPostsController";

const getRecentPosts = new GetRecentPosts(postRepo, memberRepo);
const getRecentPostsController = new GetRecentPostsController(
  getRecentPosts
)

export {
  getRecentPosts,
  getRecentPostsController
}