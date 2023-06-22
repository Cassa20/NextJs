import Link from 'next/link'

export default function DashboardLayout({
  children,
  city,
  country,
}: {
  children: React.ReactNode,
  city: React.ReactNode,
  country: React.ReactNode,
}) {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{backgroundColor: 'lightsalmon', padding: '8rem'}}>{children}</div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{backgroundColor: 'lightskyblue', padding: '12rem'}}>{city}</div>
            <div style={{backgroundColor: 'lightslategray', padding: '12rem'}}>{country}</div>
        </div>
    </div>
    </>
  )
}
