import { useTranslation } from 'react-i18next';
import Actions from '../components/Actions';

const Question5 = (props) => {
    const {t, i18n} = useTranslation()
  return (
    <div className="question">
        <h2>{t("question5.title")}</h2>
        <p>{t("question5.desc")}</p>
        <div className=" actions">
          <label htmlFor="a" className="btn btnOut">
            <input 
            type="radio" 
            id="a" 
            name="question5" 
            value={props.getState("question5", "a")}
            onChange={props.handleChange}/> 
            {t("options.a")}
          </label>
          <label htmlFor="b" className="btn btnOut">
            <input 
            type="radio" 
            id="b" 
            name="question5" 
            value={props.getState("question5", "b")}
            onChange={props.handleChange}/> 
            {t("options.b")}
          </label>
          <label htmlFor="c" className="btn btnOut">
            <input 
            type="radio" 
            id="c" 
            name="question5" 
            value={props.getState("question5", "c")}
            onChange={props.handleChange}/> 
            {t("options.c")}
          </label>
          <label htmlFor="d" className="btn btnOut">
            <input 
            type="radio" 
            id="d" 
            name="question5" 
            value={props.getState("question5", "d")}
            onChange={props.handleChange}/> 
            {t("options.d")}
          </label>
        </div>
    </div>
  )
}

export default Question5;
