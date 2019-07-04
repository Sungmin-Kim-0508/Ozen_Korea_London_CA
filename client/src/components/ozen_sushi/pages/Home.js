import React, { PureComponent } from "react";
import { Helmet } from "react-helmet";
import style from "../../../assets/styles/partial/ozen_sushi_home.module.scss";
import skipdish from "../../../assets/images/skip_06.png";
import uberEat from "../../../assets/images/uber-eats_03.png";
import ozen_sushi_img from "../../../assets/images/about_ozen_sushi.png";
import avocado from "../../../assets/images/avocado.png";

class Home extends PureComponent {
  render() {
    return (
      <div className={style.container}>
        <Helmet>
          <title>Home | Ozen Sushi</title>
        </Helmet>
        {/* section 1 */}
        <section className={style.section_1}>
          <div className={style.letters}>
            <span>O"</span>Zen's Story
          </div>
        </section>
        {/* section 2 */}
        <section className={style.section_2}>Main 2</section>
        {/* section 3 */}
        <section className={style.section_3}>
          <div className={style.top}>
            <span className={style.OZen}>O"Zen</span>
            <span className={`${style.korean_japanese} font_roboto`}>
              Korean & Japanese
            </span>
          </div>
          <div className={style.mid_first}>
            <img src={avocado} />
          </div>
          <div className={style.mid_second}>
            <img src={ozen_sushi_img} />
          </div>
          <div className={style.bottom}>About Us</div>
        </section>
        {/* section 4 */}
        <section className={style.section_4}>
          <div className={style.top}>Menu</div>
          <div className={style.row}>
            <div className={style.menu_photo}>first col</div>
            <div className={style.menu}>
              <span className={style.menu__name}>Seafood U-don</span>
              <span className={`${style.menu__detail} font_roboto`}>
                Mssel, squid, shrimp with noodels.
              </span>
              <span className={style.menu__price}>$11.50</span>
            </div>
          </div>
          <div className={style.row}>
            <div className={`${style.menu} ${style.right_justify}`}>
              <span className={style.menu__name}>Teriyaki Combo</span>
              <span className={`${style.menu__detail} font_roboto`}>
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
              <span className={`${style.menu__detail} ${style.font_roboto}`}>
                18pcs daily fresh chef's choice of dish
              </span>
              <span className={style.menu__price}>$17</span>
            </div>
          </div>
        </section>
        {/* section 5 */}
        <section className={style.section_5}>
          <a href="#" className={style.uber_eats}>
            <img src={skipdish} />
          </a>
          <a
            href="https://www.skipthedishes.com/"
            className={style.skip_the_dishes}
          >
            <img src={uberEat} />
          </a>
        </section>
      </div>
    );
  }
}

export default Home;
