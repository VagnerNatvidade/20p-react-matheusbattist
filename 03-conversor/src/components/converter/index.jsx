import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container } from "./styles";

export function Converter() {
  const [rates, setRates] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("BRL");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(10);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://v6.exchangerate-api.com/v6/7743e0914d22a6ae6f0c9e5c/latest/USD"
      )
      .then((res) => {
        setRates(res.data.conversion_rates);
      })
      .catch((error) => {
        console.log("Erro ao obter dados da API", error);
      });
  }, []);

  useEffect(() => {
    if (rates) {
      const rateFrom = rates[fromCurrency] || 0;
      const rateTo = rates[toCurrency] || 0;
      setConvertedAmount(((amount / rateFrom) * rateTo).toFixed(2));
    }
  }, [amount, rates, fromCurrency, toCurrency]);

  if (!rates) {
    return (
      <Container>
        <h1>Carregando...</h1>
      </Container>
    );
  }

  return (
    <Container>
      <h2>Conversor de moedas</h2>
      <form>
        <input
          type="number"
          placeholder="Digite o valor aqui..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <span>Selecione as moedas:</span>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span>Para</span>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {Object.keys(rates).map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </form>
      <h3>
        {convertedAmount} {toCurrency}
      </h3>
      <p>
        {amount} {fromCurrency} valem {convertedAmount} {toCurrency}
      </p>
    </Container>
  );
}
