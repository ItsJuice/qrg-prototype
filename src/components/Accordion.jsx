/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { breakpoint, blue } from '../vars';

const AccordionCss = {
  self: css`
    border-radius: 0 !important;
    box-shadow: none;

    &:before {
      content: none;
    }

    svg {
      path {
        fill: ${blue};
      }
    }
  `,
  col1: css`
    display: inline-block;
    width: 200px;

    @media screen and (min-width: ${breakpoint}) {
      width: 300px;
    }
  `,
  title: css`
    margin: 30px 0 10px;
  `
}

function Statccordion(props) {
  const { data } = props;

  function formatCurrency(val) {
    const number = new Intl.NumberFormat("en-gb");
    return number.format(val);
  }

  return (
    <Accordion css={AccordionCss.self}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3"
      >
        <h3 css={AccordionCss.title}>{data.description}</h3>
      </AccordionSummary>
      <AccordionDetails>
        <p>
          <span css={AccordionCss.col1}>Price</span>
          <span>£{formatCurrency(data.price)}</span>
        </p>
        <p>
          <span css={AccordionCss.col1}>Power</span>
          <span>{data.power_output}</span>
        </p>
        <p>
          <span css={AccordionCss.col1}>Performance(0-62)</span>
          <span>{data.null_to_100kmh} sec</span>
        </p>
        <p>
          <span css={AccordionCss.col1}>Transmission</span>
          <span className="add-casing">{data.transmission}</span>
        </p>
        <p>
          <span css={AccordionCss.col1}>Fuel Type</span>
          <span className="add-casing">{data.vehicle_type}</span>
        </p>
        {data.energy_consumption_wltp && (
        <p>
          <span css={AccordionCss.col1}>Electric Consumption(WLTP)</span>
          <span>{data.energy_consumption_wltp} miles/kwh</span>
        </p>
        )}
        {data.electric_range_wltp && (
        <p>
          <span css={AccordionCss.col1}>Electric Range(WLTP)</span>
          <span>{data.electric_range_wltp}</span>
        </p>
        )}
      </AccordionDetails>
    </Accordion>
  )
}
  
export default Statccordion;