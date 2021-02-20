import { useTranslation } from 'react-i18next';
// import Actions from '../components/Actions';

const Question3 = (props) => {
    const {t, i18n} = useTranslation()
  return (
    <div className="question">
        <h2>{t("question3.title")}</h2>
        <p>{t("question3.desc")}</p>
        <div className=" actions">
          <label htmlFor="a" className="btn btnOut">
            <input 
            type="radio" 
            id="a" 
            name="question3" 
            value={props.getState("question3", "a")}
            onChange={props.handleChange}/> 
            {t("optionsgag.a")}
          </label>
          <label htmlFor="b" className="btn btnOut">
            <input 
            type="radio" 
            id="b" 
            name="question3" 
            value={props.getState("question3", "b")}
            onChange={props.handleChange}/> 
            {t("optionsgag.b")}
          </label>
          <label htmlFor="c" className="btn btnOut">
            <input 
            type="radio" 
            id="c" 
            name="question3" 
            value={props.getState("question3", "c")}
            onChange={props.handleChange}/> 
            {t("optionsgag.c")}
          </label>
          <label htmlFor="d" className="btn btnOut">
            <input 
            type="radio" 
            id="d" 
            name="question3" 
            value={props.getState("question3", "d")}
            onChange={props.handleChange}/> 
            {t("optionsgag.d")}
          </label>
        </div>
    
    </div>
  )
}

export default Question3;
