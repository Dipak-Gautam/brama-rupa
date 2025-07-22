const TextInput = ({ label, placeholder, ref, err }) => {
  return (
    <div className="">
      <div className="text-sm font-semibold text-gray-700">{label}:</div>
      <input
        className={`border w-full ${
          err ? "border-red-400" : "border-gray-300"
        } bg-slate-50 rounded-sm p-1 px-2`}
        placeholder={placeholder}
        ref={ref}
      />

      <div className="h-5 text-xs text-red-500 px-2">
        {err && "Please provide a valid input"}
      </div>
    </div>
  );
};

export default TextInput;
