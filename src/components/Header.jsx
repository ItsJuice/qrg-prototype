/** @jsxImportSource @emotion/react */
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { css } from '@emotion/react';

const QRGHeader = {
  self: css`
    display: flex;
    height: 80px;
    align-items: center;
    padding: 0 30px;
    border-bottom: 1px solid #ccc;
  `,
  logo: css`
    flex-grow: 1;
    text-align: right;
    img {
      width: 50px;
      height: 50px;
    }
  `
}

export default function Header({ handleMenuToggle }) {
  return (
    <div css={QRGHeader.self}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleMenuToggle}
        sx={{ display: { xs: 'inline-flex', md: 'none' }, marginRight: '20px' }}
      >
        <MenuIcon />
      </IconButton>
      <h1>Quick Reference Guide.</h1>
      <div css={QRGHeader.logo}>
        <img src="https://juice-static-hosting.s3.eu-west-1.amazonaws.com/jim-test/qrg/dist/assets/logo.svg" alt="BMW Logo" />
      </div>
    </div>
  );
}
