import React, { useState } from "react";
import ReactDOM from "react-dom";
import { WrapperStyled } from "./general";
import "./styles.css";

function App() {
  const [price, setPrice] = useState("");
  const [result, setResult] = useState([]);
  const [remained, setRemained] = useState(null);
  const rules = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 100, 50];

  const validateValue = price => {
    const toLowerCasePrice = price.toLowerCase();
    let status = false;
    let convertedPrice = price;

    if (
      toLowerCasePrice.includes("rp") &&
      toLowerCasePrice.indexOf("rp") === 0
    ) {
      status = true;
      convertedPrice = toLowerCasePrice.replace(new RegExp("rp", "g"), "");
    }

    convertedPrice = convertedPrice
      .replace(/\./g, "")
      .replace(/,00/g, "")
      .replace(/\s/g, "");

    if (isNaN(convertedPrice) || convertedPrice === "") {
      status = false;
      alert("Price must be a valid number");
    } else {
      status = true;
      convertedPrice = convertedPrice.replace(/\s/g, "");
    }

    return {
      status,
      price: parseInt(convertedPrice)
    };
  };

  const clearResult = () => {
    setRemained(null);
    setResult([]);
  };

  const onSubmit = e => {
    e.preventDefault();
    clearResult();
    const { status, price } = validateValue(e.target["price"].value);
    if (status) {
      let result = [];
      let remained = price;
      rules.forEach(rule => {
        const modulusWithRule = remained % rule;
        const matchWithRule = modulusWithRule !== rule;
        let value = 0;
        if (matchWithRule && modulusWithRule > 0) {
          value = (remained - modulusWithRule) / rule;
        } else if (matchWithRule && modulusWithRule === 0) {
          value = remained / rule;
        }
        if (value !== 0) {
          result = [
            ...result,
            {
              amount: "Rp " + new Intl.NumberFormat("de-ID").format(rule),
              value
            }
          ];
        }
        remained = modulusWithRule;
      });
      if (remained !== 0) {
        setRemained(remained);
      }
      setResult(result);
    }
  };

  return (
    <div className="App">
      <div>
        <p>Name: Andrew Alexander</p>
        <p>Email: bdrewsands@gmail.com</p>
      </div>
      <WrapperStyled>
        <h1>Software Engineer Mobile Web Test</h1>
        <form onSubmit={onSubmit}>
          <div className="row flex">
            <div className="flex-column">
              <label>Price (Rp)</label>
            </div>
            <input
              name="price"
              type="text"
              onChange={e => setPrice(e.target.value)}
              value={price}
              placeholder="ex: Rp 100.xxx"
              required
            />
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="row">
          <h3>Result: </h3>
          {result.map((item, index) => (
            <div key={`item-${index}`}>
              <p>
                {item.value} x {item.amount}
              </p>
            </div>
          ))}
          {remained !== null && <p>Left {remained} (no available fraction)</p>}
        </div>
      </WrapperStyled>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
