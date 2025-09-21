import Link from "next/link";

export default async function CatalogoPage() {
  const res = await fetch(
    "https://apisidra.ibge.gov.br/values/t/1419/n1/all/v/all/p/all/c315/7169,7170,7445,7486,7558,7625",
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <p>Erro ao buscar dados: {res.status}</p>;
  }

  const data = await res.json();

  if (!Array.isArray(data) || data.length === 0) {
    return <p>Nenhum dado retornado.</p>;
  }

  return (
    <div className="p-6">
      <Link
        href="/"
        className="inline-block mb-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition"
      >
        ← Voltar para Home
      </Link>

      <h1 className="text-3xl font-bold mb-4 text-blue-900">Catálogo</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="px-4 py-2 border">Período</th>
              <th className="px-4 py-2 border">Valor</th>
              <th className="px-4 py-2 border">Categoria / Grupo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              const periodo =
                item.D3N || item.D2N || item.Periodo || item.MES || item.P;
              const valor = item.V;
              const categoria = item.Categoria || item.D2N || "";

              return (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border whitespace-nowrap">{periodo}</td>
                  <td className="px-4 py-2 border whitespace-nowrap">{valor}</td>
                  <td className="px-4 py-2 border whitespace-nowrap">
                    {categoria}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
