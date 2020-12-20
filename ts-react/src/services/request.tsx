import AuthType from "../model/authTypes";

const request = (path: string, method: string, body: AuthType) => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://coffeepluscardspdx.herokuapp.com/api/v1/${path}`,
    {
      method,
      headers: {
        "Content-type": "application/json",
      },
      // credentials: "include",
      body: body && JSON.stringify(body),
    }
  )
    .then((res) => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if (!ok) throw json;

      return json;
    });
};

export default request;