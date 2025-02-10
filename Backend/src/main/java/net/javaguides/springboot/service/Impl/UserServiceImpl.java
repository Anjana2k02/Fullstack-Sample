package net.javaguides.springboot.service.Impl;

import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.User;
import net.javaguides.springboot.repository.UserRepositary;
import net.javaguides.springboot.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepositary userRepositary;

    @Override
    public User createUser(User user) {
        return userRepositary.save(user);
    }

    @Override
    public User getUserById(Long userId) {
        Optional<User> optionalUser = userRepositary.findById(userId);
        return optionalUser.get();
    }

    @Override
    public List<User> getAllUsers() {
        return userRepositary.findAll();
    }

    @Override
    public User updateUser(User user) {
        User existinguser = userRepositary.findById(user.getId()).get();
        existinguser.setFirstName(user.getFirstName());
        existinguser.setLastName(user.getLastName());
        existinguser.setEmail(user.getEmail());
        User updatedUser = userRepositary.save(existinguser);
        return updatedUser;
    }
}
