import { Link } from 'react-router'
import { Element } from '../../components/paper/Element'
import { ROUTES } from '../../util/constants/routes.ts'
import { ElementType } from '../../util/constants/element-type.ts'

import paperAsset from '../../assets/paper.webp'
import scissorAsset from '../../assets/scissor.webp'
import rockAsset from '../../assets/rock.webp'

export function MainPage() {
  return (
    <>
        <h1>Select your element</h1>
        <div style={{display: 'flex'}}>
            <Link to={ `${ROUTES.GAME}/${ElementType.ROCK}` }>
                <Element children={<img src={rockAsset} alt="rock"/>} />
            </Link>
            <Link to={ `${ROUTES.GAME}/${ElementType.SCISSOR}` }>
                <Element children={<img src={scissorAsset} alt="scissor"/>} />
            </Link>
            <Link to={ `${ROUTES.GAME}/${ElementType.PAPER}` }>
                <Element children={<img src={paperAsset} alt="paper"/>} />
            </Link>
        </div>
    </>
  )
}