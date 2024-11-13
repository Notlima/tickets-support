import { randomUUID } from "node:crypto"

export function create({req, res, database}){
  const { equipment, description, username } = req.body

  const tickets = {
    id: randomUUID(),
    equipment,
    description,
    username,
    status: "open",
    create_at: new Date(),
    updated_at: new Date(),
  }

    database.insert("tickets", tickets)

  return res.writeHead(201).end(JSON.stringify(tickets))
}