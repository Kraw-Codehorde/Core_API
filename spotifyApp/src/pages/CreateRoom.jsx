import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";

const CreateRoom = () => {
  return (
    <>
      <h1>CreateRoom</h1>
      <Link to={PathConstants.HOME}>HOME</Link>
    </>
  );
};

export default CreateRoom;
