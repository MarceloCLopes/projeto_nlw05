import { Router } from "express";
import { MessageController } from "./src/controllers/MessageController";
import { SettingsController } from "./src/controllers/SettingsController";
import { UsersController } from "./src/controllers/UsersController";

const routes = Router();

/**
 * GET = Busca
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
 */

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessageController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)

export {routes};