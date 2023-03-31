package com.toddemonsters.commitments.controller;

import com.toddemonsters.commitments.entity.Commitment;
import com.toddemonsters.commitments.links.CommitmentLinks;
import com.toddemonsters.commitments.service.CommitmentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/")
public class CommitmentController {

    @Autowired
    CommitmentService todoService;

    @GetMapping(path = CommitmentLinks.LIST_COMMITMENTS)
    public ResponseEntity<?> listCommitments() {
        log.info("CommitmentController: list todos");
        List<Commitment> resource = todoService.getAllCommitments();
        return ResponseEntity.ok(resource);
    }

    @GetMapping(path = CommitmentLinks.SINGLE_COMMITMENT + "/{id}")
    public ResponseEntity<?> getOneCommitment(@PathVariable Integer id) {
        log.info("CommitmentController: get one todo");
        Commitment resource = todoService.getOneCommitment(id).get(); // COMMITMENT handle exception
        return ResponseEntity.ok(resource);
    }

    @PostMapping(path = CommitmentLinks.SINGLE_COMMITMENT)
    public ResponseEntity<?> saveCommitment(@RequestBody Commitment todo) {
        log.info("CommitmentController:  save todo");
        Commitment resource = todoService.saveCommitment(todo);
        return ResponseEntity.ok(resource);
    }
}
