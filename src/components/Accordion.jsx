import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Statccordion(props) {
  const { data } = props;

  function formatCurrency(val) {
    const number = new Intl.NumberFormat("en-gb");
    return number.format(val);
  }

  return (
    <Accordion className="range-info__accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3"
      >
        <h3 className="range-info__title">{data.description}</h3>
      </AccordionSummary>
      <AccordionDetails>
        <p>
          <span className="range-info__col1">Price</span>
          <span>£{formatCurrency(data.price)}</span>
        </p>
        <p>
          <span className="range-info__col1">Power</span>
          <span>{data.power_output}</span>
        </p>
        <p>
          <span className="range-info__col1">Performance(0-62)</span>
          <span>{data.null_to_100kmh} sec</span>
        </p>
        <p>
          <span className="range-info__col1">Transmission</span>
          <span className="add-casing">{data.transmission}</span>
        </p>
        <p>
          <span className="range-info__col1">Fuel Type</span>
          <span className="add-casing">{data.vehicle_type}</span>
        </p>
        {data.energy_consumption_wltp && (
          <p>
          <span className="range-info__col1">Electric Consumption(WLTP)</span>
          <span>{data.energy_consumption_wltp} miles/kwh</span>
        </p>
        )}
        {data.electric_range_wltp && (
          <p>
          <span className="range-info__col1">Electric Range(WLTP)</span>
          <span>{data.electric_range_wltp}</span>
        </p>
        )}
      </AccordionDetails>
    </Accordion>
  )
}
  
export default Statccordion;