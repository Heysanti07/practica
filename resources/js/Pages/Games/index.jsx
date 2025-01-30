export default function Index({ games }) {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">
                Hay {games.length} juegos en la base de datos
            </h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-md">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border">Nombre</th>
                            <th className="py-2 px-4 border">Clasificación</th>
                            <th className="py-2 px-4 border">Género</th>
                            <th className="py-2 px-4 border">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {games.map((game, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-2 px-4 border">{game.name}</td>
                                <td className="py-2 px-4 border">{game.classification}</td>
                                <td className="py-2 px-4 border">{game.genre}</td>
                                <td className="py-2 px-4 border">${game.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
