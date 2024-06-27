import './Breadcrum.css'
import arrow_icon from '../../Assets/breadcrum_arrow.png'
import { Link } from 'react-router-dom'
const Breadcrums = ({product}) => {
  const title = (product.category)[0].toUpperCase()+ (product.category).substring(1)
  return (
    <div className='breadcrum'>
      <Link to={'/'}>HOME</Link><img src={arrow_icon} alt="" />
      <Link to={'/'}>SHOP</Link><img src={arrow_icon} alt="" />
      <Link to={`/${title}s`}>{title}</Link> <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  )
}

export default Breadcrums