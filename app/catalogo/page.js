"use client";

import { useEffect, useState } from "react";

export default function CatalogoPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v3/agregados?periodo=P5%5b202001%5d")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Erro:", err));
  }, []);

  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Catálogo</h1>
      {data ? (
        <ul className="list-disc pl-6">
          {data.map((item, i) => (
            <li key={i}>{item.nome}</li>
          ))}
        </ul>
      ) : (
        <p>Carregando catálogo...</p>
      )}
      <button
        onClick={handleBack}
        className="mt-3 px-2 py-2 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Voltar para a página inicial
      </button>
    </div>
  );
}
