"use client";

import { useState } from "react";
import { FaHome, FaNewspaper, FaPiggyBank, FaHammer, FaWallet } from "react-icons/fa";
import { BsGraphUp, BsTextParagraph } from "react-icons/bs";
import { AiFillSecurityScan, AiFillSwitcher } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";   

export default function HomePage() {
  const [avisos] = useState([
    "Fundo de Investimentos",
    "Sumário dos Fundos",
    "Catálogo de agregados Veja aqui. (catalogo)",
    "SIDRA / IPCA por grupos Veja aqui. (grupos)",
    "Código de Ética",
  ]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-16 bg-gray-800 text-white flex flex-col items-center py-4 space-y-6">
        <Image
          src="/icon.png"
          alt="icone"
          width={40}
          height={40}
        />
        <FaHome size={20} className="opacity-80 hover:opacity-100 cursor-pointer" />
        <FaNewspaper size={20} className="opacity-80 hover:opacity-100 cursor-pointer" />
        <FaPiggyBank size={20} className="opacity-80 hover:opacity-100 cursor-pointer" />
        <BsGraphUp size={20} className="opacity-80 hover:opacity-100 cursor-pointer" />
        <BsTextParagraph size={20} className="opacity-80 hover:opacity-100 cursor-pointer" />
        <FaHammer size={20} className="opacity-80 hover:opacity-100 cursor-pointer" />
        <FaWallet size={20} className="opacity-80 hover:opacity-100 cursor-pointer" />
        <AiFillSwitcher size={20} className="opacity-80 hover:opacity-100 cursor-pointer" />
        <AiFillSecurityScan size={20} className="opacity-80 hover:opacity-100 cursor-pointer" />
      </div>
  
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-black mb-6 text-left">Home</h1>

        <Image
          src="/image.png"
          alt="Sparta"
          width={800}
          height={300}
        />

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-900">Mural</h2>
          <ul className="list-disc list-inside space-y-2">
            {avisos.map((aviso, index) => {
              const text = aviso.split("Veja aqui.")[0];

              if (aviso.includes("catalogo")) {
                return (
                  <li key={index} className="text-gray-700">
                    {text}
                    <Link
                      href="catalogo"
                      className="ml-2 text-blue-600 underline hover:text-blue-800 visited:text-blue-600"
                    >
                      Veja aqui.
                    </Link>
                  </li>
                );
              }

              if (aviso.includes("grupo")) {
                return (
                  <li key={index} className="text-gray-700">
                    {text}
                    <Link
                      href="grupo"
                      className="ml-2 text-blue-600 underline hover:text-blue-800 visited:text-blue-600"
                    >
                      Veja aqui.
                    </Link>
                  </li>
                );
              }

              return <li key={index} className="text-gray-700">{aviso}</li>;
            })}
          </ul>

          <div className="mt-6 flex gap-4">
            <button className="flex-1 py-2 bg-blue-100 text-blue-900 rounded hover:bg-blue-200 font-semibold">
              Mais Avisos Aqui
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
