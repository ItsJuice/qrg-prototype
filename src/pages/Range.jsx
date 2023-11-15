import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Statccordion from '../components/Accordion';

function Range() {
    const { id }  = useParams();
    const [rangeData, setRangeData] = useState();
    const url = `https://quick-reference-demo-8b88a82c8784.herokuapp.com/v1/model_ranges/${id}/quick_reference`

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          const rangeId = id.toUpperCase();
          setRangeData(json[rangeId]);
          
        } catch (error) {
          console.log("error", error);
        }
      }
      fetchData();
    }, []);

    return (
      <div className="page-container">
        {rangeData &&
          <div className="range-info">
            <section>
              <h2>{rangeData.rangeName}</h2>
              {rangeData.models.map((model)=>{
                return (
                  <Statccordion key={model.code} data={model} />
                )
              })}
            </section>
            
            {/* <section>
              <div className="split">
                  <div className="col">
                    <h3 className="range-info__title">Features</h3>
                    <ul>
                      {rangeData.features.map((feature) => {
                        return (
                          <li key={feature}>{feature}</li>
                        )
                      })}
                    </ul>
                  </div>
                  <div className="col">
                    <h3 className="range-info__title">Packages</h3>
                    <ul>
                      {rangeData.packages.map((item) => {
                        return (
                          <li key={item}>{item}</li>
                        )
                      })}
                    </ul>
                  </div>
              </div>
            </section> */}

          </div>
        }
      </div>
    )
  }
  
  export default Range;