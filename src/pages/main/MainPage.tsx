import { Element } from '../../components/paper/Element'
import paperAsset from '../../assets/paper.webp'
import scissorAsset from '../../assets/scissor.webp'
import rockAsset from '../../assets/rock.webp'

export function MainPage() {
  return (
    <>
        <h1>Select your element</h1>
        <div style={{display: 'flex'}}>
            <Element children={<img src={paperAsset} alt="paper"/>} />
            <Element children={<img src={scissorAsset} alt="scissor"/>} />
            <Element children={<img src={rockAsset} alt="rock"/>} />
        </div>
    </>
  )
}