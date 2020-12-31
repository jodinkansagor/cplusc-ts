import React, { useState } from "react";
import AuthType from "../model/authTypes";
import request from "../services/request";

const useAuth = (type: string) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setEmail(email);
    setPassword(password);
    const body: AuthType = {
      email,
      password,
    };
    if (type === "signup") {
      setUsername(username);
      body.username = username;
    }
    const path = type === "signup" ? "auth/signup" : "auth/login";
    const method = "POST";
    request(path, method, body).then((res) => {
      console.log(res);
    });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    handleSubmit,
  };
};

export default useAuth;
