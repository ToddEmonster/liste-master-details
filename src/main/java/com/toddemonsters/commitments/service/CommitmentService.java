package com.toddemonsters.commitments.service;

import com.toddemonsters.commitments.entity.Commitment;
import com.toddemonsters.commitments.repository.CommitmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;
import java.util.List;
import java.util.Optional;

@Slf4j
@Component
public class CommitmentService {

    @Autowired
	private CommitmentRepository commitmentRepository;

    public List<Commitment> getAllCommitments() {
        return commitmentRepository.findAll();
    }

    public Optional<Commitment> getOneCommitment(Integer id) {
        return commitmentRepository.findById(id);
    }

    public Commitment saveCommitment(Commitment commitment) {
    	return commitmentRepository.save(commitment);
    }

}
