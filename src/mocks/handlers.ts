import { rest } from "msw";
export const handlers = [
  // Handles a POST /login request
  rest.get("/login", (_, res, ctx) => res(ctx.json({}))),
];
