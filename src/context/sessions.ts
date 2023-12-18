import Cookies from "js-cookie";

/*
 * Session cookie data
 */
export const setSessionCookie = (session: any): void => {
  Cookies.remove("session");
  Cookies.set("session", JSON.stringify(session), { expires: 30 });
};

export const getSessionCookie = (): any | null => {
  const sessionCookie = Cookies.get("session");

  if (sessionCookie === undefined) {
    return null;
  } else {
    return JSON.parse(sessionCookie);
  }
};

export const destroySessionCookie = () => {
  Cookies.remove("session");
};