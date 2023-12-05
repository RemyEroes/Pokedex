import { useContext, useEffect } from 'react';
import { OpenCardContext } from '../contexts/OpenCardContext'; // Importez votre contexte ici


const useOpenCard = (callback) => {

  const [openCardValue , openCardfun ,closeCard] = useContext(OpenCardContext);

  useEffect(() => {
    if (callback) {
      callback(openCard);
    }
  }, [openCard, callback]);
};

export default useOpenCard;