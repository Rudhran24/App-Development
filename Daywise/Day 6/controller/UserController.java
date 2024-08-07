package com.example.backend.controller;

import com.example.backend.model.UserModel;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
// import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;
    @GetMapping
    // @PreAuthorize("hasAuthority('USER')or hasAuthority('ADMIN')")
    public List<UserModel> getAllUsers() {
        return userService.getAllUsers();
    }
    @GetMapping("/{id}")
    // @PreAuthorize("hasAuthority('USER')or hasAuthority('ADMIN')")
    public ResponseEntity<UserModel> getUserById(@PathVariable Long id) {
        Optional<UserModel> user = userService.getUserById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/createUser")
    // @PreAuthorize("hasAuthority('USER')or hasAuthority('ADMIN')")
    public UserModel createUser(@RequestBody UserModel user) {
        return userService.createUser(user);
    }

    @PutMapping("/{id}")
    // @PreAuthorize("hasAuthority('USER')or hasAuthority('ADMIN')")
    public ResponseEntity<UserModel> updateUser(@PathVariable Long id, @RequestBody UserModel userDetails) {
        Optional<UserModel> user = userService.getUserById(id);
        if (user.isPresent()) {
            UserModel updatedUser = userService.updateUser(id, userDetails);
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    
    @DeleteMapping("/{id}")
// @PreAuthorize("hasAuthority('USER')or hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        if (userService.getUserById(id).isPresent()) {
            userService.deleteUser(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
