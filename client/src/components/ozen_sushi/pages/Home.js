import React, { PureComponent } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import style from "../../../assets/styles/partial/ozen_sushi_home.module.scss";
import skipdish from "../../../assets/images/skip_06.png";
import uberEat from "../../../assets/images/uber-eats_03.png";
import ozen_sushi_img from "../../../assets/images/about_ozen_sushi.png";
import avocado from "../../../assets/images/avocado.png";

class Home extends PureComponent {
  render() {
    const baseURL = `${process.env.PUBLIC_URL}/images/Ozen_Sushi`;
    const menuURL = "ozen_sushi/menu";
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
        <section className={style.section_2}>
          <img
            className={style.section_2__img}
            src={`${baseURL}/SushiOrSashimi_Set/Sashimi_Set.jpg`}
            alt="sasimi set"
          />
        </section>
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
          <div className={style.bottom}>
            <NavLink className={style.bottom__link} to="ozen_sushi/about">
              About Us
            </NavLink>
          </div>
        </section>
        {/* section 4 */}
        <section className={style.section_4}>
          <div className={style.section_4__top}>Menu</div>
          <div className={style.section_4__row}>
            <div className={style.section_4__row__menu_photo}>
              <img
                src={`${baseURL}/Udon/Seafood_Udon.jpg`}
                alt="seafood udon"
              />
            </div>
            <div className={style.section_4__row__menu}>
              <NavLink className={style.menu__link} to={`${menuURL}/udons`}>
                <span className={style.menu__name}>Seafood U-don</span>
                <span className={`${style.menu__detail} font_roboto`}>
                  Mssel, squid, shrimp with noodels.
                </span>
                <span className={style.menu__price}>$11.50</span>
              </NavLink>
            </div>
          </div>
          <div className={style.section_4__row}>
            <div
              className={`${style.section_4__row__menu} ${style.right_justify}`}
            >
              <NavLink to={`${menuURL}/main_menu`}>
                <span className={style.menu__name}>Teriyaki Combo</span>
                <span className={`${style.menu__detail} font_roboto`}>
                  Miso soup, garden salad, 2ps of gyoza & steamed rice.
                </span>
                <span className={style.menu__price}>$9.50</span>
              </NavLink>
            </div>
            <div className={style.section_4__row__menu_photo}>
              <img
                src={`${baseURL}/Main/Teriyaki_Combo.jpg`}
                alt="seafood udon"
              />
            </div>
          </div>
          <div className={style.section_4__row}>
            <div className={style.section_4__row__menu_photo}>
              <img
                src={`${baseURL}/SushiOrSashimi_Set/Sashimi_Set.jpg`}
                alt="seafood udon"
              />
            </div>
            <div className={style.section_4__row__menu}>
              <NavLink to={`${menuURL}/sushi_or_sashimi_sets`}>
                <span className={style.menu__name}>Ni Sashimi Set</span>
                <span className={`${style.menu__detail} ${style.font_roboto}`}>
                  18pcs daily fresh chef's choice of dish
                </span>
                <span className={style.menu__price}>$17</span>
              </NavLink>
            </div>
          </div>
        </section>
        {/* section 5 */}
        <section className={style.section_5}>
          <a href="https://www.skipthedishes.com/" className={style.uber_eats}>
            <img src={skipdish} />
          </a>
          <a href="#" className={style.skip_the_dishes}>
            <img src={uberEat} />
          </a>
        </section>
      </div>
    );
  }
}
export default Home;
