import { FaTrash } from 'react-icons/fa';
import PropTypes from "prop-types"; 
import useStock from '../hooks/useStock';
import { useNavigate } from 'react-router-dom';


DeleteButton.protoType = {
    itemName: PropTypes.string,
    itemId: PropTypes.number
}

// eslint-disable-next-line react/prop-types
export default function DeleteButton({ itemName, itemId }) {
  const { deleteItem } = useStock();
  const navigate = useNavigate();

    const handleDelete = () => {
        if (confirm(`Tem certeza que deseja excluir: ${itemName}`));
      deleteItem(itemId);
      navigate('/items');
    }

  return (
    <button className="btnDelete" onClick={handleDelete}>
        <FaTrash/>
    </button>
  )
}
