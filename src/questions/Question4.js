import { useTranslation } from 'react-i18next';
import Actions from '../components/Actions';

const Question4 = (props) => {
    const {t, i18n} = useTranslation()
  return (
    <div className="question">
        <h2>{t("question4.title")}</h2>
        <p>{t("question4.desc")}</p>
        <div className=" actions">
          <label htmlFor="a" className="btn btnOut">
            <input 
            type="radio" 
            id="a" 
            name="question4" 
            value={props.getState("question4", "a")}
            onChange={props.handleChange}/> 
            {t("options.a")}
          </label>
          <label htmlFor="b" className="btn btnOut">
            <input 
            type="radio" 
            id="b" 
            name="question4" 
            value={props.getState("question4", "b")}
            onChange={props.handleChange}/> 
            {t("options.b")}
          </label>
          <label htmlFor="c" className="btn btnOut">
            <input 
            type="radio" 
            id="c" 
            name="question4" 
            value={props.getState("question4", "c")}
            onChange={props.handleChange}/> 
            {t("options.c")}
          </label>
          <label htmlFor="d" className="btn btnOut">
            <input 
            type="radio" 
            id="d" 
            name="question4" 
            value={props.getState("question4", "d")}
            onChange={props.handleChange}/> 
            {t("options.d")}
          </label>
        </div>
    </div>
  )
}

export default Question4;
