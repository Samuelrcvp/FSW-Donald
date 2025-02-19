import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="rounded-xl border border-green-500 p-5">
      <Button>Clique aqui</Button>
      <Input placeholder="Digite aqui" />
    </div>
  );
};

export default HomePage;
