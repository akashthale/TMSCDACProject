package com.app.dto;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoginRequest {
	@NotBlank(message = "email is required")
	private String email;
	@NotBlank(message = "password is required")
	private String password;

}
