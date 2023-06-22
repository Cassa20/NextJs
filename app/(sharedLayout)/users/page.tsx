const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {cache: 'no-store'})
    return res.json()
}

export default async function Users() {
    const listOfUsers = await getUsers()
  return (
    <>
        <div>List of Users : </div>
        {listOfUsers.map((d:any, i: any) => {
            return <h3 key={i}>{d.name}</h3>
        })}
    </>
  )
}
