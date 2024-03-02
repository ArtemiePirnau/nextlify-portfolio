export default function FilterButtons({ handleClick, active }: any) {
  const items = ["HTML/CSS", "JavaScript", "React"];
  return (
    <div className="portfolio__tabs text-center uppercase text-lg mb-10">
      {items.map((item) => (
        <button
          key={item}
          className={active === item.toLowerCase() ? "active" : ""}
          onClick={() => handleClick(item.toLowerCase())}
        >
          {item}
        </button>
      ))}
      <button
        className="portfolio__tab text portfolio__tab-websites "
        data-filter=".websites"
      >
        HTML/CSS
        <span></span>
      </button>
      <button className="portfolio__tab text" data-filter=".apps">
        JavaScript
        <span></span>
      </button>
      <button className="portfolio__tab text" data-filter=".react">
        React
        <span></span>
      </button>
    </div>
  );
}
