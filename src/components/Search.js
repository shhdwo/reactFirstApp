// @flow

import React from 'react';
import { Form, Input, FormGroup, Label, InputGroup, InputGroupAddon, Button } from 'reactstrap';

type Props = {
    resetHandler: () => void,
    inputChangeHandler: (string) => void,
    searchTerm: string
}

const search = (props: Props) => {

    return (
        <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="search" className="mr-sm-2"><strong>Search:</strong></Label>
                <InputGroup>
                    <Input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="type to search youtube..." 
                        onChange={(event) => props.inputChangeHandler(event.target.value)}
                        value={props.searchTerm} />
                    <InputGroupAddon addonType="append">
                        <Button onClick={props.resetHandler} color="secondary">X</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default search;