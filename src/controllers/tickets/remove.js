export function remove({res, req, database}){
  const {id} = req.params

  database.delete("tickets", id)

  return res.end()
}