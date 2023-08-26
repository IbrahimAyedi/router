import "./App.css";
import { useState } from "react";
import ProductList from "./Components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBare from "./Components/NavBare";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Info from "./Components/Info";

function App() {
  const [list, setList] = useState([
        {
      id: 1,
      name: "Mercedes G Class",
      pic: "https://s1.cdn.autoevolution.com/images/news/this-brabus-tuned-mercedes-g-class-could-be-yours-if-you-sell-your-home-and-some-organs-187541_1.jpg",
      price: 600000,
      videoUrl:"https://www.youtube.com/watch?v=w7cSaIPUO3k"
    },
    {
      id: 2,
      name: "Audi Q7",
      pic: "https://www.motortrend.com/uploads/sites/5/2020/03/2020-Audi-Q7-11.jpg",
      price: 104685,
      videoUrl:"https://www.youtube.com/watch?v=1RQWeqNBALQ"
    },
    {
      id: 3,
      name: "BMW X6",
      pic: "https://amazonecar.fr/wp-content/uploads/2021/12/2020-bmw-x6-m-competition.jpg",
      price: 113600,
      videoUrl:"https://www.youtube.com/watch?v=X1ydNGz4rPM"
    },
    {
      id: 4,
      name: "VOLKSWAGEN TIGUAN",
      pic: "https://catalogue.automobile.tn/big/2021/04/46587.jpg?t=1",
      price: 34980,
      videoUrl:"https://www.youtube.com/watch?v=8t73BIw1C1s"
    },
    {
      id: 5,
      name: "Opel Grandland",
      pic: "https://www.largus.fr/images/styles/max_1300x1300/public/images/grandland-avg.jpg?itok=tgij5aBR",
      price: 34000,
      videoUrl:"https://www.youtube.com/watch?v=n_mXZjVLySE"
    },
  ]);
  return (
    <div className="App">
      <Router>
        <NavBare />
        <Routes>
          <Route path="/" element={<ProductList data={list} />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/info/:id" element={<Info   data={list}  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
