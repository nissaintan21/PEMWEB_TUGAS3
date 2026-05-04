interface InputCategoryProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: any;
  error?: string;
  options?:string[];
}

const InputCategory: React.FC<InputCategoryProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  options,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>

      {options ? (
        <select
          id={name}
          {...register(name)}
          className={`border p-2 rounded-2xl focus:outline-blue-800 w-full ${
            error ? "border-red-500" : ""
          }`}
        >
          <option value="">Pilih kategori</option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className={`border p-2 rounded-2xl focus:outline-blue-800 w-full ${
            error ? "border-red-500" : ""
          }`}
        />
      )}

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default InputCategory;