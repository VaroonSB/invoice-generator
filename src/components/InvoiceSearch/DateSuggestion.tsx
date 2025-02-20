interface DateSuggestionProps {
  list: Array<{ year: string; month: string; name: string }>;
  filter: "year" | "month";
  onSelect: (value: string) => void;
}

export const DateSuggestion = ({
  list,
  filter,
  onSelect,
}: DateSuggestionProps) => {
  return (
    <ul className="bg-white p-4 rounded-lg shadow-md">
      {Array.from(new Set(list.map((item) => item[filter]))).map(
        (value, index) => (
          <li
            key={index}
            className="p-4 border-b last:border-b-0 cursor-pointer hover:bg-gray-100 transition-colors duration-200 hover:scale-95"
            onClick={() => {
              onSelect(value);
            }}
          >
            <div className="font-bold text-lg">{value}</div>
          </li>
        )
      )}
    </ul>
  );
};
