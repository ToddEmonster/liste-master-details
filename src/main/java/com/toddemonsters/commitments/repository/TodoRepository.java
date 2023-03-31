package com.toddemonsters.commitments.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.toddemonsters.commitments.entity.Todo;

@RepositoryRestResource()
public interface TodoRepository extends JpaRepository<Todo, Integer>, JpaSpecificationExecutor<Todo>, QuerydslPredicateExecutor<Todo> {}
