//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="header" contentEditable="true" spellCheck="false">
      Operating Systems for Desktops:
    </h1>
    <div>
      <img
        class="os"
        src="https://cdn.vox-cdn.com/uploads/chorus_image/image/66098561/mswindows2_2040.0.0.jpg"
      />
      <img
        class="os"
        src="https://www.techrepublic.com/a/hub/i/r/2017/12/11/9fac1c13-984f-429c-83a8-1a7a286271ae/resize/1200x/3a6056002ad89cefbd930cd12fb78e0b/macoshero.jpg"
      />
      <img
        class="os"
        src="https://bloximages.newyork1.vip.townnews.com/redandblack.com/content/tncms/assets/v3/editorial/4/59/45940eb2-5403-11e9-a843-db0e4491cc90/5ca13d8453042.image.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
