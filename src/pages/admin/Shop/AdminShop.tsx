import { useParams } from "react-router-dom";


const AdminShop = () => {
  const { id } = useParams<{ id: string }>();

    return (
        <div>
          {id}
        </div>
    )
}
export default AdminShop