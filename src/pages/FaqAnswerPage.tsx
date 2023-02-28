import { useReducer, useRef } from "react";
import FaqAnswerListAccordion from "../modules/faq-answer/FaqAnswerListAccordion";
import FaqAnswerNav from "../modules/faq-answer/FaqAnswerNav";
import "../modules/faq-answer/GlobalFaqAnswer.scss";

const FaqAnswerPage = () => {
  const reservationQuery = useRef(null);
  const cancelChange = useRef(null);
  const payment = useRef(null);
  const checkIn = useRef(null);
  const receipt = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  const idScrollToView = {
    reservationQuery,
    cancelChange,
    payment,
    checkIn,
    receipt,
  };
  return (
    <div className="container faq-answer">
      <div className="faq-answer--left">
        <FaqAnswerNav
          idScrollToView={idScrollToView}
          scrollToSection={scrollToSection}
        />
      </div>
      <div className="faq-answer--right">
        <FaqAnswerListAccordion idScrollToView={idScrollToView} />
      </div>
    </div>
  );
};

export default FaqAnswerPage;
