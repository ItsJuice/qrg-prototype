/** @jsxImportSource @emotion/react */
import Header from './components/Header';
import SidePanel from './components/SidePanel';
import { useState, useRef, useEffect } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import Home from "./pages/Home";
import Range from "./pages/Range";
import { css } from '@emotion/react';

const AppCss = css`
  font-family: sans-serif;
  position: relative;
  background: white;
  @media (min-width: 900px) {
    padding-left: 268px;
  } 
`;

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const [refCurr, setRefCurr] = useState();
  const styleRef = useRef();

  const myCache = createCache({
    key: 'qrg',
    container: refCurr,
    prepend: true
  });

  useEffect(() => {
    setRefCurr(styleRef.current);
  }, []);

  const handleMenuToggle = () => {
    setDrawerOpen(!drawerOpen);
  }

  const selectRange = (id) => {
    setSelectedRange(id);
  }

  return (
    <div ref={styleRef}>
      <CacheProvider value={myCache}>
        <div css={AppCss}>
          <Header handleMenuToggle={handleMenuToggle} />
          <SidePanel
            drawerOpen={drawerOpen}
            toggleMenu={handleMenuToggle}
            selectRange={selectRange}
            container={refCurr}
          />
          {selectedRange ? (
            <Range range={selectedRange} />
          ):(
            <Home />
          )}
        </div>
      </CacheProvider>
    </div>
  )
}

export default App;
