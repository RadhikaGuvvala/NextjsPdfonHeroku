import React from 'react';
import PropTypes from 'prop-types';

const renderPDFFooter = () => (
  
  <div
    id="pageFooter"
    style={{
      fontSize: '20px',
      color: '#666'
    }}
  >
    Inspection Report
  </div>

  
  
);

const renderPDFHeader = () => (
  
  <div
    id="pageFooter"
  >
   <div id="pageHeader">Default header</div>
   
  </div>
 
  
);

const PDFLayout = ({ children }) => (
  <html >
    <head >
      <meta charSet="utf8" />
      <link rel="stylesheet" href="http://localhost:1234/static/pdf.css" />
    </head>
    <body >
      {/* {renderPDFHeader()} */}
      <div >
      {children}
      </div>
     
      {renderPDFFooter()}
     
    </body>
  </html>
);

PDFLayout.propTypes = {
  children: PropTypes.node,
};

export default PDFLayout;
