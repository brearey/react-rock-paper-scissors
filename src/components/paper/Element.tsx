import type { ReactNode } from 'react'

import './element.css'

export function Element({ children }: {children: ReactNode}) {
  return (
    <>
        <div className='game-element'>
            {children}
        </div>
    </>
  )
}