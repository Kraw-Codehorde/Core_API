// Render a room page, which takes an id as a parameter, and can be accessed via a
// unique code or url using :id.
import { useParams } from "react-router-dom";
import RoomEdit from "../components/RoomEdit";

const Room = () => {
  const { id } = useParams();
  return (
    <div>
      Room id:{id}
      <RoomEdit />
    </div>
  );
};

export default Room;
