import { Link } from "react-router-dom";

export default function CategoryIndex() {
  const categories = [
    "Seminar",
    "Workshop",
    "Kompetisi",
    "Talkshow",
  ];
    return(
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">KATEGORI</h1>
            <p>Berikut daftar kategori yang tersedia
            </p>
            {/* LIST */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl p-4 text-center font-medium hover:shadow-lg transition"
          >
            {cat}
          </div>
        ))}
      </div>


            <Link to="/dashboard/category/create" 
            className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg">
            Tambah Kategori
            </Link>
        </div>
    );
}
