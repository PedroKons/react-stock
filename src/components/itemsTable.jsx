
import { Link } from "react-router-dom";
import useStock from "../hooks/useStock"
import DeleteButton from "./DeleteButton";


export default function itemsTable() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {items} = useStock()

    return (
        <div className="itemsTable">
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Em Estoque</th>
                    <th>Categoria</th>
                    <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity} unid.</td>
                        <td>{item.category}</td>
                        <td className="tdModific">
                            <Link to={`/items/${item.id}`} className="button  is-small">
                                Ver
                            </Link>
                            <Link to={`/items/${item.id}/update`} className="button is-small">
                                Atualizar
                            </Link>
                                <DeleteButton itemName={item.name} itemId={item.id} />        
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}
