package com.example.DnDProject.Entities.Monster.Topography.Sensitivities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Top_Weakness {

    @Id //describes what type of terrain the monster will have an disadvantage
        //example: long-range units will have an easier fighting in narrow corridors
    private int id;

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }//Getters and Setters
}
