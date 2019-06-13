import React from 'react';
import { Card, Button, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';

const Issue = (props) => {
  let issue = props.issue;
  console.log(props)
  return (
    <div>
      <Card>
        <CardHeader>{issue.number}</CardHeader>
        <CardBody>
          <CardTitle>{issue.title.substring(0,50) + "..."}</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Issue;