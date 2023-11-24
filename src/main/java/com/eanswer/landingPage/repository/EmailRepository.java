package com.eanswer.landingPage.repository;

import com.eanswer.landingPage.entity.Email;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailRepository extends JpaRepository<Email, Long> {
}
