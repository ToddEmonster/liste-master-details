package com.bbtutorials.users.service;

import com.bbtutorials.users.entity.Todo;
import com.bbtutorials.users.repository.TodoRepository;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class TodoService {

	private TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Todo checkTodo(Integer id, boolean newStatus) {
        Optional<Todo> todo = todoRepository.findById(id);
        // TOEVOL
        if (todo.isPresent()) {
            Todo updatedTodo = todo.get();
            updatedTodo.setDone(newStatus);
            return todoRepository.save(updatedTodo);
        }
        return null;
    }

    public Optional<Todo> getOneTodo(Integer id) {
        return todoRepository.findById(id);
    }
    
    public Todo saveTodo(Todo todo) {
    	return todoRepository.save(todo);
    }

}
