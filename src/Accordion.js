import React from 'react';
import { ACCORDION_TERM, ACCORDION_DEFINITION } from './constant';
import { DefinitionWrapper, DL, DT, DD, IconOpen } from './styles';
import { useAccordion } from './hooks/useAccordion';
import PropTypes from 'prop-types';

function Accordion({ listActitvies }) {

  const { listActivity, open, onOpen } = useAccordion();

  return (
    <DefinitionWrapper>
      <DL ref={listActivity}>
        {
          listActitvies.map((activity, position) => {
            const idTerm = `${ACCORDION_TERM}${position}`;
            const idDefinition = `${ACCORDION_DEFINITION}${position}`;
            const shouldOpen = open === idTerm;
            const propsDD = {
              tabIndex: shouldOpen ? 0 : -1
            };
            return (
              <>
                <DT
                  id={idTerm}
                  key={position}
                  onClick={onOpen}
                  tabIndex="0">
                  <IconOpen open={shouldOpen} />{activity.term}
                </DT>
                <DD
                  id={idDefinition}
                  {...propsDD}
                  open={shouldOpen}>
                  {activity.definition}
                </DD>
              </>
            )
          })
        }
      </DL>
    </DefinitionWrapper>
  );
}

export { Accordion };

Accordion.propTypes = {
  listActitvies: PropTypes.array.isRequired
}

