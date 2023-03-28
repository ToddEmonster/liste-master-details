package com.bbtutorials.users.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class Todo {

    @Id
    @Column
    private int id;

    @Column
    @NotNull(message="{NotNull.Todo.title}")
    private String title;

    @Column
    @NotNull(message="{NotNull.Todo.isDone}")
    private boolean isDone;

    @Column
    private String description;
}
