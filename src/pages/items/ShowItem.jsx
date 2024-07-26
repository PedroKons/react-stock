import useStock from '../../hooks/useStock';
import { useParams } from 'react-router-dom';
import DeleteButton from "../../components/DeleteButton";
import { Link } from "react-router-dom";

export default function ShowItem() {
  const { getItem } = useStock();
  const { id } = useParams();
  const item = getItem(id);
  
  return (
    <div className="item">
      <div className='item-capsula'>
        <h2>{item.name}</h2>
        <Link to={`/items/${item.id}/update`} className="button is-small">Atualizar</Link>
        <DeleteButton itemId={item.id} itemName={item.name} />
      </div>
      <div className="row">
        <span>Categoria: {item.category}</span>
        <span>Quantidade em estoque: {item.quantity}</span>
        <span>Preço: R$ {item.price}</span>
      </div>
      <div>
        <p className='description'>Descrição: {item.description}</p>
      </div>
      <div className="row">
        <p>Cadastrado em: {item.createdAt.toDateString()}</p>
        <p>Atualizado em: {item.updatedAt.toDateString()}</p>
      </div>
    </div>
  )
}
