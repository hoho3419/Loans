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
    private String comName;        // 업체명
    private String adminEmail;     // 업체 이메일
    private String clientName;     // 상담요청 고객성함
    private String contents;       // 상담내용 <-- 사용안함
    private LocalDateTime regDate; // 상담신청 일자
    private String phoneNm;        // 상담요청 고객번호
}
