import PropTypes from "prop-types";

export const Layout = ({ children }) => {
  return (
    <main className="container h-dvh flex flex-col xl  mx-auto">
      {children}
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.array,
};
