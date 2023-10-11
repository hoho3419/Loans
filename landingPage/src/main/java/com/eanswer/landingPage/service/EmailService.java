package com.eanswer.landingPage.service;

import com.eanswer.landingPage.dto.EmailDto;
import com.eanswer.landingPage.entity.Email;
import com.eanswer.landingPage.repository.EmailRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.time.LocalDateTime;
import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;

@PropertySource("classpath:application.properties")
@Slf4j
@RequiredArgsConstructor
@Service

public class EmailService {

    private final JavaMailSender javaMailSender;
    private final EmailRepository emailRepository;
    private EmailDto emailDto;

    @Value("${spring.mail.nickName}")
    private String id;

    public Boolean sendSimpleMessage(EmailDto emailDto, String adminEmail) throws Exception {
        MimeMessage message = createMessage(emailDto, adminEmail);
        try{
            javaMailSender.send(message); // 메일 발송
        }catch(MailException es){
            es.printStackTrace();
            throw new IllegalArgumentException();
        }
        Email email = new Email();
        email.setComName(emailDto.getComName());
        email.setClientName(emailDto.getClientName());
        email.setAdminEmail(emailDto.getAdminEmail());
        email.setPhoneNm(emailDto.getPhoneNm());
        email.setContents(emailDto.getContents());
        email.setRegDate(LocalDateTime.now());
        emailRepository.save(email);

        return true;
    }

    public MimeMessage createMessage(EmailDto emailDto, String adminEmail) throws MessagingException, UnsupportedEncodingException {
        log.info("보내는 대상 : " + adminEmail);
        MimeMessage message = javaMailSender.createMimeMessage();

        String comName = emailDto.getComName();

        message.addRecipients(MimeMessage.RecipientType.TO, adminEmail); // to 보내는 대상
        message.setSubject("[" + comName + "] 문의요청"); //메일 제목

        String clientName = emailDto.getClientName();
        String phoneNm = emailDto.getPhoneNm();

        String msg="";
        msg += "<h3 style=\"font-size: 20px; padding-right: 30px; padding-left: 30px; margin-bottom: 30px;\">[" + comName + "] 문의요청</h3>";
        msg += "</p>";
        msg += "<p style=\"font-size: 17px; padding-right: 30px; padding-left: 30px; margin-bottom: 30px;\"> 전화번호 : ";
        msg += phoneNm;
        msg += "</p>";
        msg += "<p style=\"font-size: 17px; padding-right: 30px; padding-left: 30px; margin-bottom: 30px;\"> 상담 고객 성명 : ";
        msg += clientName;
        msg += "</p>";

        message.setText(msg, "utf-8", "html"); //내용, charset타입, subtype
        message.setFrom(new InternetAddress(id, comName)); //보내는 사람의 메일 주소, 보내는 사람 이름

        return message;
    }
}
