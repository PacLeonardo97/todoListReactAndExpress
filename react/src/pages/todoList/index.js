import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as TodoCreators } from '../../ducks/store/todo';
import { Container, ContainerForm, ContainerAllTodos } from './styles';
import { Input } from '../../components'
const TodoList = () => {
    const titleRef = useRef('');

    const descriptionRef = useRef('');
    const dispatch = useDispatch();
    const selectAllTodos = useSelector(state => state.toDo?.payload)

    useEffect(() => {
        dispatch(TodoCreators.getAllTodo());
    }, [])

    const onSubmit = event => {
        event.preventDefault();
        const title = titleRef.current.value;
        const description = descriptionRef.current.value
        title && description && dispatch(TodoCreators.addTodo({title, description}))
    };

    const deleteTodo = id => {
        dispatch(TodoCreators.deleteTodo(id));
    }

    return (
        <Container>
            <ContainerForm onSubmit={onSubmit}>
                <Input name="title" ref={titleRef} nameLabel="Título"/>
                <Input name="description" ref={descriptionRef} nameLabel="Descrição"/>
                <button type="submit">enviar</button>
            </ContainerForm>
            <ContainerAllTodos>
                {selectAllTodos?.map(todo => (
                    <div key={todo.id}>
                        <p>Título: {todo.title}</p>
                        <p>Descrição: {todo.description}</p>
                        <button onClick={() => deleteTodo(todo.id)}>Excluir</button>
                    </div>
                ))}
            </ContainerAllTodos>
        </Container>
    )
}

export default TodoList;