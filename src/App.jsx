import "./styles.css";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState(false);
  const [details, setDetails] = useState(false);

  const handleCart = () => {
    setCart(!cart);
  };

  const handleDetails = () => {
    setDetails(!details);
  };

  // const DetailsPopApp = () => {
  //   return (

  //   );
  // };

  return (
    <div className="container">
      <div className="container-img">
        <img src="https://sneakers-type.ru/wp-content/uploads/2021/07/Krossovki-Nike-Dunk-Low-University-Red-e1630305163760.jpg"></img>
      </div>
      <div className="text">
        <h1>Nike sneaker</h1>
        <h1>$120</h1>
      </div>
      <div>
        <button disabled={details} onClick={handleDetails}>
          Детали
        </button>
        {details && (
          <div className="details">
            <button onClick={handleDetails}>x</button>
            <p>
              lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              dignissimos.
            </p>
          </div>
        )}
      </div>
      <hr />
      <p>
        lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
        dignissimos.
      </p>
      <div>
        <button className="btnActive" disabled={cart} onClick={handleCart}>
          {cart ? "Уже в корзине" : "Добавить в корзину"}
        </button>
        {cart && (
          <div className="deleteOne" onClick={handleCart}>
            Удалить из корзины
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
