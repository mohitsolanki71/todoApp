import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detail.css";

export const Details = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const { id } = useParams();

  const getData = () => {
    fetch(`http://localhost:3004/todos/${id}`)
      .then((d) => d.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  };
  return (
    <div id="detailContent">
      <p>
        📌<b>Title: </b> {data.title}
      </p>
      <p>
        📌<b>Discription: </b>
        {data.details}
      </p>
      <p>
        📌<b>Status: </b>
        {data.status ? "Done" : "Not Done"}
      </p>
    </div>
  );
};
