import React from "react";
import "./editor.css";

const editor = props => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-6">
      <div className="card editor">
        <div className="card-header">Markdown Editor</div>
        {/* <div className="card-body"> */}
          <textarea
            name="editor"
            id="editor"
            value={props.editorValue}
            onChange={props.handleChange}
          />
        {/* </div> */}
      </div>
    </div>
  );
};

export default editor;
