import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import RoomEdit from "../components/RoomEdit";
import { useEffect } from "react";
import useCrud from "../hooks/useCruds";

const CreateRoom = () => {
  const { fetchData, dataCRUD, error, isLoading } = useCrud([], "/rooms");

  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <>
      <h1>CreateRoom</h1>
      <RoomEdit create />
      <Link to={PathConstants.HOME}>HOME</Link>
    </>
  );
};

export default CreateRoom;
