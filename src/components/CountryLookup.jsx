"use client";

import { useState, useEffect } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("Hong Kong");

  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setCountry(data.country));
  }, []);

  return <div>{country}</div>;
}
