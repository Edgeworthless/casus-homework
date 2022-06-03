import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Template from "./Template";

import { useDispatch, useSelector } from "react-redux";
import { fetchTemplates } from "../lib/store";
// import { updateTemplateState } from '../lib/store';
import dummyPreview from "../assets/icon/dummyPreview.svg";
import CasusLogo from "../assets/icon/casus.svg";
import { useQuery } from "react-query";
import { getTemplates, useGetTemplatesQuery } from "../lib/api";

export function PureTemplateList({ loading, templates, error }) {
  const events = {};

  const LoadingCard = (
    <div className="loading-template-item">
      <div className="loading-template">
        <div className="loading-template-image">
          <img alt="template preview loading" src={dummyPreview} />
        </div>
        <div className="template-body">
          <div className="glow-text">Loading</div>
          <div className="template-footer">
            <div className="casus-logo">
              <img alt="casus logo" src={CasusLogo}></img>
            </div>
            <div className="glow-text">Loading</div>
          </div>
        </div>
      </div>
    </div>
  );
  if (error) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="loading-template-list">
        {LoadingCard}
        {LoadingCard}
        {LoadingCard}
        {LoadingCard}
        {LoadingCard}
        {LoadingCard}
      </div>
    );
  }
  if (templates?.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no templates</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }
  // const tasksInOrder = [
  //     ...tasks.filter(t => t.state === 'TASK_PINNED'),
  //     ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  // ];
  // const templatesInOrder = templates;
  return (
    <div className="templates-list">
      {templates
        ? templates?.map((template) => (
            <Template key={template.id} template={template} {...events} />
          ))
        : null}
    </div>
  );
}

PureTemplateList.propTypes = {
  /** Checks if it's in loading state */
  loading: PropTypes.bool,
  /** The list of tasks */
  templates: PropTypes.arrayOf(Template.propTypes.template).isRequired,
  /** Check if there's an error */
  error: PropTypes.bool,
};

PureTemplateList.defaultProps = {
  loading: false,
  error: false,
  templates: undefined,
};

/**
 * TemplateList using RTK Query from Redux Toolkit
 * Could be the best approach to keep one single storage handling both server-state and client-state
 */
export function RTKTemplateList() {
  const { data, error, isLoading } = useGetTemplatesQuery(
    "templates",
    getTemplates
  );

  return (
    <PureTemplateList templates={data ? data : []} loading={isLoading} error={error} />
  );
}

/**
 * TemplateList without any server-state management
 * The easiest approach, useful if you want to save preferences locally without mutations or POSTs
 */
export function TemplateList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.templates?.data);

  const isLoading = useSelector((state) => state?.templates?.isLoading);

  const error = useSelector((state) => state?.templates?.error);

  useEffect(() => {
    if (isLoading) {
      dispatch(fetchTemplates());
    }
  }, [dispatch, isLoading]);

  return (
    <PureTemplateList templates={data ? data : []} loading={isLoading} error={error} />
  );
}

/**
 * TemplateList with React Query.
 * The easiest approach if handling mutations and if user preferences (pinned/archived templates in this case)
 * are stored server-side
 */
export function ReactQueryTemplateList() {
  const { data, error, isLoading } = useQuery("templates", getTemplates);

  return (
    <PureTemplateList templates={data ? data : []} loading={isLoading} error={error} />
  );
}