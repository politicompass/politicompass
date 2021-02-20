import { useTranslation } from 'react-i18next';

const Header = () => {
const {t, i18n} = useTranslation()
const changeLanguage = (language) => {
    i18n.changeLanguage(language)
}
  return (
    <div id="header" className="header">
      <div className="container">
        <div className="row">
          <div className="col-60">
            <a href="/">{t("title")}</a>
          </div>
          <div className="col-40 text-right nav">
            <small>{t("lang")}</small>
            <button className="ml-1 btnSec btn btnSm" onClick={() => changeLanguage("en")}>{t("EN")}</button>
            <button className="btnSec btn btnSm" onClick={() => changeLanguage("es")}>{t("ES")}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
