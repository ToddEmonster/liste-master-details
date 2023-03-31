package com.toddemonsters.commitments.service;

import java.util.List;

import com.toddemonsters.commitments.repository.UsersRepository;
import org.springframework.stereotype.Component;

import com.toddemonsters.commitments.entity.Users;

@Component
public class UsersService {
	
	private UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<Users> getUsers() {
        return usersRepository.findAll();
    }
    
    public Users saveUser(Users users) {
    	return usersRepository.save(users);
    }

}
