// @flow

import React from 'react';
import { Media } from 'reactstrap';

type Props = {
    image: string,
    title: string,
    desc: string
}

const YTListItem = (props: Props) => {

    return (
        <Media>
            <Media left href="#">
                <img width="120" height="90" src={props.image} alt="Thumbnail" />
            </Media>
            <Media body>
                <Media heading>
                    {props.title}
                </Media>
                {props.desc}
            </Media>
        </Media>
    )
}

export default YTListItem;