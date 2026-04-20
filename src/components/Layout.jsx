export default function Layout({ children }) {
  return (
    <main className="layout">
      <h1 className="title">🐱 댄싱 캣</h1>
      <p className="subtitle">클릭해서 고양이와 함께 춤을!</p>
      {children}
    </main>
  );
}
