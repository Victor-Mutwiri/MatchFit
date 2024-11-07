import './slider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Skills = () => {
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };


  return (
    <div className="skills" id='about'>
        <Slider {...settings} className='logo'>
          <div className="carousel-slide">
            <img src="https://media.licdn.com/dms/image/v2/C560BAQE88xCsONDULQ/company-logo_400_400/company-logo_400_400/0/1630652622688/microsoft_logo?e=1738195200&v=beta&t=HpTBHSZZzjv66FAyhc4m5T04-KJtAIdqnuo18eHRJKA" alt="Microsoft"/>
          </div>
          <div className="carousel-slide">
            <img src="https://media.licdn.com/dms/image/v2/C4D0BAQH63J4ETgKcFw/company-logo_400_400/company-logo_400_400/0/1671798298674/savannah_informatics_logo?e=1738195200&v=beta&t=vozGkPD0_mS5jfrivlgB2-ZAEK4U215-6yeWHFiHGGo" alt="Savanna"/>
          </div>
          <div className="carousel-slide">
            <img src="https://www.myjobmag.co.ke/company_logo/86/88417837_I&M%20Bank.png" alt="I&M"/>
          </div>
          <div className="carousel-slide">
            <img src="https://media.licdn.com/dms/image/v2/D4D0BAQEQn1pDkyWBxA/company-logo_400_400/company-logo_400_400/0/1689455918246/yassir_logo?e=1738195200&v=beta&t=2au8GAgB2laXqT6qdm3aLPoLqE7rnI5ocxXCipQB8jI" alt="Yassir"/>
          </div>
          <div className="carousel-slide">
            <img src="https://media.licdn.com/dms/image/v2/D4D0BAQHWnivwMLBUXQ/company-logo_400_400/company-logo_400_400/0/1698841357086/nathanhrgroup_logo?e=1738195200&v=beta&t=xkg_Q6TCjocIV0lMLfT_r5chdX5bflBE_T8lirQXIAU" alt="Nathan&Nathan"/>
          </div>
          <div className="carousel-slide">
            <img src="https://media.licdn.com/dms/image/v2/D560BAQElwT1kpc6sWw/company-logo_400_400/company-logo_400_400/0/1714395474106/usebraintrust_logo?e=1738195200&v=beta&t=d7w1-lIjhpP3JWE8EiCJVGRfmcjqhPmlkJf2ty5MMwo" alt="BrainTrust"/>
          </div>
          <div className="carousel-slide">
            <img src="https://media.licdn.com/dms/image/v2/C4E0BAQH3x2gEn4EEGQ/company-logo_400_400/company-logo_400_400/0/1631320613669?e=1738195200&v=beta&t=Jk3e8IR6kzOFFRjRjr4YiB7dmTIaOQIMlsl7NyB17Bg" alt="NationalBank"/>
          </div>
        </Slider>
    </div>
  )
}
