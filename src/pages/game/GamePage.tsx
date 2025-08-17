import { useParams } from 'react-router'

export function GamePage() {
    const { elementType } = useParams()
  return (
    <>
        <h1>Game page. Your choice is {elementType}</h1>
    </>
  )
}