// Render a room page, which takes an id as a parameter, and can be accessed via a
// unique code or url using :id.
import { Link, useParams } from "react-router-dom";
import PathConstants from "../routes/pathConstants";

const Room = () => {
  const { id } = useParams();
  return (
    <>
      <div>Room id:{id}</div>
      <Link to={PathConstants.HOME}>HOME</Link>
    </>
  );
};

export default Room;
