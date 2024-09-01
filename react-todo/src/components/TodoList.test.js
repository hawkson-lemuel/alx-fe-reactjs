import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('renders initial todo items', () => {
  render(<TodoList />);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(2);
});

test('can add a new todo item', () => {
  render(<TodoList />);
  const input = screen.getByRole('textbox');
  const addButton = screen.getByText('Add Todo');
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(3);
});

test('can toggle todo completion status', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: none');
});

test('can delete a todo item', () => {
  render(<TodoList />);
  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);
  const todoItems = screen.queryAllByRole('listitem');
  expect(todoItems).toHaveLength(1);
});
