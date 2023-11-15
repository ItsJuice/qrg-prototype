import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SideMenu() {
  const [selectedSeries, setSelectedSeries] = useState();
  const [navData, setNavData] = useState();
  const location = window.location.origin;
  const { id }  = useParams();
  const url = "https://quick-reference-demo-8b88a82c8784.herokuapp.com/v1/model_ranges/navigation";
  
  const handleSeriesClick = (series) => {
    setSelectedSeries(series);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setNavData(json);
        
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (id && navData) {
      navData.forEach((series) => {
        series.models.forEach((model) => {
          if (model.name == id) {
            setSelectedSeries(series);
          }
        })
      })
    }
  }, [navData]);

  return (
    <div className="sidemenu">
      <h3 className="sidemenu__heading">Series</h3>
      {navData && (
        <div className="sidemenu__group">
          {navData.map((series) => {
            return (
              <Button
                className={`sidemenu__button ${selectedSeries?.name == series.name ? "selected" : ""}`}
                variant="outlined"
                key={series.name}
                onClick={() => handleSeriesClick(series)}
              >
                {series.name}
              </Button>
            )
          })}
        </div>
      )}
      {selectedSeries && (
        <>
          <h3 className="sidemenu__heading">Model Range</h3>
          <div className="sidemenu__links">
            {selectedSeries.models.map((model) => {
              return (
                <div key={model.name}>
                  <a href={`${location}/${model.name}`} className="sidemenu__link">{model.title}</a>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
