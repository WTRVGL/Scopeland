import React, {useEffect} from "react";
import Layout from "../components/layout";

const Yo = () => {
    useEffect(() => {
        fetch('http://localhost:5001/api/products')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
    }, [])
  return (
    <Layout>
      <div>
        <h1>ff</h1>
      </div>
    </Layout>
  );
};

export default Yo;