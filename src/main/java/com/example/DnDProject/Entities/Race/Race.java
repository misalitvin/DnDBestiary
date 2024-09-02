package com.example.DnDProject.Entities.Race;


import com.example.DnDProject.Entities.MtoMConnections.MonsterAction;
import com.example.DnDProject.Entities.MtoMConnections.RaceAttribute;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Race {
    @Id
    private String name;
    @OneToMany(mappedBy = "race", orphanRemoval = true)
     private List<RaceAbility> abilities = new ArrayList<>();

    @OneToMany(mappedBy = "race", orphanRemoval = true)
    private List<Character> characters = new ArrayList<>();

    @OneToMany(mappedBy = "race", orphanRemoval = true)
    private List<RaceAttribute> raceAttributeList = new ArrayList<>();

    public List<RaceAbility> getAbilities() {
        return abilities;
    }

    public void setAbilities(List<RaceAbility> abilities) {
        this.abilities = abilities;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }//Getters and Setters
}
