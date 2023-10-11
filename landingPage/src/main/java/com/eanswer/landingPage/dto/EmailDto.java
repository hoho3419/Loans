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
    private String adminEmail;
    private String comName;
    private String clientName;
    private String contents;
    private Date regDate;
    private String phoneNm;
}
