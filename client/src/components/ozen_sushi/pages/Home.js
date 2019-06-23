import React, { PureComponent } from "react";
import style from "../../../assets/styles/partial/home.module.scss";

class Home extends PureComponent {
  render() {
    return (
      <div className={style.container}>
        <div className={style.first_section}>
          <span>O"</span>Zen's Story
        </div>
        <div className={style.second_section}>Main 2</div>
        <div className={style.third_section}>
          <div className={style.top}>
            <span>O"Zen</span> Korean & Japanese
          </div>
          <div className={style.mid_first}>img</div>
          <div className={style.mid_second}>img</div>
          <div className={style.bottom}>About Us</div>
        </div>
        <div className={style.fourth_section}>
          <div className={style.first_row}>Menu</div>
          <div className={style.row}>
            <div className={style.menu_photo}>first col</div>
            <div className={style.menu}>
              <span className={style.menu__name}>Seafood U-don</span>
              <span className={style.menu__detail}>
                Mssel, squid, shrimp with noodels.
              </span>
              <span className={style.menu__price}>$11.50</span>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.menu}>
              <span className={style.menu__name}>Teriyaki Combo</span>
              <span className={style.menu__detail}>
                Miso soup, garden salad, 2ps of gyoza & steamed rice.
              </span>
              <span className={style.menu__price}>$9.50</span>
            </div>
            <div className={style.menu_photo}>second col</div>
          </div>
          <div className={style.row}>
            <div className={style.menu_photo}>first col</div>
            <div className={style.menu}>
              <span className={style.menu__name}>Ni Sashimi Set</span>
              <span className={style.menu__detail}>
                18pcs daily fresh chef's choice of dish
              </span>
              <span className={style.menu__price}>$17</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
