package mineira.cujo;

import javax.faces.bean.ManagedBean;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;

@Controller
@Scope(value = "session")
@ManagedBean(name = "emailBean")
public class SenderMailService {

    @Autowired
    private JavaMailSender mailSender;

    public  void enviar() {
        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo("noelevytete@gmail.com");
        email.setSubject("Teste envio de e-mail");
        email.setText("Enviei este e-mail usando Spring Boot.");
        mailSender.send(email);
    }
}