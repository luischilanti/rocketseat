import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Luis" },
    { id: 2, name: "Beto" },
    { id: 3, name: "Alda" },
  ];

  return response.json(users);
};
