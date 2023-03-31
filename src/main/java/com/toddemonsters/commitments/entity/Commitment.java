package com.toddemonsters.commitments.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Data
public class Commitment {

    @Id
    @Column
    private int id;

    @Column
    @NotNull(message="{NotNull.Commitments.title}")
    private String title;

    @Column
    @NotNull(message="{NotNull.Commitments.startDate}")
    private Date startDate;

    @Column
    private Date endDate;

    @Column
    @NotNull(message="{NotNull.Commitments.associationName}")
    private Date associationName;

    @Column
    private Date associationLink;

    @Column
    private String description;
}
