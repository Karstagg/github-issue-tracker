import React from "react"
import "../css/styles.css"
import Issue from "./issue"

const CardArea = (props) => {
  let issues = props.issues;
  let issueState = props.issueState;
  let issueArr = []
  if(issueState === "all") {
   issueArr = issues;
  } else if (issueState ==="open" || issueState ==="closed"){
    for (let issue of issues) {
      if (issueState === issue.state) {
       issueArr.push(issue)
      }
    }
  } else {
    for (let issue of issues) {
      if (issue.pull_request) {
        issueArr.push(issue)
      }
    }
  }
  return (
    <div className="card-area">
      <div className="row">
        {
          issueArr.map((issue, index) => (
            <div key={index} className="card-container col-md-4">
              <Issue issueState={issueState} issue={issue}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}


export default CardArea