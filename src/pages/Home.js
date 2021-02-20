import { useTranslation, withTranslation, Trans } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="home">
     <h1>{t("home.title")}</h1>
     <p>{t("home.desc")}</p>
    </div>
  )
}

export default Home;
