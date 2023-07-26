import Keycloak from "keycloak-js";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

// const keycloak = new Keycloak({
//   url: "http://localhost:8080/auth",
//   realm: "Keycloak-react-auth",
//   clientId: "React-auth",
// });
const client = new Keycloak({
  url: "http://10.2.2.141:8020",
  realm: "react-auth",
  clientId: "react-auth",
});
export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(null as any);
  const isRun = useRef(false);

  useLayoutEffect(() => {
    if (isRun.current) {
      return;
    }

    isRun.current = true;

    client.init({ onLoad: "login-required" }).then((res: any) => {
      setIsLogin(res);
      setToken(client.token);
    });
  }, []);

  return [isLogin, token];
  // return client;
}
