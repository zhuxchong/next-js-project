const Koa = require("koa");
const next = require("next");
const Router = require("koa-router");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const Redis = require("ioredis");

// app.prepare().then(r => {
// const server = new Koa();
// const router = new Router();
// router.get("/test/:id", ctx => {
//   //const id = ctx.params.id;
//   ctx.body = { success: true };
//   ctx.set("Contebt-type", "application/json");
// });
// // const redis=new Redis({
// //   port: 6379
// // });
// server.use(async (ctx, next) => {
//   //   const path = ctx.path;
//   //   ctx.body = `<span>${path}</span>`;
//   await next();
// });
// server.use(router.routes());
// server.use(async (ctx, next) => {
//   await handle(ctx.req, ctx.res);
//   ctx.respond = false;
// });
app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  router.get("/a/:id", async ctx => {
    const id = ctx.params.id;
    await handle(ctx.req, ctx.res, {
      pathname: "/a",
      query: { id }
    });
    ctx.respond = false;
  });
  server.use(router.routes());
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.listen(3000, () => {
    console.log("3000 listening ");
  });
});

// });
