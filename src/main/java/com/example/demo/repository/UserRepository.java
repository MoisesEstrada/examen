package com.example.demo.repository;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    // ESTA LÍNEA ES LA QUE TE FALTA O ESTÁ MAL ESCRITA:
    Optional<User> findByUsername(String username);
}