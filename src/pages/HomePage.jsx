import axios from "axios";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    const { data } = await axios(" https://jsonplaceholder.typicode.com/posts");
    setTodos(data);
  }

  useEffect(() => {
    getTodos();
  }, []);

  getTodos();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: "30px 50px 30px 50px",
        rowGap: "35px",
        columnGap: "25px",
      }}
      className="cards"
    >
      {todos.map((item) => (
        <div key={item.id} className="card-container">
          <div className="card">
            <div className="front-content">
              <p>News</p>
            </div>
            <div className="content">
              <p className="heading"> {item.title}</p>
              <p>{item.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    /* <h2 key={item.id}>
          {item.title} <p>{item.body}</p>
        </h2> */
  );
};

export default HomePage;
