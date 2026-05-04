import { Link } from "react-router-dom";

export default function PembicaraIndex() {
  const pembicara = [
    {
      nama: "Moh. Ichsan Maulana",
      deskripsi: "HCIS, PT. Garuda Daya Pratama Sejahtera",
      kategori: "Seminar"
    },
    {
      nama: "M. Zaim Zamzami",
      deskripsi: "Programmer, PT. Pertamina Drilling",
      kategori: "Talkshow"
    },
    {
      nama: "Daffa Zuhdan Muhtar",
      deskripsi: "Android Developer, PT. Astra",
      kategori: "Workshop"
    },
    {
      nama: "Bayu Adi Prasetiyo",
      deskripsi: "Software Engineer, Kompas",
      kategori: "Seminar"
    },
  ];

    return(
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">PEMBICARA</h1>
            <p>Daftar pembicara yang tersedia</p>
        
      {/* LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pembicara.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">{item.nama}</h3>
            <p className="text-sm text-gray-500">{item.deskripsi}</p>
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded mt-2 inline-block">
              {item.kategori}
            </span>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <Link
        to="/dashboard/pembicara/create"
        className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Tambah Pembicara
      </Link>
    </div>
  );
}