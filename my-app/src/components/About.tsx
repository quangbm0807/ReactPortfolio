// src/components/About.tsx
import { Card } from 'antd';
import { useSpring, animated } from 'react-spring';

const About: React.FC = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <animated.div style={props} id="about">
            <Card title="About Me">
                <p>Information about yourself.</p>
            </Card>
        </animated.div>
    );
};
export default About;