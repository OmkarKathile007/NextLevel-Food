import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
        <Link to="../app/meals" >Meals</Link>
        <Link to="../app/community" >Community</Link>
      </h1>
    </main>
  );
}
