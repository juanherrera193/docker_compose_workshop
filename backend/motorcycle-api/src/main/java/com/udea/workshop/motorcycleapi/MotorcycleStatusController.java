package com.udea.workshop.motorcycleapi;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/status")
public class MotorcycleStatusController {

    @GetMapping
    public ResponseEntity<String> status() {
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
