const getUser =async (id:any) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return res.json()
}

export default async function Page({params}:any) {
    const user = await getUser(params.id)
  return (
    <div style={{backgroundColor: 'lightsteelblue', padding: '10rem'}}>
    <h3>{user.username}</h3>
    <h4>{user.name}</h4>
    <p>{user.email}</p>
    </div>
  )
}
