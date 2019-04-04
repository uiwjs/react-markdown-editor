import React from 'react';

export default {
  bold: (
    <svg viewBox="0 0 18 18">
      <path className="mde-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z" /> 
      <path className="mde-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z" />
    </svg>
  ),
  italic: (
    <svg viewBox="0 0 18 18"> 
      <line className="mde-stroke" x1="7" x2="13" y1="4" y2="4" /> 
      <line className="mde-stroke" x1="5" x2="11" y1="14" y2="14" /> 
      <line className="mde-stroke" x1="8" x2="10" y1="14" y2="4" />
    </svg>
  ),
  underline: (
    <svg viewBox="0 0 18 18">
      <path className="mde-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3" />
      <rect className="mde-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15" />
    </svg>
  ),
  // tslint:disable-next-line:object-literal-sort-keys
  strike: (
    <svg viewBox="0 0 18 18">
      <line className="mde-stroke mde-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5" />
      <path className="mde-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z" />
      <path className="mde-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z" />
    </svg>
  ),
  olist: (
    <svg viewBox="0 0 18 18">
      <line className="mde-stroke" x1="7" x2="15" y1="4" y2="4" />
      <line className="mde-stroke" x1="7" x2="15" y1="9" y2="9" />
      <line className="mde-stroke" x1="7" x2="15" y1="14" y2="14" />
      <line className="mde-stroke mde-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5" />
      <path className="mde-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z" /> 
      <path className="mde-stroke mde-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156" /> 
      <path className="mde-stroke mde-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109" />
    </svg>
  ),
  ulist: (
    <svg viewBox="0 0 18 18">
      <line className="mde-stroke" x1="6" x2="15" y1="4" y2="4" />
      <line className="mde-stroke" x1="6" x2="15" y1="9" y2="9" />
      <line className="mde-stroke" x1="6" x2="15" y1="14" y2="14" />
      <line className="mde-stroke" x1="3" x2="3" y1="4" y2="4" />
      <line className="mde-stroke" x1="3" x2="3" y1="9" y2="9" />
      <line className="mde-stroke" x1="3" x2="3" y1="14" y2="14" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 18 18">
      <line className="mde-stroke" x1="7" x2="11" y1="7" y2="11" />
      <path className="mde-even mde-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z" />
      <path className="mde-even mde-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z" />
    </svg>
  ),
  image: (
    <svg viewBox="0 0 18 18">
      <rect className="mde-stroke" height="10" width="12" x="3" y="4" />
      <circle className="mde-fill" cx="6" cy="7" r="1" />
      <polyline className="mde-even mde-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12" />
    </svg>
  ),
  quote: (
    <svg viewBox="0 0 18 18">
      <rect className="mde-fill mde-stroke" height="3" width="3" x="4" y="5" />
      <rect className="mde-fill mde-stroke" height="3" width="3" x="11" y="5" />
      <path className="mde-even mde-fill mde-stroke" d="M7,8c0,4.031-3,5-3,5" />
      <path className="mde-even mde-fill mde-stroke" d="M14,8c0,4.031-3,5-3,5" />
    </svg>
  ),
  preview: (
    <svg width="32" height="32" viewBox="0 0 32 32">
      <path d="M0 16c3.037-5.864 9.058-9.802 16-9.802s12.963 3.938 15.953 9.703l0.047 0.1c-3.037 5.864-9.058 9.802-16 9.802s-12.963-3.938-15.953-9.703l-0.047-0.1zM16 22.531c3.607 0 6.531-2.924 6.531-6.531s-2.924-6.531-6.531-6.531v0c-3.607 0-6.531 2.924-6.531 6.531s2.924 6.531 6.531 6.531v0zM16 19.265c-1.804 0-3.265-1.461-3.265-3.265s1.461-3.265 3.265-3.265v0c1.804 0 3.265 1.461 3.265 3.265s-1.461 3.265-3.265 3.265v0z" />
    </svg>
  ),
};
