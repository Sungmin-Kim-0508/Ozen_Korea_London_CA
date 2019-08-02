import React, { PureComponent } from "react";
import style from "../../../assets/styles/partial/ozen_korea_home.module.scss";
import { Link, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import skipdish from "../../../assets/images/skip_06.png";
import uberEat from "../../../assets/images/uber-eats_03.png";

class Home extends PureComponent {
  render() {
    const imageUrl = `${process.env.PUBLIC_URL}/images/Ozen_Korea/Home`;
    const {
      location: { pathname: ozen_korea }
    } = this.props;
    return (
      <div className={style.container}>
        <Helmet>
          <title>Home | Ozen Korea</title>
        </Helmet>
        {/* Section 1 - An food photo */}
        <section className={style.section_1}>
          <img
            src={`${imageUrl}/main_photo_1.png`}
            className={style.section_1__img}
            alt="ozen korea main"
          />
        </section>
        {/* Section 2 - An food photo */}
        <section className={style.section_2}>
          <div>Korean Food</div>
          <img src={`${imageUrl}/main_photo_2.png`} alt="ozen korea main" />
        </section>
        {/* Section 3 - A bunch of Ozen Korea's the photos */}
        <section className={style.section_3}>
          <div className={style.entrance_img}>
            <img
              src={`${imageUrl}/ozen_korea_entrance.png`}
              alt="ozen korea entrance"
            />
          </div>
          <div className={style.photo_1}>
            <img
              src={`${imageUrl}/Tteok_bokki.png`}
              alt="ozen, Ozen, ozen korea, ozen korea tteokbokki, 오젠, 오젠 코리아, 오젠코리아, 떡볶이, 오젠 코리아 떡볶이, 오젠코리아 떡볶이"
            />
          </div>
          <div className={style.about_us}>
            <Link to={`${ozen_korea}/about_us`}>About Us</Link>
          </div>
          <div className={style.photo_2}>
            <img
              src={`${imageUrl}/side_dish.png`}
              alt="ozen, Ozen, ozen korea, side dish, ozen korea side dish, 오젠, 오젠 코리아, 반찬, 오젠 코리아 반찬"
            />
          </div>
        </section>
        {/* Section 4 - Menu */}
        <section className={style.section_4}>
          <div className={style.section_4__top}>Menu</div>
          <div className={style.section_4__row}>
            <div className={style.section_4__row__menu_photo}>
              <img src={`${imageUrl}/jap_chae.png`} alt="" />
            </div>
            <div className={style.section_4__row__menuDetail}>
              <NavLink to={`${ozen_korea}`}>
                <span className={style.menu__name}>Jap Chae</span>
                <span className={style.menu__description}>
                  Stir fried korean glass noodles with vegetables.
                </span>
                <span className={style.menu__price}>$8.49</span>
              </NavLink>
            </div>
          </div>
          <div className={style.section_4__row}>
            <div className={style.section_4__row__menuDetail}>
              <NavLink to={`${ozen_korea}`}>
                <span className={style.menu__name}>Kimchi Pancake</span>
                <span className={style.menu__description}>
                  Korean style pancake with Kimchi
                </span>
                <span className={style.menu__price}>$4.45</span>
              </NavLink>
            </div>
            <div className={style.section_4__row__menu_photo}>
              <img
                src={`${imageUrl}/kimchi_pancake.png`}
                alt="ozen, Ozen, ozen korea, Ozen Korea, Ozen korea , ozen kimch, kimchi, kimchi pancake, Kimchi Pancake, ozen korea kimchi pancake, 오젠, 오젠 코리아, 오젠코리아,  오젠 코리아 김치전, 오젠코리아 김치부침개, 김치전, 김치 부침개"
              />
            </div>
          </div>
          <div className={style.section_4__row}>
            <div className={style.section_4__row__menu_photo}>
              <img src={`${imageUrl}/pork_bone_soup.png`} alt="" />
            </div>
            <div className={style.section_4__row__menuDetail}>
              <NavLink to={`${ozen_korea}`}>
                <span className={style.menu__name}>Pork bone soup</span>
                <span className={style.menu__description}>
                  Spicy pork bone with potato and vegetable and rice
                </span>
                <span className={style.menu__price}>$4.45</span>
              </NavLink>
            </div>
          </div>
        </section>
        {/* Section 5 - Uber and Skip the dish */}
        <section className={style.section_5}>
          <a
            href="https://www.skipthedishes.com/"
            className={style.skip_the_dishes}
          >
            <img src={skipdish} alt="skip the dish logo" />
          </a>
          <a
            href="https://www.ubereats.com/en-CA/?utm_source=AdWords_Brand&utm_campaign=search-google-brand_32_-99_ca-national_e_txt_acq_cpc_en-ca_uber%20eats_aud-295840112290:kwd-125079392186_255771863478_52415632997_e_c&cid=1075422390&adg_id=52415632997&fi_id=&match=e&net=g&dev=c&dev_m=&cre=255771863478&kwid=aud-295840112290:kwd-125079392186&kw=uber%20eats&placement=&tar=&gclid=CjwKCAjw-ITqBRB7EiwAZ1c5U6chVa5jfvEZ-JfZzAqapbxsQGj58iEl-nZTadtgXLwgqW2zNxEFbBoCR9gQAvD_BwE&gclsrc=aw.ds"
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
