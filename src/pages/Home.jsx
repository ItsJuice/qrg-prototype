/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const HomeCss = {
  hero: css`
    @media (min-width: 900px) {
      font-size: 50px;
    }
  `,
  image: css`
    width: 100%;
  `,
  grid: css`
    margin: 20px;
    @media screen and (min-width: 900px) {
      display: flex;
    }
  `,
  box: css`
    margin: 0 0 30px 0;
    cursor: pointer;
    @media screen and (min-width: 900px) {
      width: 33%;
      margin: 20px;
    }
    img {
      width: 100%;
    }
  `,
  header: css`
    margin-top: 10px;
  `,
  svg: css`
    vertical-align: middle;
    color: #1c69d4;
  `
}

function Home() {
  return (
    <>
      <div css={HomeCss.hero}>
        <img css={HomeCss.image} src="https://juice-static-hosting.s3.eu-west-1.amazonaws.com/jim-test/qrg/dist/assets/Hero.png" alt="BMW - QRG" />
      </div>
      <div css={HomeCss.grid}>
        <div css={HomeCss.box}>
          <img src="https://juice-static-hosting.s3.eu-west-1.amazonaws.com/jim-test/qrg/dist/assets/pic3.png" alt="" />
          <h3 css={HomeCss.header}><ChevronRightIcon css={HomeCss.svg} /> My BMW App</h3>
        </div>
        <div css={HomeCss.box}>
          <img src="https://juice-static-hosting.s3.eu-west-1.amazonaws.com/jim-test/qrg/dist/assets/pic1.png" alt="" />
          <h3 css={HomeCss.header}><ChevronRightIcon css={HomeCss.svg} /> Upcoming Models</h3>
        </div>
        <div css={HomeCss.box}>
          <img src="https://juice-static-hosting.s3.eu-west-1.amazonaws.com/jim-test/qrg/dist/assets/pic2.png" alt="" />
          <h3 css={HomeCss.header}><ChevronRightIcon css={HomeCss.svg} /> Charging Info</h3>
        </div>
      </div>
    </>
  )
}
  
export default Home;