package com.bbtutorials.users.controller;

import com.bbtutorials.users.entity.Todo;
import com.bbtutorials.users.entity.Users;
import com.bbtutorials.users.links.TodoLinks;
import com.bbtutorials.users.links.UserLinks;
import com.bbtutorials.users.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/")
public class TodoController {

    @Autowired
    TodoService todoService;

    @GetMapping(path = TodoLinks.LIST_TODOS)
    public ResponseEntity<?> listTodos() {
        log.info("TodoController: list todos");
        List<Todo> resource = todoService.getAllTodos();
        return ResponseEntity.ok(resource);
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> updateTodoStatus(@PathVariable Integer id, @RequestBody String newStatus) {
        log.info("TodoController:  update todo status");
        Todo resource = todoService.updateTodoStatus(id, Boolean.parseBoolean(newStatus));
        return ResponseEntity.ok(resource);
    }

    @PostMapping(path = TodoLinks.ADD_TODO)
    public ResponseEntity<?> saveTodo(@RequestBody Todo todo) {
        log.info("TodoController:  save todo");
        Todo resource = todoService.saveTodo(todo);
        return ResponseEntity.ok(resource);
    }
}
