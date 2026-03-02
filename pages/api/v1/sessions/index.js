import { createRouter } from "next-connect";
import * as cookie from "cookie";
import controller from "infra/controller.js";
import authentication from "models/authentication.js";
import session from "models/session.js";

const router = createRouter();

router.post(postHandler);

export default router.handler(controller.errorHandlers);

async function postHandler(request, response) {
  const userInputValues = request.body;

  const authenticateUser = await authentication.getAuthenticatedUser(
    userInputValues.email,
    userInputValues.password,
  );

  const newSession = await session.create(authenticateUser.id);

  const setCookie = cookie.serialize("session_id", newSession.token, {
    path: "/",
    //expires: new Date(newSession.expires_at),
    maxAge: session.EXPIRATION_IN_MILLISECONDS / 1000,
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
  });

  // Path=/ - permite que o cookie esteja disponível para para todas
  // as rotas a partir da raiz.
  //response.setHeader("Set-Cookie", `session_id=${newSession.token}; Path=/`);
  response.setHeader("Set-Cookie", setCookie);

  return response.status(201).json(newSession);
}
