package com.GMU.Survey.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "surveys")
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", length = 50, nullable = false)
    private String firstName;

    @Column(name = "last_name", length = 50, nullable = false)
    private String lastName;

    @Column(name = "address", length = 255, nullable = false)
    private String address;

    @Column(name = "city", length = 100, nullable = false)
    private String city;

    @Column(name = "state", length = 2, nullable = false)
    private String state;

    @Column(name = "zip", length = 20, nullable = false)
    private String zip;

    @Column(name = "telephone", length = 20, nullable = false)
    private String telephone;

    @Column(name = "email", length = 100, nullable = false)
    private String email;

    @Temporal(TemporalType.DATE)
    @Column(name = "date_of_survey", nullable = false)
    private Date dateOfSurvey;

    @Column(name = "students", nullable = false)
    private boolean students;

    @Column(name = "location", nullable = false)
    private boolean location;

    @Column(name = "campus", nullable = false)
    private boolean campus;

    @Column(name = "atmosphere", nullable = false)
    private boolean atmosphere;

    @Column(name = "dorms", nullable = false)
    private boolean dorms;

    @Column(name = "sports", nullable = false)
    private boolean sports;

    @Enumerated(EnumType.STRING)
    @Column(name = "interest_origin", length = 50, nullable = true)
    private InterestOrigin interestOrigin;

    @Enumerated(EnumType.STRING)
    @Column(name = "recommendation_likelihood", length = 50, nullable = true)
    private RecommendationLikelihood recommendationLikelihood;

    @Lob
    @Column(name = "feedback", nullable = true)
    private String feedback;

    @Lob
    @Column(name = "additional_comments", nullable = true)
    private String additionalComments;

    // Enums for the 'interest_origin' and 'recommendation_likelihood' fields
    public enum InterestOrigin {
        Friends, Television, Internet, Other, NULL
    }

    public enum RecommendationLikelihood {
        Very_Likely, Likely, Unlikely, NULL
    }

    // Getters
    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getAddress() {
        return address;
    }

    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }

    public String getZip() {
        return zip;
    }

    public String getTelephone() {
        return telephone;
    }

    public String getEmail() {
        return email;
    }

    public Date getDateOfSurvey() {
        return dateOfSurvey;
    }

    public boolean isStudents() {
        return students;
    }

    public boolean isLocation() {
        return location;
    }

    public boolean isCampus() {
        return campus;
    }

    public boolean isAtmosphere() {
        return atmosphere;
    }

    public boolean isDorms() {
        return dorms;
    }

    public boolean isSports() {
        return sports;
    }

    public InterestOrigin getInterestOrigin() {
        return interestOrigin;
    }

    public RecommendationLikelihood getRecommendationLikelihood() {
        return recommendationLikelihood;
    }

    public String getFeedback() {
        return feedback;
    }

    public String getAdditionalComments() {
        return additionalComments;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    
    public void setAddress(String address) {
        this.address = address;
    }
    
    public void setCity(String city) {
        this.city = city;
    }
    
    public void setState(String state) {
        this.state = state;
    }
    
    public void setZip(String zip) {
        this.zip = zip;
    }
    
    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public void setDateOfSurvey(Date dateOfSurvey) {
        this.dateOfSurvey = dateOfSurvey;
    }
    
    public void setStudents(boolean students) {
        this.students = students;
    }
    
    public void setLocation(boolean location) {
        this.location = location;
    }
    
    public void setCampus(boolean campus) {
        this.campus = campus;
    }
    
    public void setAtmosphere(boolean atmosphere) {
        this.atmosphere = atmosphere;
    }
    
    public void setDorms(boolean dorms) {
        this.dorms = dorms;
    }
    
    public void setSports(boolean sports) {
        this.sports = sports;
    }
    
    public void setInterestOrigin(InterestOrigin interestOrigin) {
        this.interestOrigin = interestOrigin;
    }
    
    public void setRecommendationLikelihood(RecommendationLikelihood recommendationLikelihood) {
        this.recommendationLikelihood = recommendationLikelihood;
    }
    
    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }
    
    public void setAdditionalComments(String additionalComments) {
        this.additionalComments = additionalComments;
    }
}