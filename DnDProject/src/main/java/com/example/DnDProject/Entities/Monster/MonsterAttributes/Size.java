package com.example.DnDProject.Entities.Monster.MonsterAttributes;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Size {
    @Id
    private String name;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
