package com.example.DnDProject.Entities.Spell;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "spell_type")
public class SpellType {
    @Id
    @Column(name = "name",length = 32)
    private String name;

    @OneToMany(mappedBy = "spellType", orphanRemoval = true)
    private List<Spell> spells = new ArrayList<>();


    //Getters and Setters
    public List<Spell> getSpells() {
        return spells;
    }

    public void setSpells(List<Spell> spells) {
        this.spells = spells;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
