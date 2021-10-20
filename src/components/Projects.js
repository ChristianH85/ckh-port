import React from 'react'
import { Card, Col, Icon } from "react-materialize";
import projects from '../projects'
function Projects(){
    return(
        <>
            {projects.map((data,i)=>{
                return(
                <Col s={12} m={4}  key={data.name} >
                    <Card 
                    className='proCard'
                    actions={[
                    <a key={i} href={data.live}>
                        Live Link
                    </a>,
                    <a key={i+1} href={data.github}>
                        Github
                    </a>
                    ]}
                    // closeIcon={<Icon>close</Icon>}
                    // header={
                    // <CardTitle image={data.img} loading="lazy">
                    //     {data.name}
                    // </CardTitle>
                    // }
                    revealIcon={<Icon>more_vert</Icon>}
                >
                <img src={data.img} alt={data.name}className='cardImg' loading="lazy"/>
                {data.description}
                </Card>
                </Col>)
            })}
        </>
    )
}
export default Projects