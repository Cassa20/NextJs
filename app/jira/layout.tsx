import Link from "next/link"

const getPosts =async () => {
    const res =  await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-cache'})
    return res.json()
}


export default async function JiraLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const posts = await getPosts()
  return (
<>
<div style={{display: 'flex'}}>
    <div style={{display: 'flex', flexDirection: 'column', width: '20%'}}>
    {posts.map((d:any,i:any) => {
    return <Link key={i} href={`/jira/${d.id}`}>{d.username}</Link>
})}
</div>
<div>{children}</div>
</div>
</>
)
}
