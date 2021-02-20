import { useTranslation } from 'react-i18next';

const Answer = (props) => {
    const {t, i18n} = useTranslation()
  return (
    <div className="question">
        <h2>{t("answer.title")}</h2>
        <p>
            <b>Name:</b> {props.state.question1}
        </p>
        <p>
            <b>Name:</b> {props.state.question2}
        </p>
        <p>
            <b>Name:</b> {props.state.question3}
        </p>
        <p>
            <b>Name:</b> {props.state.question4}
        </p>
        <p>
            <b>Name:</b> {props.state.question5}
        </p>
    </div>
  )
}

export default Answer;
