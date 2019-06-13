import React from "react"
import {
  Card, CardHeader, CardBody,
  CardTitle, CardFooter,
} from "reactstrap"
import { Link } from "gatsby"
import CardItem from "./card-items"

const Issue = (props) => {
  let issue = props.issue
  let labels = [];
  if (issue.labels.length) {

    for (let item in issue.labels) {

      labels.push(issue.labels[item].name)

    }
  }
  return (
    <div>
      <Link style={{textDecoration: "none"}} to={"/"}>
        <Card className="issue-card">
          <CardHeader className={issue.pull_request ? "pull" : issue.state}>{issue.number}</CardHeader>
          <CardBody>
            <CardTitle>{issue.title.length > 200 ? issue.title.substring(0, 200) + "..." : issue.title}</CardTitle>
          </CardBody>
          <CardFooter style={{ backgroundColor: "#ffffff", borderColor: "#ffffff" }}>
            { labels &&
              <div className="row">
              {labels.map((label, index) => (
                <CardItem key={index} text={label}/>
              ))}
            </div>
            }
          </CardFooter>
        </Card>
      </Link>
    </div>
  )
}

export default Issue