import React,{lazy,Suspense} from "react";
import {Row} from 'react-materialize'
const Projects = lazy(() => import('../components/Projects'));
function Portfolio() {
  const renderLoader = () => <p>Loading</p>;
  return (
    <div>
      <Row>
        <Suspense fallback={renderLoader()}>
          <Projects/>
        </Suspense> 
      </Row>
    </div>
  );
}
export default Portfolio;
