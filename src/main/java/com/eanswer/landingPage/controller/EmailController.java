package com.eanswer.landingPage.controller;

import com.eanswer.landingPage.dto.EmailDto;
import com.eanswer.landingPage.service.EmailService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
public class EmailController {
    @Autowired
    private EmailService emailService;

    @PostMapping("/email")
    @ResponseBody
    public Object findEmailOverlap(@RequestBody EmailDto emailDto) throws Exception {

        String email = emailDto.getAdminEmail();
        System.out.println(email);
        Boolean isTrue = emailService.sendSimpleMessage(emailDto, email);

        return new ResponseEntity<>(isTrue, HttpStatus.OK);
    }
}
