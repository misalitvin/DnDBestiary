package com.example.DnDProject.Entities.Monster.Action;

import com.example.DnDProject.Entities.MtoMConnections.MonsterAction;
import jakarta.persistence.Entity;
import org.hibernate.annotations.*;

import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.*;

@Entity
public class Action {

    @Id
    private String name;

    @OneToMany(mappedBy = "action", orphanRemoval = true)
    private List<MonsterAction> monsterActions = new ArrayList<>();
    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }//Getters and Setters
}