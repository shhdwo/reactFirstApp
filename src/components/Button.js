// @flow

import React from 'react';
import { Button } from 'reactstrap';

type Props = {
    content: string,
    clickButtonHandler: () => void
}

const button = (props: Props) => {
    return <Button onClick={props.clickButtonHandler} color="info">{props.content}</Button>
}

export default button;