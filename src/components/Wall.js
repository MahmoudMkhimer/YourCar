import css from "./Wall.module.css";

function Wall() {
  return (
    <section className={css.wall}>
      <div className={`${css.item} ${css.item1}`}></div>
      <div className={`${css.item} ${css.item2}`}></div>
      <div className={`${css.item} ${css.item3}`}></div>
      <div className={`${css.item} ${css.item4}`}></div>
      <div className={`${css.item} ${css.item5}`}>
        <h3>Tesla Model 3</h3>
        <p>Disruptive, avant-garde, futuristic, innovative.</p>
        <button>contact</button>
      </div>
      <div className={`${css.item} ${css.item6}`}></div>
      <div className={`${css.item} ${css.item7}`}></div>
      <div className={`${css.item} ${css.item8}`}></div>
      <div className={`${css.item} ${css.item9}`}></div>
    </section>
  );
}
export default Wall;
