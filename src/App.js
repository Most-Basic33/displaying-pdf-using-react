import React from "react";

import SinglePagePDFViewer from "./components/pdf/single-page";
//import AllPagesPDFViewer from "./components/pdf/all-pages";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
 
import resume from './resume.pdf'

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h4>Single Page</h4>
      <SinglePagePDFViewer pdf={resume} />

      <hr />

      <h4>All Pages</h4>
      <div className="all-page-container">
         
      </div>

      <hr />
    </div>
  );
}
