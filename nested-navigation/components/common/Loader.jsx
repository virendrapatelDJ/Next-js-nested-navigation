import React, { Fragment } from "react";

function Loader() {
  return (
    <div class="d-flex justify-content-center">
      <div
        class="spinner-border"
        role="status"
        style={{
          height: "5rem",
          width: "5rem",
        }}
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export { Loader };
