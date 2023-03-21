export default function FilterInput({ filter, setFilter }) {
  return (
    <>
      filter shown with:
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
    </>
  );
}
