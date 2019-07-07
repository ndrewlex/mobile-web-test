import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BorderBox, FlexRow, Form, Row  } from "./general";
import "./styles.css";

function App() {
  const [price, setPrice] = useState("");
  const [result, setResult] = useState([]);
  const [remained, setRemained] = useState(null);
  const rules = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 100, 50];

  const validateValue = price => {
    let toLowerCasePrice = price.toLowerCase().toString();
    let status = false;
    let isRpExist = toLowerCasePrice.includes("rp")
    if ( isRpExist && toLowerCasePrice.indexOf("rp") === 0 )
    {
      status = true;
      toLowerCasePrice = toLowerCasePrice.replace(new RegExp("rp", "g"), "")
        .replace(/\./g, "")
        .replace(/,00/g, "")
        .replace(/\s/g, "");;
    }

    if (isNaN(toLowerCasePrice) || toLowerCasePrice === "") {
      status = false;
      alert("Price must be a valid number");
    } else {
      status = true;
      toLowerCasePrice = toLowerCasePrice.replace(/\s/g, "");
    }

    return {
      status,
      price: parseInt(toLowerCasePrice)
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
    setPrice(price);
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

  // const onChangePrice = (e) => {
  //   const value = e.target.value;
  //   setPrice(value);
  // }

  return (
    <div className="App">
      <div>
        <p>Name: Andrew Alexander</p>
        <p>Email: bdrewsands@gmail.com</p>
        <p>
          <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DADYtwbBj5Q&#x2F;view?utm_content=DADYtwbBj5Q&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener noreferrer"> CV
            Andrew Alexander
          </a>
        </p>
      </div>
      <BorderBox>
        <h2 className="title">Software Engineer Mobile Web Test</h2>
        <Form onSubmit={onSubmit}>
          <Row>
            <div className="label">
              <label>Price (Rp)</label>
            </div>
            <FlexRow>
              <div>
                <input
                  name="price"
                  type="text"
                  // onChange={onChangePrice}
                  defaultValue={price}
                  placeholder="ex: Rp 100.xxx"
                  required
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </FlexRow>
          </Row>
        </Form>
        <Row>
          {result.length > 0 && 
            <>
              <h4>Result from Rp {new Intl.NumberFormat("de-ID").format(price)}: </h4>
              {result.map((item, index) => (
                <div key={`item-${index}`}>
                  <p>
                    {item.value} x {item.amount}
                  </p>
                </div>
              ))}
              {remained !== null && <p>Left Rp {new Intl.NumberFormat("de-ID").format(remained)} (no available fraction)</p>}
            </>
          }
        </Row>
      </BorderBox>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
