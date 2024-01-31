// Render a room page, which takes an id as a parameter, and can be accessed via a
// unique code or url using :id.
import { Link, useParams } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import { useEffect } from "react";
import useCrud from "../hooks/useCruds";

const Room = () => {
  const { id } = useParams();
  const { fetchData, dataCRUD, error, isLoading } = useCrud([], `/rooms/${id}`);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>Room code:{dataCRUD.room_code}</div>
      <div>Room name:{dataCRUD.room_name}</div>
      <Link to={PathConstants.HOME}>HOME</Link>
    </>
  );
};

export default Room;
