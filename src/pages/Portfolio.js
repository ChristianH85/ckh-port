import React, { useState } from "react";
import { Card, Col, Row, Icon, CardTitle } from "react-materialize";
import projects from '../projects'
function Portfolio() {

  return (
    <div>
      <Row>
            {projects.map((data,i)=>{
                return(
                <Col s={12} m={4} >
                    <Card
                    actions={[
                      <a key={i} href={data.live}>
                        Live Link
                      </a>,
                      <a key={i} href={data.github}>
                        Github
                      </a>
                    ]}
                    closeIcon={<Icon>close</Icon>}
                    header={
                      <CardTitle image={data.img}>
                        {data.name}
                      </CardTitle>
                    }
                    revealIcon={<Icon>more_vert</Icon>}
                  >
                  </Card>
                </Col>)
            })}
          {/* <Card
            actions={[
              <a key="1" href="/">
                This is a Link
              </a>,
            ]}
            closeIcon={<Icon>close</Icon>}
            header={
              <CardTitle image="https://materializecss.com/images/sample-1.jpg">
                Card Title
              </CardTitle>
            }
            revealIcon={<Icon>more_vert</Icon>}
          >
            Here is the standard card with an image thumbnail.
          </Card> */}
      </Row>
    </div>
  );
}
export default Portfolio;
