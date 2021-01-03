import React from 'react';
import { ACCORDION_TERM, ACCORDION_DEFINITION } from './constant';
import { useAccordion } from './hooks/useAccordion';
import PropTypes from 'prop-types';

const Accordion = ({ listActitvies, style, platform }) => {

  const { listActivity, open, onOpen } = useAccordion({ platform });

  const device = style;

  return (
    <device.DefinitionWrapper>
      <device.DL ref={listActivity}>
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
                <device.DT
                  id={idTerm}
                  key={position}
                  onPress={onOpen(idTerm)}
                  onClick={onOpen(idTerm)}
                  tabIndex="0">
                  <device.IconOpen open={shouldOpen} /><device.DText>{activity.term}</device.DText>
                </device.DT>
                <device.DD
                  id={idDefinition}
                  {...propsDD}
                  open={shouldOpen}>
                  {activity.definition}
                </device.DD>
              </>
            )
          })
        }
      </device.DL>
    </device.DefinitionWrapper>
  );
}

Accordion.propTypes = {
  listActitvies: PropTypes.array.isRequired,
  style: PropTypes.any.isRequired,
  platform: PropTypes.string.isRequired
}

export default Accordion;