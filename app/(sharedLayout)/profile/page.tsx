import Link from "next/link"

export default function Dashboard() {
  return (
    <>
    <h3>This is a Profile Main Page Content rendered from app/profile !</h3>
      <Link href='/screens'>Go to Screens</Link>
    </>
  )
}
