import { useEffect, useState } from 'react';
import Statccordion from '../components/Accordion';

function Range({ range }) {
  const [rangeData, setRangeData] = useState();
  const url = `https://quick-reference-demo-8b88a82c8784.herokuapp.com/v1/model_ranges/${range}/quick_reference`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const rangeId = range.toUpperCase();
        setRangeData(json[rangeId]);
        
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData();
  }, [range]);

  return (
    <div className="page-container">
      {rangeData &&
        <div className="range-info" style={{ margin: '0 20px 0 30px' }}>
          <section>
            <h2>{rangeData.rangeName}.</h2>
            {rangeData.models.map((model)=>{
              return (
                <Statccordion key={model.code} data={model} />
              )
            })}
          </section>
        </div>
      }
    </div>
  )
}
  
export default Range;