import { useState } from "react";

export default function Home() {
  const [py, setPy] = useState(null);
  const [loading, setLoading] = useState(false);

  async function callPython() {
    try {
      setLoading(true);
      const res = await fetch("/py/hello");
      const data = await res.json();
      setPy(data.message || JSON.stringify(data));
    } catch (e) {
      setPy("Ошибка запроса к Python");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{display:'grid',gap:16,placeItems:'center',minHeight:'100vh',fontFamily:'ui-sans-serif,system-ui'}}>
      <h1>Hello from <b>Next.js</b> on <b>Docker</b> 🚀</h1>
      <button onClick={callPython} style={{padding:'10px 16px', border:'1px solid #ddd', borderRadius:8, cursor:'pointer'}}>
        {loading ? "Жду ответ..." : "Поздороваться с Python"}
      </button>
      {py && <p style={{fontSize:18}}>Ответ Python: <b>{py}</b></p>}
    </main>
  );
}
