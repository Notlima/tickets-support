import { randomUUID } from "node:crypto"

export function create({req, res}){
  const { equipment, description, username } = req.body

  const ticket = {
    id: randomUUID(),
    equipment,
    description,
    username,
    status: "open",
    create_at: new Date(),
    updated_at: new Date(),
  }
  return res.end(JSON.stringify(ticket))
}