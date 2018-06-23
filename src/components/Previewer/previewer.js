import React from "react";
import marked from "marked";
import "./previewer.css";

const getMarkdownText = text => {
  var rawMarkup = marked(text, {renderer:renderer});
  return { __html: rawMarkup };
};

marked.setOptions({
  breaks: true
});
const renderer = new marked.Renderer();

renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const previewer = props => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-6">
      <div className="card previewer">
        <div className="card-header">Markdown Preview</div>
        <div className="card-body">
          <div
            id="preview"
            dangerouslySetInnerHTML={getMarkdownText(props.markdownText)}
          />
        </div>
      </div>
    </div>
  );
};

export default previewer;
