export default function Header() {
  let fontHeaderStyle = {
    color: "white",
    backgroundColor: "red",
  };
  return (
    <header style={fontHeaderStyle}>
      <div className="list-name">COTO</div>
      <div>
        <i className="fa-solid fa-bars"></i>
      </div>
    </header>
  );
};
