import React, {useState} from 'react'
import {Form} from 'semantic-ui-react'

export default function MenuForm({addMenu}) {
    const [menus, setMenu] = useState('')

    function handleSubmit(e) {
        addMenu(menus)
        setMenu("")
    }
    
    return (

        <Form onSubmit = {handleSubmit}>
            <Form.Input
            label = {"Menu Name"}
            placeholder = {"Enter Todo"}
            required
            value = {menus}
            onChange = {(e) => setMenu(e.target.value)}
            />
            <Form.Button>Add</Form.Button>
        </Form>
    )

}