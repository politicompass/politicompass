import { useTranslation } from 'react-i18next';

const Actions = (props) => {
const {t, i18n} = useTranslation()
const quest = '"'+props.qap+'"';

  return (
      <div className="actions">
          <label htmlFor="a" className="btn btnOut">
            <input 
            type="radio" 
            id="a" 
            name={props.qap} 
            value={props.getState(quest , "a")}
            onChange={props.handleChange}/> 
            {t("options.a")}
          </label>
          <label htmlFor="b" className="btn btnOut">
            <input 
            type="radio" 
            id="b" 
            name={props.qap} 
            value={props.getState(quest , "b")}
            onChange={props.handleChange}/> 
            {t("options.b")}
          </label>
          <label htmlFor="c" className="btn btnOut">
            <input 
            type="radio" 
            id="c" 
            name={props.qap} 
            value={props.getState(quest , "c")}
            onChange={props.handleChange}/> 
            {t("options.c")}
          </label>
          <label htmlFor="d" className="btn btnOut">
            <input 
            type="radio" 
            id="d" 
            name={props.qap} 
            value={props.getState(quest , "d")}
            onChange={props.handleChange}/> 
            {t("options.d")}
          </label>
        </div>
  
  )
}

export default Actions;

{/* <label htmlFor={`a${ props.qap }`} className="btn btnOut"><input type="radio" id={`a${ props.qap }`} name={props.qap} value={`a${ props.qap }`}/> {t("options.a")}</label>
      <label htmlFor={`b${ props.qap }`} className="btn btnOut"><input type="radio" id={`b${ props.qap }`} name={props.qap} value={`b${ props.qap }`}/> {t("options.b")}</label>
      <label htmlFor={`c${ props.qap }`} className="btn btnOut"><input type="radio" id={`c${ props.qap }`} name={props.qap} value={`c${ props.qap }`}/> {t("options.c")}</label>
      <label htmlFor={`d${ props.qap }`} className="btn btnOut"><input type="radio" id={`d${ props.qap }`} name={props.qap} value={`d${ props.qap }`}/> {t("options.d")}</label> */}
