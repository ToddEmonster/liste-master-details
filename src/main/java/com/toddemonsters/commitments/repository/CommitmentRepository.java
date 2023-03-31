package com.toddemonsters.commitments.repository;

import com.toddemonsters.commitments.entity.Commitment;
import com.toddemonsters.commitments.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource()
public interface CommitmentRepository extends JpaRepository<Commitment, Integer>, JpaSpecificationExecutor<Todo>, QuerydslPredicateExecutor<Todo> {}
