// Render a room page, which takes an id as a parameter, and can be accessed via a
// unique code or url using :id.
import { Link, useParams } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import { useEffect, useState } from "react";
import useCrud from "../hooks/useCruds";

const Room = () => {
  const { id } = useParams();
  const { fetchData } = useCrud([], `/current-song?room_code=${id}`);
  const [dataToShow, setDataToShow] = useState("...loading");

  const populateData = (code, data) => {
    if (code === 200) {
      console.log("song", data.song_name);
      return (
        <div>
          <h1>Room</h1>
          <p>Room Code: {id}</p>
          <p>Current Song: {data.song_name}</p>
        </div>
      );
    }
    if (code === 204) {
      return <div>No songs currently being played</div>;
    }
    return <div>...error</div>;
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      const res = await fetchData();
      setDataToShow(populateData(res.status, res.data));
    };
    fetchDataAsync();
    // console.log("status", status);
  }, []);

  return (
    <>
      {dataToShow}

      <Link to={PathConstants.HOME}>HOME</Link>
    </>
  );
};

export default Room;
