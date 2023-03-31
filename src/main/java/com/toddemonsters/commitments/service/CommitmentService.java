package com.toddemonsters.commitments.service;

import com.toddemonsters.commitments.entity.Commitment;
import com.toddemonsters.commitments.repository.CommitmentRepository;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class CommitmentService {

	private CommitmentRepository commitmentRepository;

    public CommitmentService(CommitmentRepository commitmentRepository) {
        this.commitmentRepository = commitmentRepository;
    }

    public List<Commitment> getAllCommitments() {
        return commitmentRepository.findAll();
    }

    public Optional<Commitment> getOneCommitment(Integer id) {
        return commitmentRepository.findById(id);
    }

    public Commitment saveCommitment(Commitment todo) {
    	return commitmentRepository.save(todo);
    }

}
