import React, { PureComponent } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { homeMenuInfo } from "./HomeMenuInfo";
import HomeMenuRow from "./HomeMenuRow";
import style from "../../../../assets/styles/partial/ozen_sushi_home.module.scss";
import skipdish from "../../../../assets/images/skip_06.png";
import uberEat from "../../../../assets/images/uber-eats_03.png";
import ozen_sushi_img from "../../../../assets/images/about_ozen_sushi.png";
import avocado from "../../../../assets/images/avocado.png";

class Home extends PureComponent {
  render() {
    const baseURL = `${process.env.PUBLIC_URL}/images/Ozen_Sushi`;
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
            <img src={avocado} alt="ozen sushi avocad" />
          </div>
          <div className={style.mid_second}>
            <img src={ozen_sushi_img} alt="ozen sushi restaurant" />
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
          <div className={style.section_4__rows}>
            {homeMenuInfo.map((item, index) => (
              <HomeMenuRow
                key={index}
                menuName={item.menuName}
                menuDesc={item.menuDesc}
                price={item.price}
                to={item.to}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            ))}
          </div>
        </section>
        {/* section 5 */}
        <section className={style.section_5}>
          <a
            href="https://www.skipthedishes.com/ozen?gclid=Cj0KCQjwvo_qBRDQARIsAE-bsH-IXy9dfLLlAq1bITr4rkKr5uMg8-t6Yht2oDMwb6OUyF_l9GgL1NMaAgvFEALw_wcB"
            className={style.skip_the_dishes}
          >
            <img src={skipdish} alt="skip the dish logo" />
          </a>
          <a
            href="https://www.ubereats.com/en-CA/london-ont/food-delivery/ozen-sushi/yCgRS0Q7S_Wlx8Flww4rWQ/"
            className={style.uber_eats}
          >
            <img src={uberEat} alt="uber eat logo" />
          </a>
        </section>
      </div>
    );
  }
}
export default Home;
