import React, { Component } from "react";
import style from "../../../assets/styles/partial/ozen_sushi_menu.module.scss";

class Menu extends Component {
  render() {
    return (
      <>
        {/* Section 1 */}
        {/* <section className={style.section_1} /> */}
        {/* Section 2 */}
        <section className={style.section_2}>
          <div className={style.title}>Menu</div>
          <table className={style.category}>
            <thead>
              <tr>
                <th>APPETIZERS</th>
                <th>Roll Sets</th>
                <th>Sushi Sets</th>
              </tr>
            </thead>
          </table>
          <div className={style.photos}>
            <div className={style.photo_1} />
            <div className={style.photo_2} />
            <div className={style.photo_3} />
            <div className={style.photo_4} />
            <div className={style.photo_5} />
            <div className={style.photo_6} />
          </div>
        </section>
      </>
    );
  }
}

export default Menu;
