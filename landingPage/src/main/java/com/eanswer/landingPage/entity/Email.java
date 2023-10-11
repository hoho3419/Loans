package com.eanswer.landingPage.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Email {

    @Id
    @Column(name = "email_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String comName;
    private String adminEmail;
    private String clientName;
    private String contents;
    private LocalDateTime regDate;
    private String phoneNm;
}
