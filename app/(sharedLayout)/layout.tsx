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
        <div style={{backgroundColor: 'lightseagreen'}}>
          {children}
        </div>
        <footer>
          <h2>This is Footer Section !</h2>
        </footer>
    </>
  )
}
