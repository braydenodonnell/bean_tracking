import Filter from "./filter";
import Card from "./card";
import AddNewButton from "./addNewBtn";

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-12 items-center mt-20">
      <Filter />

      <div className="grid gap-12 grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>

      <AddNewButton />
    </div>
  );
}
