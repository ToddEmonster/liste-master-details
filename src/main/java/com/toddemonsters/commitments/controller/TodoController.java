package com.toddemonsters.commitments.controller;

import com.toddemonsters.commitments.entity.Todo;
import com.toddemonsters.commitments.links.TodoLinks;
import com.toddemonsters.commitments.service.TodoService;
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

    @GetMapping(path = TodoLinks.SINGLE_TODO + "/{id}")
    public ResponseEntity<?> getOneTodo(@PathVariable Integer id) {
        log.info("TodoController: get one todo");
        Todo resource = todoService.getOneTodo(id).get(); // TODO handle exception
        return ResponseEntity.ok(resource);
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> updateTodoStatus(@PathVariable Integer id, @RequestBody String newStatus) {
        log.info("TodoController:  update todo status");
        Todo resource = todoService.updateTodoStatus(id, Boolean.parseBoolean(newStatus));
        return ResponseEntity.ok(resource);
    }

    @PostMapping(path = TodoLinks.SINGLE_TODO)
    public ResponseEntity<?> saveTodo(@RequestBody Todo todo) {
        log.info("TodoController:  save todo");
        Todo resource = todoService.saveTodo(todo);
        return ResponseEntity.ok(resource);
    }
}
