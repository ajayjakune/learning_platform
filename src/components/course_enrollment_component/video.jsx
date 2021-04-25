import React from 'react';
import { Container, ResponsiveEmbed } from 'react-bootstrap';

function Video(props) {
    return <Container>
        <ResponsiveEmbed aspectRatio="16by9">
            <video key={props.video} className="p-2" controls>
                <source  src={props.video} type="video/mp4" />
            video tag is not supported.
        </video>
        </ResponsiveEmbed>
    </Container>;
}

export default Video;