import { Router } from "express";

import router from "./art";

type Prefix = "art";

type AppRouter = {
  prefix: Prefix;
  router: Router;
};

export const routers: AppRouter[] = [{ prefix: "art", router }];
