import React from "react";
import PropTypes from "prop-types";
import dummyPreview from "../assets/icon/dummyPreview.svg";

import timestampToRelative from "../utils/timestampToRelative";
import CasusLogo from "../assets/icon/casus.svg";

export default function Template({ template: { id, title, date, state } }) {
  return (
    <div className="template-item">
      <div className="template">
        <div className="template-image">
          <img alt="template preview loading" src={dummyPreview} />
        </div>
        <div className="template-body">
          <div className="title">{title}</div>{" "}
          <div className="template-footer">
            <div className="casus-logo">
              <img alt="casus logo" src={CasusLogo}></img>
            </div>
            <div className="date">{timestampToRelative(date)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Template.propTypes = {
  /** Composition of the task */
  template: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string.isRequired,
    /** Title of the task */
    title: PropTypes.string.isRequired,
    /** Date of the task **/
    date: PropTypes.string.isRequired,
  }),
};
