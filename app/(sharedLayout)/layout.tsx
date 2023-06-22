export default function SharedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <header>
          <h2>This is Header Section !</h2>
        </header>
        <h3>Implemented POC topic - MultiLayout in NextJs</h3>
        <div style={{backgroundColor: 'lightskyblue'}}>
          {children}
        </div>
        <footer>
          <h2>This is Footer Section !</h2>
        </footer>
    </>
  )
}
