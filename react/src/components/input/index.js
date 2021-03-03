import React, { forwardRef } from 'react';
import { Container } from './style';

const Input = forwardRef(({ name, required, nameLabel }, ref) => {
    return(
        <Container>
            <input type="text" id={name} ref={ref} name={name} required={required}/>
            <label>{nameLabel}</label>
        </Container>
    )
})

export default Input;