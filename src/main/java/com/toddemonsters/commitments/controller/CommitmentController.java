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
    CommitmentService commitmentService;

    @GetMapping(path = CommitmentLinks.LIST_COMMITMENTS)
    public ResponseEntity<List<Commitment>> listCommitments() {
        List<Commitment> resource = commitmentService.getAllCommitments();
        return ResponseEntity.ok(resource);
    }

    @GetMapping(path = CommitmentLinks.SINGLE_COMMITMENT + "/{id}")
    public ResponseEntity<Commitment> getOneCommitment(@PathVariable Integer id) {
        log.info("CommitmentController: get one commitment");
        Commitment resource = commitmentService.getOneCommitment(id).get(); // TODO handle exception
        return ResponseEntity.ok(resource);
    }

    @PostMapping(path = CommitmentLinks.SINGLE_COMMITMENT)
    public ResponseEntity<Commitment> saveCommitment(@RequestBody Commitment commitment) {
        log.info("CommitmentController:  save commitment");
        Commitment resource = commitmentService.saveCommitment(commitment);
        return ResponseEntity.ok(resource);
    }
}
