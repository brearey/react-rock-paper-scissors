import { NavLink } from 'react-router'
import { Element } from '../../components/paper/Element'
import { ROUTES } from '../../util/constants/routes.ts'
import paperAsset from '../../assets/paper.webp'
import scissorAsset from '../../assets/scissor.webp'
import rockAsset from '../../assets/rock.webp'

export function MainPage() {
  return (
    <>
        <h1>Select your element</h1>
        <div style={{display: 'flex'}}>
            <NavLink to={ ROUTES.GAME }>
                <Element children={<img src={paperAsset} alt="paper"/>} />
            </NavLink>
            <NavLink to={ ROUTES.GAME }>
                <Element children={<img src={scissorAsset} alt="scissor"/>} />
            </NavLink>
            <NavLink to={ ROUTES.GAME }>
                <Element children={<img src={rockAsset} alt="rock"/>} />
            </NavLink>
        </div>
    </>
  )
}