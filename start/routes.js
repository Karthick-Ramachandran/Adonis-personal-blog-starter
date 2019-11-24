"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");
Route.get("/register", ({ view }) => {
  return view.render("register");
});

Route.get("/login", ({ view }) => {
  return view.render("login");
});
