import React from "react";
import PropTypes from "prop-types";
import { ReactQueryTemplateList, RTKTemplateList, TemplateList } from "../components/TemplateList";

export function TemplatesPage() {
  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">CASUS</span>
        </h1>
      </nav>
      <div>
        <TemplateList />
        <RTKTemplateList />
        <ReactQueryTemplateList/>
      </div>
    </div>
  );
}

TemplatesPage.propTypes = {
  /** The error message */
  error: PropTypes.string,
};

TemplatesPage.defaultProps = {
  error: null,
};