import { useTranslation } from 'react-i18next';

const Question1 = (props) => {
    const {t, i18n} = useTranslation()
  return (
    <div className="question">
        <h2>{t("question1.title")}</h2>
        <div className=" actions">
          <label htmlFor="a" className="btn btnOut">
            <input 
            type="radio" 
            id="a" 
            name="question1" 
            value={props.getState("question1", "a")}
            onChange={props.handleChange}/> 
            {t("options.a")}
          </label>
          <label htmlFor="b" className="btn btnOut">
            <input 
            type="radio" 
            id="b" 
            name="question1" 
            value={props.getState("question1", "b")}
            onChange={props.handleChange}/> 
            {t("options.b")}
          </label>
          <label htmlFor="c" className="btn btnOut">
            <input 
            type="radio" 
            id="c" 
            name="question1" 
            value={props.getState("question1", "c")}
            onChange={props.handleChange}/> 
            {t("options.c")}
          </label>
          <label htmlFor="d" className="btn btnOut">
            <input 
            type="radio" 
            id="d" 
            name="question1" 
            value={props.getState("question1", "d")}
            onChange={props.handleChange}/> 
            {t("options.d")}
          </label>
        </div>
    </div>
  )
}

export default Question1;
