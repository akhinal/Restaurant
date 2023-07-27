import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Cards({data}) {
  return (
    <Container>
        <Row>
    
            {
                data.map(i=>(
                    
            
                <Col xs={12} sm={6} md={4} lg={3} xl={3} >
                    <Card  className='ms-2 mt-4 mb-4 border border-danger ' style={{height:"400px"}} >
                        <Card.Img className='p-2 ' style={{height:"300px",width:"100%"}} variant="top" src={i.photograph} />
                        <Card.Body>
                            <Card.Title>{i.name}</Card.Title>
                            <Card.Text className='text-light'>
                            {i.address}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                </Col>
    
                   
                ))
            }
    
          
        </Row>
    </Container>
  )
}

export default Cards