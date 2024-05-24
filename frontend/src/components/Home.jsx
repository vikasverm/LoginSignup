import  { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Home = () => {
  const [table, setTable] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(result => setTable(result.data));
  }, []);

  return (
    <div style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <h1>Login Success Page</h1>
      <Link to='/login' className="btn btn-light my-5">Logout</Link>
      <table style={{ border: "2px solid black" }}>
        <thead>
          <tr style={{ border: "2px solid black" }}>
            <th style={{ border: "2px solid black" }}>Name</th>
            <th style={{ border: "2px solid black" }}>Dob</th>
            <th style={{ border: "2px solid black" }}>Email</th>
            <th style={{ border: "2px solid black" }}>Password</th>
          </tr>
        </thead>
        <tbody>
          {table.map((data, index) => (
            <tr key={index}>
              <td style={{ border: "2px solid black" }}>{data.name}</td>
              <td style={{ border: "2px solid black" }}>{data.dob}</td>
              <td style={{ border: "2px solid black" }}>{data.email}</td>
              <td style={{ border: "2px solid black" }}>{data.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
