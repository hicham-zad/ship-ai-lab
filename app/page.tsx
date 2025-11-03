import GumroadStyleLanding from "@/components/GumroadStyleLanding";

export default function Home({ params }: { params: { locale: string } }) {
  return (
    <div>
      <GumroadStyleLanding />
    </div>
  );
}
