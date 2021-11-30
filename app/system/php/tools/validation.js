<?php

function validate_name($name){

	if(cout($name) > 5 && $name != null){

        return "true";

	}else{

		return "false";

	}

}

function validate_email($email){

}

function validate_password($password){

	if(cout($password) > 5 && $password != null){

		return "true";

	}else{

		return "false";

	} 

}

function validate_url($url){

}




?>