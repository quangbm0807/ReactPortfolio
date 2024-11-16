import { Card, Timeline } from 'antd';
import { useSpring, animated } from 'react-spring';

const Education: React.FC = () => {
    const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

    return (
        <animated.div style={fadeIn} id="education">
            <Card title="Education">
                <Timeline mode="alternate">
                    <Timeline.Item>
                        <h3>Bachelor of Science in Computer Science</h3>
                        <p>University of Example, 2018 - 2022</p>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                        <h3>High School Diploma</h3>
                        <p>Example High School, 2015 - 2018</p>
                    </Timeline.Item>
                </Timeline>
            </Card>
        </animated.div>
    );
};

export default Education;