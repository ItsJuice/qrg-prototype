/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { blue } from '../vars';

export default function SideMenu({ selectRange }) {
  const [selectedSeries, setSelectedSeries] = useState();
  const [navData, setNavData] = useState();
  const url = "https://quick-reference-demo-8b88a82c8784.herokuapp.com/v1/model_ranges/navigation";

  const SideMenuCss = {
    self: css({
      width: '236px',
      height: '100%',
      padding: '16px',
      backgroundColor: '#333',
      color: 'white'
    }),
    sideMenuGroup: css({
      display: 'flex',
      flexWrap: 'wrap',
      margin: '10px -8px 30px'
    }),
    sideMenuButton: css({
      margin: '10px',
      backgroundColor: 'white',
      color: 'black',
      borderColor: 'transparent',
      '&:hover': {
        backgroundColor: '#ddd',
        borderColor: 'transparent'
      },
      '&.selected': {
        color: 'white',
        backgroundColor: blue
      }
    }),
    sideMenuLink: css({
      display: 'block',
      margin: '10px 0'
    }),
    comingSoon: css`
      margin-top: 40px;
      border-top: 1px solid #ddd;

      h3 {
        margin-top: 35px;
      }

      h4 {
        margin-bottom: 10px;
      }

      p {
        margin: 0 0 10px;
        font-size: 14px;
      }
    `
  }
  
  const handleSeriesClick = (series) => {
    setSelectedSeries(series);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        let json = await response.json();
        json = json.sort((a, b) => {
          if (a.name < b.name) { return -1; }
          if (a.name > b.name) { return 1; }
          return 0;
        });
        setNavData(json);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div css={SideMenuCss.self}>
      <h3 className="sidemenu__heading">Series.</h3>
      {navData && (
        <div css={SideMenuCss.sideMenuGroup}>
          {navData.map((series) => {
            return (
              <Button
                className={`${selectedSeries?.name == series.name ? "selected" : ""}`}
                variant="outlined"
                key={series.name}
                onClick={() => handleSeriesClick(series)}
                css={SideMenuCss.sideMenuButton}
              >
                {series.name}
              </Button>
            )
          })}
        </div>
      )}
      {selectedSeries && (
        <>
          <h3 className="sidemenu__heading">Model Range.</h3>
          <div>
            {selectedSeries.models.map((model) => {
              return (
                <div key={model.name}>
                  <span
                    onClick={() => selectRange(model.name)}
                    style={{ cursor: 'pointer' }}
                    css={SideMenuCss.sideMenuLink}
                  >
                    {model.title}
                  </span>
                </div>
              )
            })}
          </div>
        </>
      )}
      <div css={SideMenuCss.comingSoon}>
        <h3>COMING SOON.</h3>
        <h4>THE iX2 xDrive30 & X2 (U10)</h4>
        <p>SOC: 11 Oct 2023</p>
        <p>SOP: 01 Nov 2023</p>
        <p>LAUNCH: 02 Mar 2024</p>
      </div>
    </div>
  )
}
