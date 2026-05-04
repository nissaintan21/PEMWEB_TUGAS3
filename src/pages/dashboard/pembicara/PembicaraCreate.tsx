import { useForm } from "react-hook-form";
import InputPembicara from "../../../components/InputPembicara";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


type FormData = {
  nama: string;
  category: string;
  deskripsi: string;
};

const schema = z.object({
  nama: z.string().min(1, "Nama tidak boleh kosong"),
  category: z.string().min(1, "Kategori tidak boleh kosong"),
  deskripsi: z.string().min(1, "Deskripsi tidak boleh kosong"),
});

export default function PembicaraCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema), // ⬅️ WAJIB
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Tambah Pembicara</h1>
      <p className="mb-4">Form untuk menambahkan Pembicara</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-md"
      >
        {/* Nama Pembicara */}
        <InputPembicara
          label="Nama Pembicara"
          name="nama"
          placeholder="Masukkan nama pembicara"
          register={register}
          error={errors.nama?.message}
        />
        <InputPembicara
          label="Kategori"
          name="category"
          register={register}
          options={["Seminar", "Kompetisi", "Workshop", "Talkshow"]}
          error={errors.category?.message}
        />

        <InputPembicara
        label="Deskripsi"
        name="deskripsi"
        placeholder="Masukkan deskripsi"
        register={register}
        error={errors.deskripsi?.message}
        />

        
        {/* Tombol */}
        <button type="submit" className="bg-red-900 text-white p-2 rounded-xl">
  Simpan
</button>
      </form>
    </div>
  );
}