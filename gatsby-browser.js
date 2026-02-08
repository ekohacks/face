/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import './src/styles/global.css'

// gatsby-ssr.js & gatsby-browser.js
// gatsby-browser.js / gatsby-ssr.js
import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
