export const Layout = ({ children }) => {
  return (
    <main className="container h-dvh flex flex-col xl border-solid border-2 border-sky-500 mx-auto">
      {children}
    </main>
  );
};
