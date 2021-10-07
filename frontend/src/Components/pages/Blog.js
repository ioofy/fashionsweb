import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Container, Row, ListGroup, Col, Card } from 'react-bootstrap'
import Badge from 'react-simple-badges'
import '../../style/Blog.css'
import blog from '../data/blog'
import Footer from '../Footer/Footer'
import Meta from '../Stuff/Meta'

const Blog = () => {
    return (
    <>
        <Meta title='Fashions | Blog - Our Development'/>
        <Navbar/>
        <Container className='blog-container'>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush' className='developer-wrapper-content'>
                        <ListGroup.Item>
                            <h1>Meet Our Developer Team</h1>
                            <p>Ayo kenalan dengan developer web yang bekerja dibalik layar web ini😎</p>
                            <span>October 06, 2021 by Admin</span>
                        </ListGroup.Item>

                        {blog.map(item => (

                            <div key={item.id}>
                                <ListGroup.Item className='content-blog'>
                                    <div>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className='developer-name'>
                                        <p>{item.name}</p>
                                        <p style={{marginTop: '-20px', fontSize: '15px', fontWeight: 'normal'}}>as {item.job}</p>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className='devs-social-media'>
                                <div className='developer-socmed'>
                                    <div className="icon">
                                        <a href={item.githubURL} target="_blank" aria-label="github" rel="noopener noreferrer"><i className="fab fa-github" data-toggle="tooltip" title="Github"></i></a>
                                        <a href={item.facebookURL} target="_blank" aria-label="facebook" rel="noopener noreferrer"><i className="fab fa-facebook" data-toggle="tooltip" title="Facebook"></i></a>
                                        <a href={item.linkedinURL} target="_blank" aria-label="linked-in" rel="noopener noreferrer"><i className="fab fa-linkedin"data-toggle="tooltip" title="Linkedin"></i></a>
                                    </div>
                                </div>
                                </ListGroup.Item>
                                <ListGroup.Item className='content-description'>
                                    <div className="developer-content-description">
                                        <p>{item.description}</p>
                                    </div>
                                </ListGroup.Item>
                            </div>
                        ))}
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card className='topic-widget'>
                        <ListGroup variant='flush'>
                            <ListGroup.Item className='widget'>
                                <h3>Hot Topic in Programming 👩🏻‍💻</h3>
                                <div className='badges'>
                                    <Badge name="React" label="React" backgroundColor="#20232A" style={{paddingRight: 10, paddingTop: 10}} />
                                    <Badge name="Vue.js" label="Vue.js" backgroundColor="#41B883" style={{paddingRight: 10, paddingTop: 10}} />
                                    <Badge name="Python" label="Python" backgroundColor="#14354C" style={{paddingRight: 10, paddingTop: 10}}/>
                                    <Badge name="PHP" label="PHP" backgroundColor="#777BB4" style={{paddingRight: 10, paddingTop: 10}}/>
                                    <Badge name="Svelte" label="Svelte" backgroundColor="#FF3E00" style={{paddingRight: 10, paddingTop: 10}}/>
                                    <Badge name="Angular" label="Angular" backgroundColor="#DD0031" style={{paddingRight: 10, paddingTop: 10}}/>
                                    <Badge name="Django" label="Django" backgroundColor="#092E20" style={{paddingRight: 10, paddingTop: 10}}/>
                                    <Badge name="Flutter" label="Flutter" backgroundColor="#02569B" style={{paddingRight: 10, paddingTop: 10}}/>
                                    <Badge name="Dart" label="Dart" backgroundColor="#0175C2" style={{paddingRight: 10, paddingTop: 10}}/>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </>
    )
}

export default Blog
