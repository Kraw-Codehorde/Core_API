import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import RoomEdit from "../components/RoomEdit";

const CreateRoom = () => {
  return (
    <>
      <h1>CreateRoom</h1>
      <RoomEdit create />
      <Link to={PathConstants.HOME}>HOME</Link>
    </>
  );
};

export default CreateRoom;
