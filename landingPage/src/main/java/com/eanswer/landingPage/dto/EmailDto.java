package com.eanswer.landingPage.dto;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EmailDto {
    private Long id;
    private String adminEmail; // 업체 이메일
    private String comName;    // 업체명
    private String clientName; // 상담요청 고객성함
    private String contents;   // 상담내용 <-- 사용안함
    private Date regDate;      // 상담신청 일자
    private String phoneNm;    // 상담요청 고객번호
}
