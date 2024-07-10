import React, { useState, useEffect } from "react";
import axios from "axios";

import { CurrentWeather } from "../current-weather";
import { Search } from "../search";
import { Prevision } from "../prevision";
import { Container } from "./styles";

export function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [prevision, setPrevision] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY || "";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.altitude;
      const lon = position.coords.longitude;

      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
      );

      setCity(res.data.name);
      setWeather(res.data);
    });
  }, [apiKey]);

  const searchWeather = async () => {
    try {
      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
      );

      const previsionRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
      );

      setWeather(weatherRes.data);
      setPrevision(previsionRes.data.list.slice(0, 5));
    } catch (error) {
      alert("Erro ao buscar clima: ", error);
    }
  };

  return (
    <Container>
      <h1>Condições climáticas</h1>
      <Search city={city} setCity={setCity} searchWeather={searchWeather} />
      {weather && <CurrentWeather weather={weather} />}
      {prevision.length > 0 && <Prevision previsions={prevision} />}
    </Container>
  );
}
