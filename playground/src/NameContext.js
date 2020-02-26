import React from 'react';

const person = {
    name: "Michael", 
    Location: "Ohio"
}

const NameContext = React.createContext(person)

export const {Provider, Consumer} = NameContext

export default NameContext