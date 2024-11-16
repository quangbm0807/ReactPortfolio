import { Card, Row, Col } from 'antd';
import { useSpring, animated } from 'react-spring';

const Projects: React.FC = () => {
    const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 400 });

    const projects = [
        {
            title: 'Project 1',
            description: 'A brief description of Project 1.',
        },
        {
            title: 'Project 2',
            description: 'A brief description of Project 2.',
        },
        {
            title: 'Project 3',
            description: 'A brief description of Project 3.',
        },
    ];

    return (
        <animated.div style={fadeIn} id="projects">
            <h2>Projects</h2>
            <Row gutter={[16, 16]}>
                {projects.map((project, index) => (
                    <Col key={index} xs={24} sm={12} md={8}>
                        <Card title={project.title}>
                            <p>{project.description}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </animated.div>
    );
};

export default Projects;