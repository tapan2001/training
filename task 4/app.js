const fetchData = async () => {
  try {
    const res = await fetch("data.json");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(`The error is ${e}`);
  }
};

let data = fetchData()
  .then((res) => {
    console.log(res.dashboard);
    let str = "";
    for (let el of res.dashboard) {
      str += `<div class="card">
      <div class="box1"><img src=${el.img} alt="" /></div>
      <div class="box2">
        <div class="box2-title">
          <h2>${el.title}</h2>
          ${
            el.favourite
              ? `<img id="icon-favourite" src="icons/favourite.svg" alt="" />`
              : ""
          }
        </div>
        <div class="box2-subject">
          ${el.subject ? `<span>Physics</span><span>|</span>` : ""}  
          ${el.grade ? `<span>Grade ${el.grade}</span>` : ""}
          ${el.increment ? `+${el.increment}` : ""}
        </div>
        <div class="box2-detail">
          ${el.units ? `<span>${el.units}</span><span> Units</span>` : ""}
          ${el.lessons ? `<span>${el.lessons}</span> <span>Lessons</span>` : ""}
          ${el.topics ? `<span>${el.topics}</span><span>Topics</span>` : ""}
        </div>
        <div class="box2-teacher">
          <select name="class" id="class">
            <option value="${
              el.classes[0] ? `${el.classes[0]}` : "No classes"
            }">${el.classes[0] ? `${el.classes[0]}` : "No classes"}</option>
            <option value="${
              el.classes[1] ? `${el.classes[1]}` : "No classes"
            }">${el.classes[1] ? `${el.classes[1]}` : "No classes"}</option>
            <option value="${
              el.classes[2] ? `${el.classes[2]}` : "No classes"
            }">${el.classes[2] ? `${el.classes[2]}` : "No classes"}</option>
          </select>
        </div>
        <div class="box2-student">
        ${el.students ? `<span>${el.students} Students</span>` : ""}
        ${el.date ? `<span>${el.date}</span>` : ""}
        </div>
      </div>
      <div class="card-icons box3">
        <img id="icon-preview" src="icons/preview.svg" alt="" style="opacity:${
          el.iconPreviewOpacity
        }"/>
        <img id="icon-course" src="icons/manage course.svg" alt="" style="opacity:${
          el.iconCourseOpacity
        } "/>
        <img id="icon-submission" src="icons/grade submissions.svg" alt="" style="opacity:${
          el.iconSubmissionOpacity
        }"/>
        <img id="icon-report" src="icons/reports.svg" alt="" style="opacity:${
          el.iconReportOpacity
        } "/>
      </div>
    </div>`;
      console.log(`${el.title}  ${el.iconCourseOpacity}`);
      document.querySelector(".card-container").innerHTML = str;
    }
  })
  .catch((e) => console.log(e));
