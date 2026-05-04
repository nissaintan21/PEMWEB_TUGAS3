import { useForm } from "react-hook-form";
import InputCategory from "../../../components/InputCategory";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


type FormData = {
  category: string;
  category_id: string;
};

const schema = z.object({
  category: z.string().min(1, "Category tidak boleh kosong"),
  category_id: z.string().min(1, "Category ID tidak boleh kosong"),
});

export default function CategoryCreate() {
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
      <h1 className="text-2xl font-bold mb-2">Tambah Kategori</h1>
      <p className="mb-4">Form untuk menambahkan Kategori baru</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-md"
      >
        {/* Nama Category */}
        <InputCategory
          label="Nama Category"
          name="category"
          placeholder="Masukkan nama category"
          register={register}
          error={errors.category?.message}
        />
        <InputCategory
        label="Category ID"
        name="category_id"
        placeholder="Masukkan ID kategori"
        register={register}
        error={errors.category_id?.message}
        />

        
        {/* Tombol */}
        <button type="submit" className="bg-red-900 text-white p-2 rounded-xl">
  Simpan
</button>
      </form>
    </div>
  );
}