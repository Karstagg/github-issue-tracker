import React from "react"
import {
  Card, CardHeader, CardBody,
  CardTitle, CardText,
} from "reactstrap"
import { Link } from "gatsby"

const Issue = (props) => {
  let issue = props.issue
  console.log(issue.updated_at)
  return (
    <div>
      <Link to={"/"}>
        <Card style={{height: 300}}>
          <CardHeader>{issue.number}</CardHeader>
          <CardBody>
            <CardTitle>{issue.title.length > 200 ? issue.title.substring(0, 200) +  "..." : issue.title.substring(0, 200)}</CardTitle>
          </CardBody>
        </Card>
      </Link>
    </div>
  )
}

export default Issue