import { useEffect, useRef, useState } from 'react';
import {
    ACCORDION_TERM,
    SPACE_BAR,
    ENTER,
    ARROW_UP,
    ARROW_DOWN
} from '../constant';

const useAccordion = ({ platform }) => {
    let listActivity = useRef();
    const [open, setOpen] = useState(false);
    const isMobile = platform === 'ios' || platform === 'android';

    const onOpen = (term) => {
        return () => {
            setOpen(isMobile ? term : document.activeElement.id);
        }
    };

    if (!isMobile) {
        useEffect(() => {
            if (listActivity && listActivity.current) {
                const TOTAL_TERM = listActivity.current.querySelectorAll('dt').length;

                listActivity.current.addEventListener('keydown', event => {

                    // should open the term definition when the SPACE_BAR or ENTER is clicked
                    const openDefinition = event.keyCode === ENTER || SPACE_BAR.includes(event.keyCode);
                    if (openDefinition) {
                        setOpen(document.activeElement.id);
                    }

                    const currentActiveElement = Number(document.activeElement.id.split('-')[2]);

                    // should open the term definition when the arrow is down
                    if (event.keyCode === ARROW_DOWN) {
                        const nextElement = currentActiveElement + 1;
                        if (nextElement < TOTAL_TERM) {
                            listActivity.current.querySelector(`#${ACCORDION_TERM}${nextElement}`).focus();
                        }
                    }

                    if (event.keyCode === ARROW_UP) {
                        const previousElement = currentActiveElement - 1;
                        if (previousElement >= 0 && previousElement < TOTAL_TERM) {
                            listActivity.current.querySelector(`#${ACCORDION_TERM}${previousElement}`).focus();
                        }
                    }

                });
            }
        }, []);
    }

    return {
        listActivity,
        open,
        onOpen,
    }
}

export { useAccordion };